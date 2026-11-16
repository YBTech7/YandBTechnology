import crypto from 'node:crypto';
import type { ContactInquiryInput } from '../validation/contactSchema.ts';

export interface InquiryEnvironmentStatus {
  mode: 'configured' | 'demonstration';
  persistenceConfigured: boolean;
  emailConfigured: boolean;
  missingConfiguration: string[];
}

export interface InquirySubmissionResult {
  ok: boolean;
  mode: 'configured' | 'demonstration';
  persisted: boolean;
  emailSent: boolean;
  referenceId: string;
  submittedAt: string;
  message: string;
}

export function getInquiryEnvironmentStatus(): InquiryEnvironmentStatus {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim();
  const smtpConfigured = Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      process.env.INQUIRY_RECIPIENT_EMAIL?.trim()
  );

  const persistenceConfigured = Boolean(webhookUrl);
  const emailConfigured = smtpConfigured;

  const missingConfiguration: string[] = [];
  if (!persistenceConfigured) {
    missingConfiguration.push('INQUIRY_WEBHOOK_URL (or database adapter)');
  }
  if (!emailConfigured) {
    missingConfiguration.push('SMTP_HOST, SMTP_USER, SMTP_PASS, INQUIRY_RECIPIENT_EMAIL');
  }

  return {
    mode: persistenceConfigured || emailConfigured ? 'configured' : 'demonstration',
    persistenceConfigured,
    emailConfigured,
    missingConfiguration,
  };
}

export async function processContactInquiry(
  payload: ContactInquiryInput
): Promise<InquirySubmissionResult> {
  const status = getInquiryEnvironmentStatus();
  const referenceId = `YB-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
  const submittedAt = new Date().toISOString();

  let persisted = false;
  let emailSent = false;

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referenceId,
        submittedAt,
        source: 'yb-technology-public-website',
        inquiry: {
          fullName: payload.fullName,
          companyName: payload.companyName,
          email: payload.email,
          phone: payload.phone || null,
          serviceInterest: payload.serviceInterest,
          businessChallenge: payload.businessChallenge,
          estimatedBudget: payload.estimatedBudget,
          preferredContactMethod: payload.preferredContactMethod,
          message: payload.message,
          privacyConsent: payload.privacyConsent,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Upstream inquiry endpoint returned HTTP ${response.status}`);
    }
    persisted = true;
  }

  // Note: When email transport (e.g., Nodemailer / provider SDK) is provisioned,
  // dispatch notification email here and set emailSent = true only upon provider confirmation.
  if (status.emailConfigured) {
    emailSent = false;
  }

  if (!persisted && !emailSent) {
    return {
      ok: true,
      mode: 'demonstration',
      persisted: false,
      emailSent: false,
      referenceId,
      submittedAt,
      message:
        'Server validation succeeded in demonstration mode. No database, webhook, or email delivery target is configured in this environment, so this submission was not stored.',
    };
  }

  return {
    ok: true,
    mode: 'configured',
    persisted,
    emailSent,
    referenceId,
    submittedAt,
    message: 'Your consultation request has been validated and recorded.',
  };
}
