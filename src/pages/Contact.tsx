import { useSearchParams, Link } from 'react-router-dom';
import { Clock, Globe, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ContactForm } from '../components/forms/ContactForm';
import { siteConfig } from '../config/siteConfig';

export function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || undefined;

  const hasConfiguredChannels = Boolean(
    siteConfig.contactChannels.publicEmail ||
      siteConfig.contactChannels.telephone ||
      siteConfig.contactChannels.officeAddress
  );

  return (
    <>
      <SEOHead
        title="Contact & Book a Consultation"
        description="Book a consultation with Y & B Technology to discuss AI solutions, business process automation, systems integration, or Y&B IntelliFlow."
        path="/contact"
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Consultation &amp; Project Inquiries
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Book a Consultation With Y &amp; B Technology
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Share your current operational bottlenecks and goals. We will review your inquiry
              and outline practical next steps—without jargon or obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Consultation Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="yb-card-surface rounded-2xl p-6 space-y-5">
              <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                What to Expect
              </h2>
              <ul className="space-y-4 text-sm text-[#6E5849] dark:text-[#D5C3B3]">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                      Operating Timezone
                    </p>
                    <p>{siteConfig.country} ({siteConfig.timezone})</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                      Currency &amp; Scoping
                    </p>
                    <p>Indicative launch packages priced in Philippine Pesos (PHP).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                      Privacy &amp; Confidentiality
                    </p>
                    <p>
                      Handled in alignment with our{' '}
                      <Link to="/privacy" className="underline text-[#916E55] dark:text-[#D9BE9D]">
                        Privacy Policy
                      </Link>{' '}
                      and RA 10173 principles.
                    </p>
                  </div>
                </li>
              </ul>

              {hasConfiguredChannels && (
                <div className="pt-4 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/15 space-y-2 text-sm">
                  <h3 className="font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                    Direct Channels
                  </h3>
                  {siteConfig.contactChannels.publicEmail && (
                    <p>{siteConfig.contactChannels.publicEmail}</p>
                  )}
                  {siteConfig.contactChannels.telephone && (
                    <p>{siteConfig.contactChannels.telephone}</p>
                  )}
                  {siteConfig.contactChannels.officeAddress && (
                    <p>{siteConfig.contactChannels.officeAddress}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-8 yb-card-surface rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mb-6">
              Consultation Request Form
            </h2>
            <ContactForm defaultService={serviceParam} />
          </div>
        </div>
      </section>
    </>
  );
}
