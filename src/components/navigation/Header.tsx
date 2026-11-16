import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { useTheme } from '../../hooks/useTheme';
import { SERVICES } from '../../data/services';

const PRIMARY_NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', hasServicesMenu: true },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Y&B IntelliFlow', to: '/intelliflow' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#4A372A]/10 dark:border-[#D9BE9D]/15 bg-[#FFF9F4]/95 dark:bg-[#1E1510]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-[70px]">
        <Link
          to="/"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label="Y & B Technology home"
        >
          <BrandLogo variant="compact" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-3.5 xl:gap-5">
          {PRIMARY_NAV.map((item) => {
            if (item.hasServicesMenu) {
              return (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-0.5">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `py-2 text-[13px] xl:text-sm font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                          isActive || location.pathname.startsWith('/services/')
                            ? 'text-[#4A372A] dark:text-[#FFF9F4] border-[#916E55] dark:border-[#D9BE9D] font-semibold'
                            : 'text-[#6E5849] dark:text-[#D5C3B3] border-transparent hover:text-[#4A372A] dark:hover:text-[#FFF9F4]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-expanded={servicesOpen}
                      aria-label="Toggle services submenu"
                      className="p-1 text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4] rounded"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-150 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div
                      className="absolute left-0 top-full pt-2 w-72 z-50"
                      role="menu"
                      aria-label="Core Services"
                    >
                      <div className="rounded-xl border border-[#4A372A]/12 dark:border-[#D9BE9D]/20 bg-[#FFF9F4] dark:bg-[#281D16] p-2 shadow-xl">
                        <Link
                          to="/services"
                          role="menuitem"
                          className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#916E55] dark:text-[#D9BE9D] hover:bg-[#E5D6CA]/50 dark:hover:bg-[#3C2C22]"
                        >
                          All Services Overview
                        </Link>
                        <div className="my-1 h-px bg-[#4A372A]/10 dark:bg-[#D9BE9D]/15" />
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            role="menuitem"
                            className="block rounded-lg px-3 py-2 text-sm text-[#4A372A] dark:text-[#FFF9F4] hover:bg-[#E5D6CA]/60 dark:hover:bg-[#3C2C22] transition-colors"
                          >
                            <span className="font-mono-tabular text-xs text-[#916E55] dark:text-[#D9BE9D] mr-2">
                              {service.indexLabel}
                            </span>
                            {service.shortTitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `py-2 text-[13px] xl:text-sm font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                    isActive
                      ? 'text-[#4A372A] dark:text-[#FFF9F4] border-[#916E55] dark:border-[#D9BE9D] font-semibold'
                      : 'text-[#6E5849] dark:text-[#D5C3B3] border-transparent hover:text-[#4A372A] dark:hover:text-[#FFF9F4]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#4A372A]/15 dark:border-[#D9BE9D]/20 text-[#4A372A] dark:text-[#FFF9F4] hover:bg-[#E5D6CA]/60 dark:hover:bg-[#31241B] transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-[#D9BE9D]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-[#4A372A]" aria-hidden="true" />
            )}
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#916E55] hover:bg-[#74553F] dark:bg-[#D9BE9D] dark:hover:bg-[#E5D6CA] px-4 py-2.5 text-xs xl:text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510] transition-colors whitespace-nowrap shrink-0"
          >
            Book a Consultation
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-[#4A372A]/15 dark:border-[#D9BE9D]/20 text-[#4A372A] dark:text-[#FFF9F4]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/15 bg-[#FFF9F4] dark:bg-[#1E1510] px-4 py-5 max-h-[calc(100vh-70px)] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {PRIMARY_NAV.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium min-h-[44px] ${
                      isActive
                        ? 'bg-[#E5D6CA]/70 dark:bg-[#31241B] text-[#4A372A] dark:text-[#FFF9F4] font-semibold'
                        : 'text-[#4A372A] dark:text-[#D5C3B3] hover:bg-[#E5D6CA]/40 dark:hover:bg-[#281D16]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.hasServicesMenu && (
                  <div className="ml-4 mt-1 mb-2 space-y-1 border-l border-[#4A372A]/15 dark:border-[#D9BE9D]/20 pl-3">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block rounded-md px-2.5 py-2 text-sm text-[#6E5849] dark:text-[#D5C3B3] hover:text-[#4A372A] dark:hover:text-[#FFF9F4]"
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/15 flex flex-col gap-3">
              <Link
                to="/contact"
                className="flex items-center justify-center rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-4 py-3 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510] min-h-[44px]"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
