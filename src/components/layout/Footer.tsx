import { Link } from 'react-router-dom';
import { BrandLogo } from '../ui/BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { SERVICES } from '../../data/services';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hasPublicContact = Boolean(
    siteConfig.contactChannels.publicEmail ||
      siteConfig.contactChannels.telephone ||
      siteConfig.contactChannels.officeAddress
  );
  const hasSocialLinks = Boolean(
    siteConfig.socialLinks.linkedin || siteConfig.socialLinks.facebook
  );

  return (
    <footer className="border-t border-[#4A372A]/12 dark:border-[#D9BE9D]/15 bg-[#F7EFE7] dark:bg-[#17100C] text-[#4A372A] dark:text-[#FFF9F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" aria-label="Y & B Technology home" className="inline-block">
              <BrandLogo variant="full" />
            </Link>
            <p className="text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3] max-w-sm">
              {siteConfig.companyName} ({siteConfig.divisionName}) designs, integrates, and
              maintains practical AI solutions, workflow automation, and intelligent digital
              systems for growing organizations.
            </p>
            <p className="text-xs font-medium text-[#916E55] dark:text-[#D9BE9D]">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Services Navigation */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#4A372A] dark:text-[#FFF9F4] mb-4">
              Core Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#4A372A] dark:text-[#FFF9F4] mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/intelliflow"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  Y&B IntelliFlow
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Consultation & Configured Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#4A372A] dark:text-[#FFF9F4]">
              Consultation &amp; Region
            </h2>
            <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
              Initial Focus: {siteConfig.country} · {siteConfig.timezone}
            </p>

            {hasPublicContact ? (
              <div className="space-y-1.5 text-sm text-[#6E5849] dark:text-[#D5C3B3]">
                {siteConfig.contactChannels.officeAddress && (
                  <p>{siteConfig.contactChannels.officeAddress}</p>
                )}
                {siteConfig.contactChannels.publicEmail && (
                  <p>
                    <a
                      href={`mailto:${siteConfig.contactChannels.publicEmail}`}
                      className="hover:underline"
                    >
                      {siteConfig.contactChannels.publicEmail}
                    </a>
                  </p>
                )}
                {siteConfig.contactChannels.telephone && (
                  <p>{siteConfig.contactChannels.telephone}</p>
                )}
              </div>
            ) : (
              <p className="text-sm text-[#6E5849] dark:text-[#D5C3B3]">
                Direct inquiries are routed through our online consultation form while formal
                corporate communication channels are being finalized.
              </p>
            )}

            {hasSocialLinks && (
              <div className="flex items-center gap-4 text-sm pt-1">
                {siteConfig.socialLinks.linkedin && (
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#916E55] dark:text-[#D9BE9D] hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
                {siteConfig.socialLinks.facebook && (
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#916E55] dark:text-[#D9BE9D] hover:underline"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#4A372A] dark:bg-[#D9BE9D] px-4 py-2.5 text-xs font-semibold text-[#FFF9F4] dark:text-[#1E1510] hover:bg-[#916E55] dark:hover:bg-[#E5D6CA] transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-[#4A372A]/12 dark:border-[#D9BE9D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6E5849] dark:text-[#D5C3B3]">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved. Division:{' '}
            {siteConfig.divisionName}.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy" className="hover:text-[#4A372A] dark:hover:text-[#FFF9F4]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#4A372A] dark:hover:text-[#FFF9F4]">
              Terms of Use
            </Link>
            <Link to="/accessibility" className="hover:text-[#4A372A] dark:hover:text-[#FFF9F4]">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
