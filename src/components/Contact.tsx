import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd send this to an API
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! This is a demo form.');
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
                            <span className="marker-text">Connect</span>
                        </div>
                        <h2 className="section-title left">Get in touch</h2>
                        <p className="contact-description">
                            Currently open to selective partnerships and leadership opportunities within forward-thinking engineering teams.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <a href="mailto:rifat@example.com" className="detail-link">rifat@example.com</a>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-text">Remote / Europe</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Social</span>
                                <div className="social-links">
                                    <a href="#" className="detail-link">LinkedIn</a>
                                    <a href="#" className="detail-link">GitHub</a>
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
                            <button type="submit" className="btn-primary btn-executive full-width">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
