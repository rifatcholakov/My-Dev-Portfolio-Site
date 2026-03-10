import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="logo">Rifat Cholakov</h3>
                        <p className="footer-description">
                            Frontend Developer specializing in scalable architectures and performant web experiences.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Connect</h4>
                        <ul className="footer-links">
                            <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Rifat. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
