import { useState, useCallback, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './Contact.css';
import { submitContactForm } from '../services/contactService';
import { validateContactForm, isFormValid } from '../utils/validation';
import type { FormErrors, FormFields } from '../utils/validation';
import { PROFILE, FORM_MESSAGES, CONTACT_CONFIG } from '../config';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: FormFields = { name: '', email: '', message: '' };

// ─── Sub-component: contact detail row ───────────────────────────────────────
interface DetailItemProps {
    label: string;
    children: React.ReactNode;
}
const DetailItem = ({ label, children }: DetailItemProps) => (
    <div className="detail-item">
        <span className="detail-label">{label}</span>
        {children}
    </div>
);

// ─── Sub-component: validated form field ─────────────────────────────────────
interface FormFieldProps {
    id: keyof FormFields;
    label: string;
    error?: string;
    children: React.ReactElement;
}
const FormField = ({ id, label, error, children }: FormFieldProps) => (
    <div className={`form-group ${error ? 'has-error' : ''}`}>
        <label htmlFor={id}>{label}</label>
        {children}
        {error && (
            <span id={`${id}-error`} className="field-error" role="alert">
                {error}
            </span>
        )}
    </div>
);

// ─── Main Contact component ───────────────────────────────────────────────────
const Contact = () => {
    const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>('idle');
    const [serverMessage, setServerMessage] = useState<string>('');
    const [captchaToken, setCaptchaToken] = useState<string>('');

    // Ref to the HCaptcha widget — used to programmatically reset it after submit
    const captchaRef = useRef<HCaptcha>(null);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFields(prev => ({ ...prev, [name]: value }));
            // Clear individual field error on change
            if (errors[name as keyof FormErrors]) {
                setErrors(prev => ({ ...prev, [name]: undefined }));
            }
        },
        [errors]
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 1. Client-side field validation
        const validationErrors = validateContactForm(fields);
        if (!isFormValid(validationErrors)) {
            setErrors(validationErrors);
            return;
        }

        // 2. Captcha must be solved before submitting
        if (!captchaToken) {
            setStatus('error');
            setServerMessage('Please complete the captcha before sending.');
            return;
        }

        setStatus('loading');
        setServerMessage('');

        // 3. Submit via service layer (captcha token sent to Web3Forms for verification)
        const result = await submitContactForm({ ...fields, captchaToken });

        if (result.success) {
            setStatus('success');
            setFields(EMPTY_FORM);
            setErrors({});
            setCaptchaToken('');
            captchaRef.current?.resetCaptcha();
        } else {
            setStatus('error');
            setServerMessage(result.message);
            // Reset captcha so user can try again
            setCaptchaToken('');
            captchaRef.current?.resetCaptcha();
        }
    };

    const isLoading = status === 'loading';

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-grid reveal">

                    {/* ── Left: contact info ── */}
                    <div className="contact-info">
                        <div className="section-marker">
                            <span className="marker-line" style={{ width: '30px' }}></span>
                            <span className="marker-text">Contact</span>
                        </div>
                        <h2 className="section-title left">Get in touch</h2>
                        <p className="contact-description">
                            If you're building something where performance and strong engineering standards are essential, I'd love to hear about it.
                        </p>

                        <div className="contact-details">
                            <DetailItem label="Email">
                                <a href={`mailto:${PROFILE.EMAIL}`} className="detail-link">
                                    {PROFILE.EMAIL}
                                </a>
                            </DetailItem>
                            <DetailItem label="Location">
                                <span className="detail-text">{PROFILE.LOCATION}</span>
                            </DetailItem>
                            <DetailItem label="Social">
                                <div className="social-links">
                                    <a href={PROFILE.LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="detail-link">LinkedIn</a>
                                    <a href={PROFILE.GITHUB_URL} target="_blank" rel="noopener noreferrer" className="detail-link">GitHub</a>
                                </div>
                            </DetailItem>
                        </div>
                    </div>

                    {/* ── Right: contact form ── */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <FormField id="name" label="Full Name" error={errors.name}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={fields.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    aria-invalid={!!errors.name}
                                />
                            </FormField>

                            <FormField id="email" label="Email Address" error={errors.email}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={fields.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    aria-invalid={!!errors.email}
                                />
                            </FormField>

                            <FormField id="message" label="Message" error={errors.message}>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={fields.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows={5}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    aria-invalid={!!errors.message}
                                ></textarea>
                            </FormField>

                            {/* hCaptcha widget — reCaptchaCompat must be false for Web3Forms */}
                            <div className="captcha-wrapper">
                                <HCaptcha
                                    sitekey={CONTACT_CONFIG.HCAPTCHA_SITE_KEY}
                                    reCaptchaCompat={false}
                                    onVerify={(token) => setCaptchaToken(token)}
                                    onExpire={() => setCaptchaToken('')}
                                    ref={captchaRef}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn-primary btn-executive full-width ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? FORM_MESSAGES.SENDING : FORM_MESSAGES.SUBMIT}
                            </button>

                            {/* Screen readers announce this on status change */}
                            <div
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                                className={`form-result ${status === 'idle' ? '' : status}`}
                            >
                                {status === 'success' && FORM_MESSAGES.SUCCESS}
                                {status === 'error' && serverMessage}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
