import React from 'react';
import './WhyChooseMe.css';

const WhyChooseMe: React.FC = () => {
    const reasons = [
        {
            title: "Scalable Architecture, Not Just Code",
            subtitle: "Built for Growth.",
            description: "I design modular, scalable frontend systems that stay maintainable as your project grows. By prioritizing structure and consistency over quick fixes, I eliminate technical debt to ensure your product remains easy to update and scale for years to come.",
            icon: "🏗️"
        },
        {
            title: "Multiplier for Your Engineering Team",
            subtitle: "I Make Teams More Effective.",
            description: "I communicate clearly, document thoroughly, and write code that others can easily read and extend. My pull requests are thoughtful, my reviews are constructive, and my goal is always focused on helping the team move faster together.",
            icon: "⚡"
        },
        {
            title: "Pixel-Perfect & Accessible UX",
            subtitle: "High-Fidelity & Responsive UI.",
            description: "I transform complex designs into pixel-perfect, responsive interfaces. I ensure your product looks and feels native on every screen size, while ensuring the UI is fully accessible and performs flawlessly across every browser and device.",
            icon: "✨"
        },
        {
            title: "Continuous Improvement & Product Thinking",
            subtitle: "I Improve Code with Purpose.",
            description: "I look for better patterns to simplify complexity, leaving the codebase cleaner and faster than I found it. I dive deep into the “why” behind each feature to ensure every line of code adds real business value, not just functionality.",
            icon: "🔄"
        },
        {
            title: "A Partner, Not Just a Feature Developer",
            subtitle: "Radical Ownership.",
            description: "I don’t just deliver features—I own outcomes. From initial architecture to production stability, I treat your codebase like my own product. You aren’t just hiring a developer; you’re gaining a partner committed to your product’s long-term success.",
            icon: "🤝"
        }
    ];

    return (
        <section id="why-choose-me" className="section why-choose-me-section">
            <div className="container">
                <div className="title-wrapper reveal">
                    <div className="section-marker">
                        <span className="marker-line"></span>
                        <span className="marker-text">Philosophy</span>
                        <span className="marker-line"></span>
                    </div>
                    <h2 className="section-title">Why choose me</h2>
                    <p className="section-subtitle">Delivering value beyond just writing code.</p>
                </div>

                <div className="reasons-row">
                    {reasons.map((reason, index) => (
                        <div className="reason-item reveal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="reason-number">0{index + 1}</div>
                            <div className="reason-content">
                                <h3 className="reason-title">{reason.title}</h3>
                                <p className="reason-description">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
