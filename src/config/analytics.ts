/**
 * config/analytics.ts
 * Google Analytics configuration.
 * Replace GA_MEASUREMENT_ID with your actual GA4 Measurement ID.
 */
export const GA_CONFIG = {
    MEASUREMENT_ID: 'G-XXXXXXXXXX', // ← Replace with your GA4 Measurement ID
} as const;

export const COOKIE_CONSENT_KEY = 'cookie_consent';

export type CookieConsent = 'accepted' | 'rejected' | null;

/** Reads the stored consent value from localStorage */
export function getStoredConsent(): CookieConsent {
    return (localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent) ?? null;
}

/** Injects the GA4 script into the document — only called after consent */
export function loadGoogleAnalytics(measurementId: string): void {
    if (document.getElementById('ga-script')) return; // Already loaded

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer.push(args); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, { anonymize_ip: true });
}

/** Removes GA cookies when the user rejects analytics */
export function removeGoogleAnalyticsCookies(): void {
    const cookies = ['_ga', '_gid', '_gat'];
    cookies.forEach(name => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: unknown[]) => void;
    }
}
