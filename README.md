# rifatcholakov.com — Personal Portfolio

A production-ready personal portfolio built with **React**, **TypeScript**, and **Vite**. Features a light/dark theme, animated scroll reveals, a contact form powered by Web3Forms with hCaptcha spam protection, a cookie consent system with Google Analytics integration, and a full set of legal pages (Privacy Policy, Cookie Policy, Terms of Use).

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Vanilla CSS with CSS custom properties |
| Contact Form API | [Web3Forms](https://web3forms.com) |
| Captcha | [hCaptcha](https://hcaptcha.com) via `@hcaptcha/react-hcaptcha` |
| Analytics | Google Analytics 4 (GA4) — consent-gated |
| State | React Context (`ThemeContext`) |
| Animations | `IntersectionObserver` (custom `useScrollReveal` hook) |

---

## 📁 Project Structure

```
src/
├── components/         # UI components (Navbar, Hero, Skills, Projects, etc.)
│   ├── CookieBanner.tsx  # GDPR cookie consent banner
│   ├── Footer.tsx        # Footer with nav, legal links, and cookie preferences
│   ├── TopBanner.tsx     # High-visibility availability announcement bar
│   └── ...
├── config/             # Centralized configuration
│   ├── analytics.ts    # GA4 config, reads VITE_GA_MEASUREMENT_ID from env
│   └── index.ts        # Reads VITE_WEB3FORMS_KEY from env, validation rules, profile
├── constants/          # Static data (projects, skills, testimonials)
│   └── data.tsx
├── context/            # React Context providers
│   └── ThemeContext.tsx
├── hooks/              # Custom React hooks
│   └── useScrollReveal.ts
├── services/           # API abstraction layer
│   └── contactService.ts
├── types/              # TypeScript interfaces and types
│   └── index.ts
├── utils/              # Pure utility functions
│   ├── validation.ts   # Form validation
│   └── cn.ts           # Class name utility
├── assets/             # Images and static files
├── App.tsx
├── main.tsx
└── index.css           # Global CSS design system (tokens, variables)

public/
├── privacy-policy.html   # Privacy Policy legal page
├── cookie-policy.html    # Cookie Policy legal page
├── terms-of-use.html     # Terms of Use legal page
├── legal.css             # Shared stylesheet for all legal pages
├── legal-theme.js        # Inline theme sync script for legal pages
├── _headers              # Cloudflare Pages security & caching headers
└── favicon.svg           # Custom theme-aware SVG favicon

/ (Root)
├── .env.example          # Template for required environment variables
├── .env.local            # Git-ignored local environment secrets
├── wrangler.toml         # Cloudflare Pages project configuration
└── .github/workflows/    # CI/CD (GitHub Actions for automated deployment)
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>= 18`
- npm `>= 9`

### Installation

```bash
# Clone the repository
git clone https://github.com/rifatcholakov/My-Dev-Portfolio-Site.git
cd My-Dev-Portfolio-Site

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# (Edit .env.local to add your Web3Forms Key and GA4 Measurement ID)

# Start the development server
npm run dev
```

The app runs at `http://localhost:3000` by default.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## ✉️ Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) for email delivery and [hCaptcha](https://hcaptcha.com) for spam protection.

### 1. Web3Forms Access Key

Your access key is loaded securely from the `.env.local` file `VITE_WEB3FORMS_KEY`. Make sure it's set:

```env
# .env.local
VITE_WEB3FORMS_KEY=YOUR_ACCESS_KEY_HERE
```

Get a free access key at [web3forms.com](https://web3forms.com).

### 2. Enable hCaptcha on your form

- Log in to your [Web3Forms Dashboard](https://app.web3forms.com)
- Select your form
- Under **Block Spam**, switch to **hCaptcha**

> **Note**: The hCaptcha site key is loaded from `VITE_HCAPTCHA_SITE_KEY`. The default value provided in `.env.example` is the Web3Forms shared free-plan key. Replace it with your own on a paid plan.

---

## 🍪 Cookie Consent & Analytics

The site implements a **GDPR-compliant cookie consent flow** via the `CookieBanner` component.

- On first visit, a banner appears asking the user to **Accept All** or **Reject All** analytics cookies.
- The user's decision is persisted to `localStorage` under the key `cookie_consent`.
- Google Analytics 4 (GA4) is **only loaded after the user accepts**.
- If consent is revoked, GA cookies (`_ga`, `_gid`, `_gat`) are removed immediately.
- Cookie preferences can be re-opened at any time via the **Cookie Preferences** link in the footer.

### Google Analytics Setup

Your GA4 Measurement ID is loaded securely from `.env.local`:

```env
# .env.local
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Get a free Measurement ID from [Google Analytics](https://analytics.google.com).

---

## 📄 Legal Pages

Three standalone legal pages are included in the `public/` directory:

| Page | Path |
|---|---|
| Privacy Policy | `/privacy-policy.html` |
| Cookie Policy | `/cookie-policy.html` |
| Terms of Use | `/terms-of-use.html` |

### Theming on Legal Pages

Legal pages are **not** React-rendered, so they use a dedicated system to stay in sync with the main site's theme:

- `public/legal.css` — mirrors the main site's CSS custom property tokens for both light and dark modes.
- `public/legal-theme.js` — an inline script that reads `localStorage('theme')` (or falls back to `prefers-color-scheme`) and sets `data-theme` on `<html>` before first paint, eliminating any flash of wrong theme.

---

## 🎨 Theming

The site supports **light** and **dark** modes. The active theme is persisted to `localStorage`.

Theme is managed globally via `ThemeContext`:

```ts
import { useTheme } from './context/ThemeContext';
const { theme, toggleTheme } = useTheme();
```

CSS variables are defined in `src/index.css` under `[data-theme="light"]` and `[data-theme="dark"]` selectors. Legal pages mirror these same variables via `public/legal.css`.

---

## 🗂️ Adding Content

All content is externalized from components. Edit `src/constants/data.tsx`:

```ts
export const PROJECTS_DATA: Project[] = [
    { title: "Project Name", github: "https://github.com/...", image: projectImg },
];
```

Profile links and personal info are in `src/config/index.ts`:

```ts
export const PROFILE = {
    EMAIL: 'contact@rifatcholakov.com',
    GITHUB_URL: 'https://github.com/rifatcholakov',
    LINKEDIN_URL: 'https://www.linkedin.com/in/rifatcholakov/',
};
```

---

## ✅ Form Validation

Client-side validation runs before any API call. Rules are configured in `src/config/index.ts`:

```ts
export const VALIDATION = {
    NAME_MIN_LENGTH: 2,
    MESSAGE_MIN_LENGTH: 10,
    EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
```

Pure validation logic lives in `src/utils/validation.ts` — fully testable with no React dependencies.

---

## 🏗️ Key Architecture Decisions

- **No prop drilling** — theme state is consumed via `useTheme()` context hook
- **Service layer** — `contactService.ts` owns all `fetch` logic; components never call APIs directly
- **Consent-gated analytics** — GA4 is loaded only after explicit user consent; removal is instant on rejection
- **Environment bindings** — Keys/secrets are loaded from `import.meta.env` rather than hardcoded in source
- **Cloudflare Pages optimized** — Includes secure `_headers` and automated GitHub Actions deployment
- **Zero-loop routing** — Cleaned up routing rules to prevent infinite redirect loops on static pages.
- **IntersectionObserver** for scroll animations instead of raw scroll listeners — more performant and auto-cleans up
- **Stable React keys** — all `.map()` calls use meaningful unique IDs, not array indices
- **`import type`** used throughout for TypeScript interfaces — compatible with `isolatedModules`

---

## 🌐 Deployment (Cloudflare Pages)

The project is fully configured for automated deployment to **Cloudflare Pages** using GitHub Actions.

### 1. Automated Deployments
Simply push to the `main` branch. The `.github/workflows/cloudflare-pages.yml` workflow will:
1.  **Build** the production assets using Vite.
2.  **Deploy** the `dist/` directory to the `my-dev-portfolio-site` project on Cloudflare Pages.

### 2. Required GitHub Secrets
To enable the deployment, add the following to your GitHub Repository Secrets:
- `CLOUDFLARE_API_TOKEN` (API token with Cloudflare Pages Edit permissions)
- `CLOUDFLARE_ACCOUNT_ID` (Your Cloudflare Account ID)

### 3. Production Environment Variables
You must also configure the following Environment Variables in your Cloudflare Pages Dashboard:
- `VITE_WEB3FORMS_KEY`
- `VITE_GA_MEASUREMENT_ID`

---

## 📄 License

**All Rights Reserved** — Copyright © 2025 Rifat Cholakov.

This project is publicly visible but **not open for use, copying, modification, or redistribution** without explicit written permission. See the [LICENSE](./LICENSE) file for full terms.