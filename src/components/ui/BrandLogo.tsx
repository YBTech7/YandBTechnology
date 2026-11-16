import { siteConfig } from '../../config/siteConfig';

interface BrandLogoProps {
  variant?: 'compact' | 'full';
  className?: string;
}

/**
 * Renders the exact official Y & B Technology logo asset.
 * In compact header mode, shows the official logo framed neatly alongside crisp single-line wordmark text.
 * In full mode (e.g., footer or about plaque), displays the complete official lockup.
 */
export function BrandLogo({ variant = 'compact', className = '' }: BrandLogoProps) {
  if (variant === 'full') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl bg-[#FFF9F4] p-3 border border-[#4A372A]/10 shadow-sm ${className}`}
      >
        <img
          src={siteConfig.logoPath}
          alt="Y & B Technology official corporate logo"
          className="h-20 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-[#FFF9F4] border border-[#4A372A]/15 shrink-0">
        <img
          src={siteConfig.logoPath}
          alt="Y & B Technology emblem"
          className="h-11 w-11 object-cover object-top scale-125"
          referrerPolicy="no-referrer"
        />
      </span>
      <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#4A372A] dark:text-[#FFF9F4]">
        {siteConfig.companyName}
      </span>
    </span>
  );
}
