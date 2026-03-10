import { useState, useEffect } from 'react';
import {
    COOKIE_CONSENT_KEY,
    GA_CONFIG,
    getStoredConsent,
    loadGoogleAnalytics,
    removeGoogleAnalyticsCookies,
} from '../config/analytics';
import './CookieBanner.css';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = getStoredConsent();
        if (stored === 'accepted') {
            loadGoogleAnalytics(GA_CONFIG.MEASUREMENT_ID);
        }
        // Show banner only if no decision has been made yet
        setVisible(stored === null);
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setVisible(false);
        loadGoogleAnalytics(GA_CONFIG.MEASUREMENT_ID);
    };

    const handleReject = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
        setVisible(false);
        removeGoogleAnalyticsCookies();
    };

    // Expose a way to re-open the banner from the footer link
    useEffect(() => {
        const openBanner = () => setVisible(true);
        window.addEventListener('open-cookie-banner', openBanner);
        return () => window.removeEventListener('open-cookie-banner', openBanner);
    }, []);

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-modal="false" aria-label="Cookie consent">
            <div className="cookie-banner__content">
                <div className="cookie-banner__text">
                    <p>
                        <strong>We use cookies.</strong> This website uses Google Analytics to understand how visitors use it. Analytics cookies are only set with your consent. Strictly necessary cookies (Cloudflare security) are always active.
                    </p>
                    <p>
                        <a href="/privacy-policy.html">Privacy Policy</a>
                        {' · '}
                        <a href="/cookie-policy.html">Cookie Policy</a>
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    <button
                        className="cookie-btn cookie-btn--reject"
                        onClick={handleReject}
                        aria-label="Reject optional cookies"
                    >
                        Reject All
                    </button>
                    <button
                        className="cookie-btn cookie-btn--accept"
                        onClick={handleAccept}
                        aria-label="Accept all cookies including analytics"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
