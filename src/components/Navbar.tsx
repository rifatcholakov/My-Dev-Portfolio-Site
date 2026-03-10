import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo" onClick={closeMenu}>
                    <span className="logo-primary">rifat</span><span className="logo-accent">cholakov</span><span className="logo-dot">.</span>
                </a>

                {/* Backdrop */}
                {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}

                <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Expertise</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Work</a></li>
                    <li><a href="#why-choose-me" onClick={closeMenu}>Philosophy</a></li>
                    <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

                <div className="nav-actions">
                    <button onClick={toggleTheme} className="cta-button theme-toggle">
                        {theme === 'light' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>

                    {/* Hamburger Menu Toggle */}
                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
