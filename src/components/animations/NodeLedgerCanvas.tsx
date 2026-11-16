import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function NodeLedgerCanvas({ className = '' }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
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
    renderer.toneMappingExposure = 1.1;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 340;
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTex = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 7.6);
    camera.lookAt(0, 0, 0);

    const hemi = new THREE.HemisphereLight(0xfff9f4, 0x4a372a, 0.8);
    scene.add(hemi);
    const keyLight = new THREE.DirectionalLight(0xffe7c7, 2.0);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const group = new THREE.Group();
    scene.add(group);

    // 5 Composite Connected Blocks along a gentle arc
    const blockCount = 5;
    const blockAnchors: THREE.Vector3[] = [];
    const blockOuterGeo = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    const blockInnerGeo = new THREE.OctahedronGeometry(0.28, 0);
    const capGeo = new THREE.BoxGeometry(1.02, 0.08, 1.02);

    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x916e55,
      metalness: 0.35,
      roughness: 0.25,
      transparent: true,
      opacity: 0.72,
      clearcoat: 0.8,
    });
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xd9be9d,
      metalness: 0.85,
      roughness: 0.2,
      emissive: new THREE.Color(0xd9be9d),
      emissiveIntensity: 0.35,
    });
    const capMat = new THREE.MeshStandardMaterial({
      color: 0xe5d6ca,
      metalness: 0.65,
      roughness: 0.35,
    });

    const blockUnits: { unit: THREE.Group; core: THREE.Mesh; baseY: number }[] = [];

    for (let i = 0; i < blockCount; i++) {
      const t = (i / (blockCount - 1)) * 2 - 1; // -1 to 1
      const x = t * 2.75;
      const y = Math.cos(t * Math.PI * 0.5) * 0.45 - 0.15;
      const z = -Math.abs(t) * 0.65;
      const pos = new THREE.Vector3(x, y, z);
      blockAnchors.push(pos);

      const unit = new THREE.Group();
      unit.position.copy(pos);

      const outer = new THREE.Mesh(blockOuterGeo, outerMat);
      const inner = new THREE.Mesh(blockInnerGeo, innerMat);
      const topCap = new THREE.Mesh(capGeo, capMat);
      topCap.position.y = 0.51;
      const botCap = new THREE.Mesh(capGeo, capMat);
      botCap.position.y = -0.51;

      unit.add(outer, inner, topCap, botCap);
      group.add(unit);
      blockUnits.push({ unit, core: inner, baseY: y });
    }

    // Spline tube connecting blocks
    const curve = new THREE.CatmullRomCurve3(blockAnchors);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.032, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xd9be9d,
      metalness: 0.8,
      roughness: 0.25,
      transparent: true,
      opacity: 0.7,
    });
    const spineTube = new THREE.Mesh(tubeGeo, tubeMat);
    group.add(spineTube);

    // Animated Data Packets traveling along the spline
    const packetGeo = new THREE.SphereGeometry(0.11, 14, 14);
    const packetMat = new THREE.MeshStandardMaterial({
      color: 0xfff9f4,
      emissive: new THREE.Color(0xd9be9d),
      emissiveIntensity: 1.2,
      roughness: 0.15,
    });
    const packets = [0, 0.33, 0.66].map((offset) => {
      const mesh = new THREE.Mesh(packetGeo, packetMat);
      group.add(mesh);
      return { mesh, offset };
    });

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    const clock = new THREE.Clock();
    let frameId = 0;
    let disposed = false;

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

    const resizeObserver = new ResizeObserver(() => {
      if (!container || disposed) return;
      const w = container.clientWidth || 520;
      const h = container.clientHeight || 340;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
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

    let elapsed = 0;
    const tempPoint = new THREE.Vector3();

    function tick() {
      if (disposed || !isVisibleRef.current) return;
      const delta = Math.min(clock.getDelta(), 0.1);
      elapsed += delta;

      group.rotation.y = Math.sin(elapsed * 0.35) * 0.14;

      blockUnits.forEach((b, idx) => {
        b.unit.position.y = b.baseY + Math.sin(elapsed * 1.4 + idx * 0.9) * 0.06;
        b.core.rotation.y += delta * 0.9;
        b.core.rotation.x += delta * 0.45;
      });

      packets.forEach((p) => {
        const u = (elapsed * 0.22 + p.offset) % 1;
        curve.getPointAt(u, tempPoint);
        p.mesh.position.copy(tempPoint);
      });

      renderer.render(scene, camera);
      scheduleNext();
    }

    function scheduleNext() {
      if (disposed || !isVisibleRef.current) return;
      if (isSoftwareGl) afterDraw(tick);
      else frameId = requestAnimationFrame(tick);
    }

    renderer.render(scene, camera);
    scheduleNext();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      observer.disconnect();
      resizeObserver.disconnect();
      blockOuterGeo.dispose();
      blockInnerGeo.dispose();
      capGeo.dispose();
      outerMat.dispose();
      innerMat.dispose();
      capMat.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      envTex.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  if (reducedMotion || webglFailed) {
    return (
      <div className={`flex items-center justify-center p-6 ${className}`}>
        <svg viewBox="0 0 460 140" className="w-full max-w-md h-auto" aria-label="Connected modular blocks diagram">
          <line x1="46" y1="70" x2="414" y2="70" stroke="#D9BE9D" strokeWidth="3" strokeDasharray="6 4" />
          {[46, 138, 230, 322, 414].map((x, i) => (
            <g key={i}>
              <rect x={x - 24} y="46" width="48" height="48" rx="10" fill="#916E55" fillOpacity="0.22" stroke="#D9BE9D" strokeWidth="1.5" />
              <circle cx={x} cy="70" r="7" fill="#D9BE9D" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[300px] sm:h-[340px] ${className}`}
      aria-label="3D connected node architecture visualization"
      role="img"
    />
  );
}
