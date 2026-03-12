import { GA_CONFIG, getStoredConsent, loadGoogleAnalytics } from './config/analytics';

/**
 * legal-analytics.ts
 * entry point for static legal pages.
 * Reuses the main app's analytics logic to ensure consistency.
 */
if (getStoredConsent() === 'accepted' && GA_CONFIG.MEASUREMENT_ID) {
    loadGoogleAnalytics(GA_CONFIG.MEASUREMENT_ID);
}
