import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';

export function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Privacy Policy and Data Protection commitment of Y & B Technology in alignment with the Philippine Data Privacy Act of 2012 (RA 10173)."
        path="/privacy"
      />

      <section className="py-16 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <header className="space-y-3 border-b border-[#4A372A]/12 dark:border-[#D9BE9D]/15 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#916E55] dark:text-[#D9BE9D]">
              Data Protection &amp; Privacy
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#4A372A] dark:text-[#FFF9F4]">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
              Aligned with the Data Privacy Act of 2012 (Republic Act No. 10173) of the Republic of
              the Philippines.
            </p>
          </header>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#4A372A]/90 dark:text-[#E5D6CA]">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                1. Information We Collect
              </h2>
              <p>
                When you submit a consultation request through this website, we process only the
                contact and project details you voluntarily provide—such as your full name, company
                name, email address, optional phone number, service interest, and inquiry message.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                2. Purpose of Processing
              </h2>
              <p>
                Submitted information is used strictly to evaluate your business requirements,
                respond to consultation requests, and prepare proposed scopes of work. We do not
                sell personal data or share inquiry details with unrelated third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                3. AI &amp; Third-Party Model Commitment
              </h2>
              <p>
                In accordance with Y &amp; B Technology&apos;s Responsible AI principles, client
                data is never used to train third-party public AI models absent express written
                authorization.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                4. Security Measures &amp; Data Subject Rights
              </h2>
              <p>
                We apply role-based access controls, encryption in transit and at rest, and
                least-privilege engineering practices. Under RA 10173, data subjects hold rights to
                be informed, access, rectify, or request deletion of personal information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                5. Questions &amp; Requests
              </h2>
              <p>
                For privacy inquiries or data access requests, please reach out through our{' '}
                <Link to="/contact" className="font-semibold text-[#916E55] dark:text-[#D9BE9D] underline">
                  Consultation &amp; Contact page
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
