import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { RESOURCE_ARTICLES } from '../data/resources';

export function Resources() {
  const categories = ['All', ...Array.from(new Set(RESOURCE_ARTICLES.map((a) => a.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles =
    selectedCategory === 'All'
      ? RESOURCE_ARTICLES
      : RESOURCE_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Resources"
        description="Educational articles on AI automation, small business adoption, intelligent workflows, AI customer assistants, and automation readiness."
        path="/resources"
      />

      <section className="yb-hero-gradient text-[#FFF9F4] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D9BE9D]">
              Educational Guides · Plain-Language Insights
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              AI &amp; Automation Resources for Business Leaders
            </h1>
            <p className="text-base sm:text-lg text-[#E5D6CA] leading-relaxed">
              Practical, jargon-free guides explaining how AI automation, intelligent workflows,
              and human oversight apply to real business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F4] dark:bg-[#1E1510]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#4A372A] text-[#FFF9F4] dark:bg-[#D9BE9D] dark:text-[#1E1510]'
                    : 'bg-[#E5D6CA]/65 dark:bg-[#2B1F17] text-[#4A372A] dark:text-[#D5C3B3] hover:bg-[#E5D6CA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="yb-card-surface rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#916E55] dark:text-[#D9BE9D]">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#4A372A] dark:text-[#FFF9F4] mt-2 leading-snug">
                    <Link
                      to={`/resources/${article.slug}`}
                      className="hover:text-[#916E55] dark:hover:text-[#D9BE9D] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#6E5849] dark:text-[#D5C3B3]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#4A372A]/10 dark:border-[#D9BE9D]/12">
                  <Link
                    to={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#916E55] dark:text-[#D9BE9D] hover:underline"
                  >
                    <span>Read guide</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
