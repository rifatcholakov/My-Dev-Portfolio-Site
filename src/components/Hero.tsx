import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Decorative background gradients */}
            <div className="gradient-blob shape-1"></div>
            <div className="gradient-blob shape-2"></div>

            <div className="container">
                <div className="hero-grid reveal">
                    <div className="hero-text">
                        <p className="hero-greeting">Hi, I am Rifat 👋</p>
                        <h1 className="hero-title reveal monograph-animate">
                            Frontend<br />
                            <span>Developer</span>
                        </h1>
                        <p className="hero-description">
                            I specialize in creating organized, component-based architectures that make collaboration easy and development efficient. I take pride in turning complex designs into high-performance code that is easy for any team member to pick up and build upon and I’m here to help the team move quickly while keeping the code quality high.
                        </p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn-primary btn-executive">Get in touch</a>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-image-wrapper">
                            <img src={profileImg} alt="Rifat Cholakov" className="hero-profile-image" />
                            <div className="image-accent-border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;

