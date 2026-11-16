import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NeuralSphereCanvasProps {
  className?: string;
  interactive?: boolean;
}

const _vec3 = new THREE.Vector3();
const _mat4 = new THREE.Matrix4();
const _quat = new THREE.Quaternion();
const _scale = new THREE.Vector3();
const _color = new THREE.Color();

function createParticleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 249, 244, 1)');
    grad.addColorStop(0.35, 'rgba(217, 190, 157, 0.75)');
    grad.addColorStop(1, 'rgba(217, 190, 157, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function NeuralSphereCanvas({
  className = '',
  interactive = true,
}: NeuralSphereCanvasProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);
  const reducedMotion = useReducedMotion();
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container || reducedMotion) return;

    let renderer: THREE.WebGLRenderer;
    let isSoftwareGl = false;

    try {
      const probe = document.createElement('canvas').getContext('webgl2');
      if (!probe) {
        isSoftwareGl = true;
      } else {
        const ext = probe.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : probe.RENDERER;
        const gpu = String(probe.getParameter(param));
        probe.getExtension('WEBGL_lose_context')?.loseContext();
        isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      }

      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 460;
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTex = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    // Warm champagne key & mocha rim lighting
    const hemi = new THREE.HemisphereLight(0xfff9f4, 0x4a372a, 0.75);
    scene.add(hemi);
    const keyLight = new THREE.DirectionalLight(0xffe7c7, 2.2);
    keyLight.position.set(4, 4, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xd9be9d, 1.4);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Fibonacci Sphere Nodes (InstancedMesh)
    const nodeCount = 72;
    const radius = 1.85;
    const points: THREE.Vector3[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const px = Math.cos(theta) * r * radius;
      const py = y * radius;
      const pz = Math.sin(theta) * r * radius;
      points.push(new THREE.Vector3(px, py, pz));
    }

    const nodeGeo = new THREE.IcosahedronGeometry(0.058, 1);
    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.75,
      roughness: 0.22,
      emissive: new THREE.Color(0x916e55),
      emissiveIntensity: 0.45,
      clearcoat: 0.6,
    });

    const nodeInstanced = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);
    const palette = [0xd9be9d, 0xfff9f4, 0xc49c6e, 0xe5d6ca];

    for (let i = 0; i < nodeCount; i++) {
      const s = i % 7 === 0 ? 1.45 : 0.85 + (i % 5) * 0.08;
      _scale.set(s, s, s);
      _quat.identity();
      _mat4.compose(points[i], _quat, _scale);
      nodeInstanced.setMatrixAt(i, _mat4);
      _color.setHex(palette[i % palette.length]);
      nodeInstanced.setColorAt(i, _color);
    }
    nodeInstanced.instanceMatrix.needsUpdate = true;
    if (nodeInstanced.instanceColor) nodeInstanced.instanceColor.needsUpdate = true;
    nodeInstanced.computeBoundingSphere();
    rootGroup.add(nodeInstanced);

    // 2. Neural Synaptic Line Connections
    const linePositions: number[] = [];
    const maxDist = 1.15;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (points[i].distanceTo(points[j]) < maxDist) {
          linePositions.push(
            points[i].x,
            points[i].y,
            points[i].z,
            points[j].x,
            points[j].y,
            points[j].z
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd9be9d,
      transparent: true,
      opacity: 0.36,
    });
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    rootGroup.add(networkLines);

    // 3. Inner Intelligence Core & Precision Orbital Rings
    const coreGeo = new THREE.IcosahedronGeometry(0.68, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x916e55,
      metalness: 0.55,
      roughness: 0.35,
      wireframe: true,
      transparent: true,
      opacity: 0.42,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    const ringGeo1 = new THREE.TorusGeometry(2.28, 0.012, 12, 96);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xd9be9d,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.set(Math.PI / 3.2, Math.PI / 7, 0);
    rootGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.48, 0.009, 12, 96);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xe5d6ca,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.set(-Math.PI / 3.6, -Math.PI / 5, 0);
    rootGroup.add(ring2);

    // 4. Subtle Drifting Data Particles
    const particleCount = 90;
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.2 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particleTex = createParticleTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.11,
      map: particleTex,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    const clock = new THREE.Clock();
    let frameId = 0;
    let disposed = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointerRef.current.x = THREE.MathUtils.clamp(nx, -1, 1);
      pointerRef.current.y = THREE.MathUtils.clamp(ny, -1, 1);
    };

    if (interactive && window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const wasVisible = isVisibleRef.current;
        isVisibleRef.current = entry.isIntersecting;
        if (!wasVisible && entry.isIntersecting && !disposed) {
          clock.getDelta();
          scheduleNext();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!container || disposed) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) return;
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    let currentRotX = 0;
    let currentRotY = 0;
    let spinAngle = 0;

    function tick() {
      if (disposed || !isVisibleRef.current) return;
      const delta = Math.min(clock.getDelta(), 0.1);
      spinAngle += delta * 0.18;

      const targetTiltX = pointerRef.current.y * 0.22;
      const targetTiltY = pointerRef.current.x * 0.32;
      currentRotX = THREE.MathUtils.damp(currentRotX, targetTiltX, 4, delta);
      currentRotY = THREE.MathUtils.damp(currentRotY, targetTiltY, 4, delta);

      rootGroup.rotation.x = currentRotX;
      rootGroup.rotation.y = spinAngle + currentRotY;
      coreMesh.rotation.y = -spinAngle * 0.7;
      ring1.rotation.z += delta * 0.14;
      ring2.rotation.z -= delta * 0.1;
      particles.rotation.y = -spinAngle * 0.25;

      // Subtle pulse on core opacity
      _vec3.set(1, 1, 1);
      renderer.render(scene, camera);
      scheduleNext();
    }

    function scheduleNext() {
      if (disposed || !isVisibleRef.current) return;
      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    // Initial draw
    renderer.render(scene, camera);
    scheduleNext();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);

      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTex.dispose();
      envTex.dispose();
      renderer.dispose();
    };
  }, [interactive, reducedMotion]);

  if (reducedMotion || webglFailed) {
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        aria-label="Static neural network illustration"
      >
        <svg viewBox="0 0 360 360" className="w-full max-w-[380px] h-auto" role="img" aria-hidden="true">
          <defs>
            <radialGradient id="yb-sphere-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D9BE9D" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#916E55" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="180" cy="180" r="150" fill="url(#yb-sphere-glow)" />
          <circle cx="180" cy="180" r="118" fill="none" stroke="#D9BE9D" strokeOpacity="0.35" strokeWidth="1" />
          <ellipse cx="180" cy="180" rx="142" ry="54" transform="rotate(-24 180 180)" fill="none" stroke="#D9BE9D" strokeOpacity="0.45" strokeWidth="1.2" />
          <ellipse cx="180" cy="180" rx="142" ry="54" transform="rotate(32 180 180)" fill="none" stroke="#E5D6CA" strokeOpacity="0.3" strokeWidth="1" />
          {[
            [180, 72], [256, 118], [268, 206], [198, 274], [112, 248], [94, 152], [180, 180], [220, 166], [142, 198],
          ].map(([cx, cy], idx, arr) => (
            <g key={idx}>
              {idx < arr.length - 1 && (
                <line
                  x1={cx}
                  y1={cy}
                  x2={arr[(idx + 2) % arr.length][0]}
                  y2={arr[(idx + 2) % arr.length][1]}
                  stroke="#D9BE9D"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
              )}
              <circle cx={cx} cy={cy} r={idx === 6 ? 7 : 4.5} fill="#FFF9F4" stroke="#D9BE9D" strokeWidth="2" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[320px] ${className}`}
      aria-label="Interactive 3D AI neural network sphere visualization"
      role="img"
    />
  );
}
