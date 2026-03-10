import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [result, setResult] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "895ca81f-72d5-47df-833c-0b6f20ad33aa");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Thank you! Your message has been sent successfully.");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("Could not connect to the server. Please check your internet.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
                                <a href="mailto:contact@rifatcholakov.com" className="detail-link">contact@rifatcholakov.com</a>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-text">Remote / Europe</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Social</span>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/rifatcholakov/" target='_blank' className="detail-link">LinkedIn</a>
                                    <a href="https://github.com/rifatcholakov" target='_blank' className="detail-link">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`btn-primary btn-executive full-width ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Processing...' : 'Send message'}
                            </button>
                            {result && (
                                <div className={`form-result ${result.includes('Success') || result.includes('Thank you') ? 'success' : 'error'}`}>
                                    {result}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
