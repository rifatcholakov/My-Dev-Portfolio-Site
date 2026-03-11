import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const NAV_LINKS = [
    { href: '#hero', label: 'Home' },
    { href: '#skills', label: 'Expertise' },
    { href: '#projects', label: 'Work' },
    { href: '#why-choose-me', label: 'Why me' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
];

const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
);

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-container">
                <div className="nav-brand-group">
                    <a href="#" className="logo" onClick={closeMenu}>
                        <span className="logo-primary">rifat</span>
                        <span className="logo-accent">cholakov</span>
                        <span className="logo-dot">.</span>
                    </a>
                </div>

                {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />}

                <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`} role="list">
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} onClick={closeMenu}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <button
                        onClick={toggleTheme}
                        className="cta-button theme-toggle"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>

                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
                        aria-expanded={isMenuOpen}
                        aria-controls="nav-links"
                    >
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
