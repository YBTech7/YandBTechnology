import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../navigation/Header';
import { Footer } from './Footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F4] dark:bg-[#1E1510] text-[#4A372A] dark:text-[#FFF9F4] overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#4A372A] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#FFF9F4]"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
