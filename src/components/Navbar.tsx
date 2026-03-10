import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    Rifat Cholakov
                </a>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#why-choose-me">Why Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
                <a href="#projects" className="cta-button">View Work</a>
            </div>
        </nav>
    );
};

export default Navbar;
