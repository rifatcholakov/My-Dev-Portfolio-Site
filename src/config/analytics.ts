/**
 * config/analytics.ts
 * Google Analytics configuration.
 * Replace GA_MEASUREMENT_ID with your actual GA4 Measurement ID.
 */
export const GA_CONFIG = {
    MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || '', 
} as const;

// Dev-mode sanity check
if (import.meta.env.DEV && !GA_CONFIG.MEASUREMENT_ID) {
    console.warn('Google Analytics: VITE_GA_MEASUREMENT_ID is missing from environment variables.');
}

export const COOKIE_CONSENT_KEY = 'cookie_consent';

export type CookieConsent = 'accepted' | 'rejected' | null;

/** Reads the stored consent value from localStorage */
export function getStoredConsent(): CookieConsent {
    return (localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent) ?? null;
}

/** Injects the GA4 script into the document — only called after consent */
export function loadGoogleAnalytics(measurementId: string): void {
    if (document.getElementById('ga-script')) {
        // If already loaded, just update the consent state
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                'analytics_storage': getStoredConsent() === 'accepted' ? 'granted' : 'denied'
            });
        }
        return;
    }

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer.push(args); }
    window.gtag = gtag;

    // Set default consent mode to denied
    gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'wait_for_update': 500
    });

    gtag('js', new Date());

    // If already accepted, update consent immediately
    if (getStoredConsent() === 'accepted') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }

    gtag('config', measurementId, { anonymize_ip: true });
}

/**
 * trackEvent
 * Centrally manages Google Analytics event tracking.
 */
export function trackEvent(
    eventName: string,
    params?: Record<string, unknown>
): void {
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
    } else if (import.meta.env.DEV) {
        console.log(`[GA Dev] Event: ${eventName}`, params);
    }
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
