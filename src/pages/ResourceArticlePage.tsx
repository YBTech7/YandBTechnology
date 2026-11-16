import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { RESOURCE_ARTICLES } from '../data/resources';

export function ResourceArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const related = RESOURCE_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        path={`/resources/${article.slug}`}
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          publisher: {
            '@type': 'Organization',
            name: 'Y & B Technology',
          },
        }}
      />

      <article className="py-14 sm:py-20 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Resources</span>
          </Link>

          <header className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#916E55] dark:text-[#D9BE9D]">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#4A372A] dark:text-[#FFF9F4]">
              {article.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
              {article.excerpt}
            </p>
          </header>

          {/* Key Takeaways */}
          <div className="rounded-2xl bg-[#F7EFE7] dark:bg-[#281D16] border border-[#4A372A]/10 dark:border-[#D9BE9D]/15 p-6 space-y-3">
            <h2 className="font-display text-base font-bold text-[#4A372A] dark:text-[#FFF9F4]">
              Key Takeaways
            </h2>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <div className="space-y-8 pt-2">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-2xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-[1.75] text-[#4A372A]/90 dark:text-[#E5D6CA]"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Related Reading & CTA */}
          <div className="pt-8 border-t border-[#4A372A]/12 dark:border-[#D9BE9D]/15 space-y-6">
            <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4]">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/resources/${rel.slug}`}
                  className="yb-card-surface rounded-xl p-5 hover:border-[#916E55]/45 transition-colors"
                >
                  <p className="text-xs text-[#916E55] dark:text-[#D9BE9D]">{rel.category}</p>
                  <p className="font-display text-base font-bold mt-1">{rel.title}</p>
                </Link>
              ))}
            </div>

            <div className="rounded-2xl bg-[#4A372A] text-[#FFF9F4] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold">
                  Want to assess automation opportunities for your business?
                </h3>
                <p className="text-sm text-[#E5D6CA] mt-1">
                  Book an introductory consultation with Y &amp; B Technology.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#D9BE9D] px-5 py-3 text-sm font-bold text-[#1E1510] hover:bg-[#FFF9F4] shrink-0"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
