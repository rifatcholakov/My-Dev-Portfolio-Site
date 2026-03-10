import { useState, useCallback } from 'react';
import './Contact.css';

const WEB3FORMS_ACCESS_KEY = '895ca81f-72d5-47df-833c-0b6f20ad33aa';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormFields {
    name: string;
    email: string;
    message: string;
}

const EMPTY_FORM: FormFields = { name: '', email: '', message: '' };

const Contact = () => {
    const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFields(prev => ({ ...prev, [name]: value }));
        },
        []
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Renamed to `payload` to avoid shadowing the `fields` state above
        const payload = new FormData(e.currentTarget);
        payload.append('access_key', WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch(WEB3FORMS_URL, { method: 'POST', body: payload });
            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFields(EMPTY_FORM);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Could not connect to the server. Please check your internet connection.');
        }
    };

    const isLoading = status === 'loading';

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-grid reveal">
                    <div className="contact-info">
                        <div className="section-marker" style={{ justifyContent: 'flex-start' }}>
                            <span className="marker-line" style={{ width: '30px' }}></span>
                            <span className="marker-text">Contact</span>
                        </div>
                        <h2 className="section-title left">Get in touch</h2>
                        <p className="contact-description">
                            If you're building something where performance and strong engineering standards are essential, I'd love to hear about it.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <a href="mailto:contact@rifatcholakov.com" className="detail-link">
                                    contact@rifatcholakov.com
                                </a>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-text">Remote / Europe</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Social</span>
                                <div className="social-links">
                                    {/* Fixed: added rel="noreferrer" to prevent referrer leaking */}
                                    <a href="https://www.linkedin.com/in/rifatcholakov/" target="_blank" rel="noopener noreferrer" className="detail-link">LinkedIn</a>
                                    <a href="https://github.com/rifatcholakov" target="_blank" rel="noopener noreferrer" className="detail-link">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" value={fields.name} onChange={handleChange} placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" value={fields.email} onChange={handleChange} placeholder="email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" value={fields.message} onChange={handleChange} placeholder="How can I help you?" rows={5} required></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn-primary btn-executive full-width ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* aria-live ensures screen readers announce status changes */}
                            <div
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                                className={`form-result ${status === 'idle' ? '' : status}`}
                            >
                                {status === 'success' && 'Thank you! Your message has been sent successfully.'}
                                {status === 'error' && errorMessage}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
