/**
 * Central configuration for Y & B Technology.
 *
 * Fields set to null are intentionally unconfigured placeholders pending
 * corporate registration and communication channel provisioning.
 * Public pages never display fabricated details for null values.
 */
export const siteConfig = {
  companyName: 'Y & B Technology',
  divisionName: 'Y&B Intelligence',
  flagshipProduct: 'Y&B IntelliFlow',
  tagline: 'Engineering Intelligence. Automating the Future.',
  descriptor: 'AI • AUTOMATION • INTELLIGENT SYSTEMS',
  country: 'Republic of the Philippines',
  currency: 'PHP',
  currencySymbol: '₱',
  timezone: 'Asia/Manila',
  language: 'English',
  logoPath: `${import.meta.env.BASE_URL}assets/aistudio/Official_Logo_b76e328d.png`,
  paletteAssetPath: `${import.meta.env.BASE_URL}assets/aistudio/Official_Color_Palette_d86e354c.png`,

  // Configuration placeholders — populate via environment or deployment config when provisioned
  corporateParticulars: {
    legalEntitySuffix: null as string | null,
    registeredOffice: null as string | null,
    secOrDtiRegistrationNo: null as string | null,
    birTin: null as string | null,
    dateOfIncorporation: null as string | null,
  },
  contactChannels: {
    publicEmail: null as string | null,
    telephone: null as string | null,
    officeAddress: null as string | null,
    authorizedRepresentative: null as string | null,
  },
  socialLinks: {
    linkedin: null as string | null,
    facebook: null as string | null,
  },
} as const;
