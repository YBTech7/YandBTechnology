import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function SEOHead({
  title,
  description,
  path,
  type = 'website',
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes('Y & B Technology')
      ? title
      : `${title} | Y & B Technology`;

    document.title = fullTitle;

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const canonicalUrl = `${origin}${path}`;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const existingLd = document.getElementById('yb-structured-data');
    if (existingLd) existingLd.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'yb-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, path, type, structuredData]);

  return null;
}
