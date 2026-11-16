import { Router } from 'express';
import type { Request, Response } from 'express';
import { contactInquirySchema } from '../validation/contactSchema.ts';
import {
  getInquiryEnvironmentStatus,
  processContactInquiry,
} from '../services/inquiryService.ts';

const router = Router();

// Simple in-memory sliding window rate limiter for spam protection
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = (rateLimitMap.get(ip) || []).filter((ts) => now - ts < WINDOW_MS);
  if (existing.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, existing);
    return true;
  }
  existing.push(now);
  rateLimitMap.set(ip, existing);
  return false;
}

router.get('/status', (_req: Request, res: Response) => {
  const status = getInquiryEnvironmentStatus();
  res.json(status);
});

router.post('/', async (req: Request, res: Response) => {
  const clientIp =
    (typeof req.headers['x-forwarded-for'] === 'string'
      ? req.headers['x-forwarded-for'].split(',')[0]?.trim()
      : undefined) ||
    req.socket.remoteAddress ||
    'unknown';

  if (isRateLimited(clientIp)) {
    res.status(429).json({
      ok: false,
      error: 'Too many consultation requests from this address. Please wait a few minutes before trying again.',
    });
    return;
  }

  const parsed = contactInquirySchema.safeParse(req.body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() || 'form';
      if (!fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    res.status(400).json({
      ok: false,
      error: 'Please review the highlighted fields before submitting.',
      fieldErrors,
    });
    return;
  }

  try {
    const result = await processContactInquiry(parsed.data);
    res.status(200).json(result);
  } catch (err) {
    console.error('Inquiry processing error:', err instanceof Error ? err.message : 'Unknown error');
    res.status(502).json({
      ok: false,
      error: 'Unable to forward your inquiry to the configured destination right now. Please try again shortly.',
    });
  }
});

export default router;
