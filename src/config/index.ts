/**
 * config/index.ts
 * All environment-dependent configuration and static app constants.
 * Move sensitive keys to .env in production (VITE_WEB3FORMS_KEY).
 */

// ──────────────────────────────────────────────
// Contact Form
// ──────────────────────────────────────────────
export const CONTACT_CONFIG = {
    API_URL: 'https://api.web3forms.com/submit',
    ACCESS_KEY: import.meta.env.VITE_WEB3FORMS_KEY || '',
    // Free plan shared sitekey from Web3Forms. Use your own key on paid plans.
    HCAPTCHA_SITE_KEY: '50b2fe65-b00b-4b9e-ad62-3ba471098be2',
} as const;

// ──────────────────────────────────────────────
// User-facing messages
// ──────────────────────────────────────────────
export const FORM_MESSAGES = {
    SUCCESS: 'Thank you! Your message has been sent successfully.',
    SERVER_ERROR: 'Something went wrong. Please try again.',
    NETWORK_ERROR: 'Could not connect to the server. Please check your internet connection.',
    SENDING: 'Sending...',
    SUBMIT: 'Send Message',
} as const;

// ──────────────────────────────────────────────
// Validation rules
// ──────────────────────────────────────────────
export const VALIDATION = {
    NAME_MIN_LENGTH: 2,
    MESSAGE_MIN_LENGTH: 10,
    EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
} as const;

// ──────────────────────────────────────────────
// Personal info used across contact section + footer
// ──────────────────────────────────────────────
export const PROFILE = {
    EMAIL: 'contact@rifatcholakov.com',
    LOCATION: 'Remote / Europe',
    GITHUB_URL: 'https://github.com/rifatcholakov',
    LINKEDIN_URL: 'https://www.linkedin.com/in/rifatcholakov/',
    GITHUB_REPOS_URL: 'https://github.com/rifatcholakov?tab=repositories',
} as const;
