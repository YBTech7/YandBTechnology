import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';

export function Accessibility() {
  return (
    <>
      <SEOHead
        title="Accessibility Statement"
        description="Accessibility commitment of Y & B Technology targeting WCAG 2.2 AA compliance across keyboard navigation, contrast, screen readers, and reduced motion."
        path="/accessibility"
      />

      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <header className="space-y-3 border-b border-[#4A372A]/12 dark:border-[#D9BE9D]/15 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Inclusive Digital Experience
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#4A372A] dark:text-[#FFF9F4]">
              Accessibility Statement
            </h1>
            <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
              Targeting Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#4A372A]/90 dark:text-[#E5D6CA]">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Our Commitment
              </h2>
              <p>
                Y &amp; B Technology is committed to making our public digital presence accessible
                to visitors regardless of ability or assistive technology.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Implemented Measures
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Keyboard Navigation &amp; Skip Links:</strong> Full keyboard operability
                  with visible focus indicators and a direct &ldquo;Skip to main content&rdquo;
                  landmark link.
                </li>
                <li>
                  <strong>Semantic Structure &amp; ARIA:</strong> Structured heading hierarchies,
                  accessible form labels, error announcements via{' '}
                  <code className="font-mono-tabular">role=&quot;alert&quot;</code>, and ARIA-wired
                  FAQ accordions.
                </li>
                <li>
                  <strong>Color Contrast &amp; Dual Themes:</strong> High-contrast Light (Warm Ivory
                  and Espresso) and Dark (Espresso and Warm Ivory) themes tested for readability.
                </li>
                <li>
                  <strong>Reduced-Motion Support:</strong> Respects{' '}
                  <code className="font-mono-tabular">prefers-reduced-motion</code> by replacing
                  continuous 3D WebGL loops and transitions with calm static illustrations.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                Feedback &amp; Assistance
              </h2>
              <p>
                If you encounter any accessibility barrier while navigating this website, please let
                us know through our{' '}
                <Link to="/contact" className="font-semibold text-[#916E55] dark:text-[#D9BE9D] underline">
                  Contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
