# Y & B Technology — Phase 1 Public Corporate Website

**Tagline:** Engineering Intelligence. Automating the Future.  
**Division:** Y&B Intelligence · **Flagship Solution:** Y&B IntelliFlow  
**Primary Market:** Republic of the Philippines (`PHP`, `Asia/Manila`)

---

## 1. Architecture Overview

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4 (dual Light/Dark theme), React Router, React Hook Form + Zod, Motion (`motion/react`), Lucide React, and Three.js (`NeuralSphereCanvas`, `NodeLedgerCanvas`).
- **Backend (`server.ts`):** Express server running on port `3000`, serving Vite middlewares in development and static `dist/` assets in production, with `/api/health`, `/api/contact/status`, and `/api/contact` endpoints.
- **Official Brand System:**
  - Mocha Brown `#916E55`
  - Champagne Beige `#D9BE9D`
  - Soft Sand `#E5D6CA`
  - Warm Ivory `#FFF9F4`
  - Espresso Brown `#4A372A`

---

## 2. Implemented vs. Demonstrated vs. Unconfigured Functionality

| Area | Status | Notes |
| :--- | :--- | :--- |
| Public Routes (`/`, `/about`, `/services/*`, `/solutions`, `/intelliflow`, `/pricing`, `/process`, `/resources/*`, `/faq`, `/contact`, `/privacy`, `/terms`, `/accessibility`) | **Implemented** | Full client-side routing with per-route SEO metadata and JSON-LD. |
| Interactive AI Visualizations | **Implemented** | 3D Neural Sphere (Three.js), Node Ledger (Three.js), Automation Flow, Cloud Connectivity, and Data Intelligence charts with `prefers-reduced-motion` fallbacks. |
| Y&B IntelliFlow Demo (`/intelliflow`) | **Demonstrated** | Interactive 7-step product simulation using synthetic sample records with human approval gating. Does not represent a live production SaaS platform. |
| Contact Form Validation & Spam Protection | **Implemented** | Client & server Zod validation, honeypot field, and IP sliding-window rate limiting. |
| Inquiry Database / Email Delivery | **Configurable** | Runs in honest **Demonstration Validation Mode** until `INQUIRY_WEBHOOK_URL` and/or SMTP environment variables are configured. Never claims persistence unless confirmed by the server. |
| Corporate Particulars & Public Contact Channels | **Placeholders** | `src/config/siteConfig.ts` keeps SEC/DTI registration, BIR TIN, office address, phone, and email set to `null` until finalized by legal counsel. |

---

## 3. Local Development & Build Commands

### Prerequisites
- Node.js `v22+`
- npm

### Installation
```bash
npm install
```

### Environment Setup
Copy `.env.example` to `.env` and populate optional variables if integrating external persistence or email notifications:
```bash
cp .env.example .env
```

### Development Server (Port 3000)
```bash
npm run dev
```

### Type-Check & Lint
```bash
npm run lint
```

### Production Build & Start
```bash
npm run build
npm start
```

---

## 4. Deployment & Integration Checklist

1. **Populate Corporate Details:** Update `src/config/siteConfig.ts` once SEC/DTI registration, BIR TIN, office address, official email, telephone, and social links are confirmed.
2. **Configure Inquiry Persistence:** Set `INQUIRY_WEBHOOK_URL` in your deployment secrets to forward validated consultation payloads to your CRM, database ingest endpoint, or automation webhook.
3. **Configure Email Notifications (Optional):** Provide `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and `INQUIRY_RECIPIENT_EMAIL` and wire your mail transport in `server/services/inquiryService.ts`.
4. **Verify SEO Files:** Confirm `public/robots.txt` and `public/sitemap.xml` match your final custom domain URLs.
5. **Phase 2 Readiness:** Modular folders (`server/routes`, `server/services`, `src/config`) are isolated so future authenticated client portals, CRM modules, or billing workflows can be added without rewriting Phase 1 public pages.
