import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-primary">rifat</span><span className="logo-accent">cholakov</span><span className="logo-dot">.</span>
                        </a>
                        <p className="footer-bio">
                            Engineering high-performance digital experiences with a focus on architectural integrity,
                            scalability, and elite user interaction.
                        </p>
                        <div className="status-indicator">
                            <span className="status-dot"></span>
                            <span className="status-text">Available for select projects</span>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#skills">Expertise</a></li>
                            <li><a href="#projects">Work</a></li>
                            <li><a href="#why-choose-me">Philosophy</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Connect</h4>
                        <ul className="footer-links">
                            <li><a href="https://github.com/rifatcholakov" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/rifatcholakov/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="mailto:contact@rifatcholakov.com">Email</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Resources</h4>
                        <ul className="footer-links">
                            <li><a href="#" className="resource-link">Download CV / Resume</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-base">
                    <p className="copyright">
                        &copy; {currentYear} Rifat Cholakov. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
