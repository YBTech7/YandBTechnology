import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

export function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The requested page could not be found on Y & B Technology."
        path="/404"
      />
      <section className="py-24 bg-[#FFF9F4] dark:bg-[#1E1510] text-center">
        <div className="mx-auto max-w-xl px-4 space-y-5">
          <p className="font-mono-tabular text-sm font-bold text-[#916E55] dark:text-[#D9BE9D]">
            404
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#4A372A] dark:text-[#FFF9F4]">
            Page Not Found
          </h1>
          <p className="text-base text-[#6E5849] dark:text-[#D5C3B3]">
            The page you requested does not exist or may have moved.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#916E55] dark:bg-[#D9BE9D] px-5 py-3 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
