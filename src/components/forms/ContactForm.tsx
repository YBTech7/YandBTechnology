import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Info, Loader2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'AI Solutions Development',
  'Business Process Automation',
  'Intelligent Systems Integration',
  'AI Consulting and Transformation',
  'Managed AI and Automation Services',
  'Y&B IntelliFlow Inquiry',
  'General Consultation',
] as const;

const BUDGET_OPTIONS = [
  'Under ₱25,000 (Exploratory)',
  '₱25,000 – ₱60,000 (Y&B AI Starter)',
  '₱75,000 – ₱200,000 (Y&B Business Intelligence)',
  '₱250,000+ (Y&B Enterprise AI)',
  '₱8,000 – ₱30,000/month (Managed Intelligence)',
  'To be determined during discovery',
] as const;

const CONTACT_METHOD_OPTIONS = [
  'Email',
  'Video Consultation',
  'Phone / Messaging Call',
] as const;

const formSchema = z.object({
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
    .email('Please provide a valid email address.')
    .max(160, 'Email address is too long.'),
  phone: z.string().trim().max(40, 'Phone number is too long.').optional().or(z.literal('')),
  serviceInterest: z.enum(SERVICE_OPTIONS, {
    error: 'Please select a service interest.',
  }),
  businessChallenge: z
    .string()
    .trim()
    .min(5, 'Please briefly describe your primary business challenge.')
    .max(240, 'Challenge summary must be 240 characters or fewer.'),
  estimatedBudget: z.enum(BUDGET_OPTIONS, {
    error: 'Please select an indicative budget range.',
  }),
  preferredContactMethod: z.enum(CONTACT_METHOD_OPTIONS, {
    error: 'Please select your preferred contact method.',
  }),
  message: z
    .string()
    .trim()
    .min(15, 'Please provide at least 15 characters describing your inquiry.')
    .max(2500, 'Message must be 2,500 characters or fewer.'),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to the Privacy Policy before submitting.',
  }),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface EnvStatus {
  mode: 'configured' | 'demonstration';
  persistenceConfigured: boolean;
  emailConfigured: boolean;
  missingConfiguration: string[];
}

interface SubmitResponse {
  ok: boolean;
  mode?: 'configured' | 'demonstration';
  persisted?: boolean;
  emailSent?: boolean;
  referenceId?: string;
  submittedAt?: string;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [envStatus, setEnvStatus] = useState<EnvStatus | null>(null);
  const isStaticPages = window.location.hostname.endsWith('.github.io');
  const [serverResult, setServerResult] = useState<SubmitResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validDefaultService = SERVICE_OPTIONS.includes(
    defaultService as (typeof SERVICE_OPTIONS)[number]
  )
    ? (defaultService as (typeof SERVICE_OPTIONS)[number])
    : 'General Consultation';

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceInterest: validDefaultService,
      businessChallenge: '',
      estimatedBudget: 'To be determined during discovery',
      preferredContactMethod: 'Email',
      message: '',
      privacyConsent: false,
      website: '',
    },
  });

  useEffect(() => {
    if (isStaticPages) {
      setEnvStatus({
        mode: 'demonstration',
        persistenceConfigured: false,
        emailConfigured: false,
        missingConfiguration: ['GitHub Pages does not run backend APIs'],
      });
      return;
    }
    let active = true;
    fetch('/api/contact/status')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: EnvStatus | null) => {
        if (active && data) setEnvStatus(data);
      })
      .catch(() => {
        if (active) {
          setEnvStatus({
            mode: 'demonstration',
            persistenceConfigured: false,
            emailConfigured: false,
            missingConfiguration: ['Backend API unreachable'],
          });
        }
      });
    return () => {
      active = false;
    };
  }, [isStaticPages]);

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setServerResult(null);
    if (isStaticPages) {
      setServerError('Consultation submissions are not available on GitHub Pages until a backend form service is connected. Your information has not been sent.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as SubmitResponse;

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          Object.entries(data.fieldErrors).forEach(([field, msg]) => {
            if (field in values) {
              setError(field as keyof ContactFormValues, { type: 'server', message: msg });
            }
          });
        }
        setServerError(data.error || 'Submission validation failed. Please review your details.');
        return;
      }

      setServerResult(data);
      reset();
    } catch {
      setServerError(
        'Could not reach the inquiry server. Please verify your connection and try again.'
      );
    }
  };

  const inputBase =
    'mt-1.5 w-full rounded-lg border border-[#4A372A]/20 dark:border-[#D9BE9D]/25 bg-[#FFF9F4] dark:bg-[#1E1510] px-3.5 py-2.5 text-sm text-[#4A372A] dark:text-[#FFF9F4] placeholder:text-[#6E5849]/60 dark:placeholder:text-[#D5C3B3]/50 focus:border-[#916E55] dark:focus:border-[#D9BE9D] focus:outline-none transition-colors';

  return (
    <div className="space-y-6">
      {/* Honest Persistence Status Notice */}
      {envStatus && envStatus.mode === 'demonstration' && (
        <div
          role="note"
          className="rounded-xl border border-[#916E55]/30 dark:border-[#D9BE9D]/30 bg-[#E5D6CA]/55 dark:bg-[#31241B] p-4 text-sm"
        >
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5" aria-hidden="true" />
            <div className="space-y-1.5">
              <p className="font-semibold text-[#4A372A] dark:text-[#FFF9F4]">
                Consultation Form — Server Validation &amp; Demonstration Mode
              </p>
              <p className="text-[#6E5849] dark:text-[#D5C3B3] leading-relaxed">
                {isStaticPages
                  ? 'This GitHub Pages site is static: consultation requests cannot be sent or saved here until a secure form backend is configured. Please do not enter sensitive information.'
                  : 'This environment validates submissions on the server, but external database persistence and email notifications are not yet configured. Submissions are not permanently delivered.'}
              </p>
              {!isStaticPages && (
              <p className="text-xs text-[#6E5849] dark:text-[#D5C3B3]">
                To enable live storage &amp; delivery, configure{' '}
                <code className="font-mono-tabular px-1 py-0.5 rounded bg-[#4A372A]/10 dark:bg-[#1E1510]">
                  INQUIRY_WEBHOOK_URL
                </code>{' '}
                and SMTP environment variables per <code className="font-mono-tabular">.env.example</code>.
              </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Server Submission Result */}
      {serverResult && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-xl border p-5 ${
            serverResult.persisted
              ? 'border-emerald-700/30 bg-emerald-50/70 dark:bg-emerald-950/30 text-[#4A372A] dark:text-[#FFF9F4]'
              : 'border-[#916E55]/35 bg-[#E5D6CA]/65 dark:bg-[#31241B] text-[#4A372A] dark:text-[#FFF9F4]'
          }`}
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="h-5 w-5 shrink-0 text-[#916E55] dark:text-[#D9BE9D] mt-0.5"
              aria-hidden="true"
            />
            <div className="space-y-1.5 text-sm">
              <p className="font-bold">
                {serverResult.persisted
                  ? 'Consultation Request Recorded'
                  : 'Demonstration Validation Completed (Not Persisted)'}
              </p>
              <p className="text-[#6E5849] dark:text-[#D5C3B3]">{serverResult.message}</p>
              <p className="font-mono-tabular text-xs text-[#6E5849] dark:text-[#D5C3B3]">
                Validation Reference: {serverResult.referenceId} · Persisted:{' '}
                {serverResult.persisted ? 'Yes' : 'No (Unconfigured)'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Server Error Alert */}
      {serverError && (
        <div
          role="alert"
          className="rounded-xl border border-red-700/35 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-900 dark:text-red-200 flex items-start gap-3"
        >
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Honeypot anti-spam field hidden from visual users */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field blank</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold">
              Full Name <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'err-fullName' : undefined}
              placeholder="e.g., Maria Santos"
              className={inputBase}
              {...register('fullName')}
            />
            {errors.fullName && (
              <p id="err-fullName" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-semibold">
              Company Name <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={errors.companyName ? 'err-companyName' : undefined}
              placeholder="e.g., Metro Retail Holdings Inc."
              className={inputBase}
              {...register('companyName')}
            />
            {errors.companyName && (
              <p id="err-companyName" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.companyName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'err-email' : undefined}
              placeholder="name@company.com"
              className={inputBase}
              {...register('email')}
            />
            {errors.email && (
              <p id="err-email" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold">
              Phone Number <span className="text-xs font-normal text-[#6E5849] dark:text-[#D5C3B3]">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'err-phone' : undefined}
              placeholder="+63 9XX XXX XXXX"
              className={inputBase}
              {...register('phone')}
            />
            {errors.phone && (
              <p id="err-phone" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="serviceInterest" className="block text-sm font-semibold">
              Service Interest <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <select
              id="serviceInterest"
              aria-invalid={Boolean(errors.serviceInterest)}
              className={inputBase}
              {...register('serviceInterest')}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceInterest && (
              <p role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.serviceInterest.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="estimatedBudget" className="block text-sm font-semibold">
              Estimated Budget (PHP) <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <select
              id="estimatedBudget"
              aria-invalid={Boolean(errors.estimatedBudget)}
              className={inputBase}
              {...register('estimatedBudget')}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.estimatedBudget && (
              <p role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.estimatedBudget.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="businessChallenge" className="block text-sm font-semibold">
              Primary Business Challenge <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <input
              id="businessChallenge"
              type="text"
              aria-invalid={Boolean(errors.businessChallenge)}
              aria-describedby={errors.businessChallenge ? 'err-challenge' : undefined}
              placeholder="e.g., Slow lead follow-up & manual invoice encoding"
              className={inputBase}
              {...register('businessChallenge')}
            />
            {errors.businessChallenge && (
              <p id="err-challenge" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.businessChallenge.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="preferredContactMethod" className="block text-sm font-semibold">
              Preferred Contact Method <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
            </label>
            <select
              id="preferredContactMethod"
              aria-invalid={Boolean(errors.preferredContactMethod)}
              className={inputBase}
              {...register('preferredContactMethod')}
            >
              {CONTACT_METHOD_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.preferredContactMethod && (
              <p role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                {errors.preferredContactMethod.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold">
            Project Details &amp; Goals <span className="text-[#916E55] dark:text-[#D9BE9D]">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'err-message' : undefined}
            placeholder="Share your current workflow, the software tools you use, and what outcomes you hope to achieve..."
            className={inputBase}
            {...register('message')}
          />
          {errors.message && (
            <p id="err-message" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-[#4A372A]/30 text-[#916E55] focus:ring-[#916E55]"
              aria-invalid={Boolean(errors.privacyConsent)}
              aria-describedby={errors.privacyConsent ? 'err-consent' : undefined}
              {...register('privacyConsent')}
            />
            <span className="text-xs sm:text-sm text-[#6E5849] dark:text-[#D5C3B3] leading-relaxed">
              I consent to the processing of my inquiry information in accordance with the{' '}
              <Link
                to="/privacy"
                className="font-semibold text-[#916E55] dark:text-[#D9BE9D] underline hover:no-underline"
              >
                Privacy Policy
              </Link>{' '}
              and the Philippine Data Privacy Act of 2012 (RA 10173).
            </span>
          </label>
          {errors.privacyConsent && (
            <p id="err-consent" role="alert" className="mt-1.5 text-xs text-red-700 dark:text-red-300">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isStaticPages}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#916E55] hover:bg-[#74553F] dark:bg-[#D9BE9D] dark:hover:bg-[#E5D6CA] px-6 py-3 text-sm font-semibold text-[#FFF9F4] dark:text-[#1E1510] disabled:opacity-60 transition-colors min-h-[44px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Validating &amp; Submitting...</span>
            </>
          ) : (
            <span>{isStaticPages ? 'Submissions unavailable — backend required' : 'Submit Consultation Request'}</span>
          )}
        </button>
      </form>
    </div>
  );
}
