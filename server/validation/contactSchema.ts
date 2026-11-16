import { z } from 'zod';

export const SERVICE_INTEREST_OPTIONS = [
  'AI Solutions Development',
  'Business Process Automation',
  'Intelligent Systems Integration',
  'AI Consulting and Transformation',
  'Managed AI and Automation Services',
  'Y&B IntelliFlow Inquiry',
  'General Consultation',
] as const;

export const BUDGET_OPTIONS = [
  'Under ₱25,000 (Exploratory)',
  '₱25,000 – ₱60,000 (Y&B AI Starter)',
  '₱75,000 – ₱200,000 (Y&B Business Intelligence)',
  '₱250,000+ (Y&B Enterprise AI)',
  '₱8,000 – ₱30,000/month (Managed Intelligence)',
  'To be determined during discovery',
] as const;

export const CONTACT_METHOD_OPTIONS = [
  'Email',
  'Video Consultation',
  'Phone / Messaging Call',
] as const;

export const contactInquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(120, 'Full name must be 120 characters or fewer.'),
  companyName: z
    .string()
    .trim()
    .min(2, 'Please enter your company or organization name.')
    .max(140, 'Company name must be 140 characters or fewer.'),
  email: z
    .string()
    .trim()
    .email('Please provide a valid business or personal email address.')
    .max(160, 'Email address is too long.'),
  phone: z
    .string()
    .trim()
    .max(40, 'Phone number must be 40 characters or fewer.')
    .optional()
    .or(z.literal('')),
  serviceInterest: z.enum(SERVICE_INTEREST_OPTIONS, {
    error: 'Please select a service interest.',
  }),
  businessChallenge: z
    .string()
    .trim()
    .min(5, 'Please briefly describe the main operational challenge.')
    .max(240, 'Summary must be 240 characters or fewer.'),
  estimatedBudget: z.enum(BUDGET_OPTIONS, {
    error: 'Please select an indicative budget range.',
  }),
  preferredContactMethod: z.enum(CONTACT_METHOD_OPTIONS, {
    error: 'Please select your preferred contact method.',
  }),
  message: z
    .string()
    .trim()
    .min(15, 'Please share a few details about your goals or workflow (at least 15 characters).')
    .max(2500, 'Message must be 2,500 characters or fewer.'),
  privacyConsent: z.literal(true, {
    error: 'Please confirm that you consent to our Privacy Policy for handling this inquiry.',
  }),
  // Honeypot anti-spam field — legitimate users leave this empty
  website: z.string().max(0, 'Spam verification failed.').optional().or(z.literal('')),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
