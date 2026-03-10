import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
    const skillsData = [
        {
            title: "Development",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            items: [
                "Build scalable, maintainable applications using React, TypeScript, or other modern frameworks",
                "Architect modular component systems for consistent and maintainable UIs",
                "Integrate seamlessly with APIs, microservices, and third-party platforms"
            ]
        },
        {
            title: "Workflow & Delivery",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
            ),
            items: [
                "Set up CI/CD pipelines & automated deployments for smooth, reliable releases",
                "Apply Agile practices: iterative development, sprint planning, and backlog management",
                "Deploy scalable solutions on cloud & serverless platforms, with performance monitoring and observability"
            ]
        },
        {
            title: "Team & Product Impact",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <polyline points="17 11 19 13 23 9" />
                </svg>
            ),
            items: [
                "Collaborate effectively with product, design, and backend teams",
                "Plan system architecture for long-term maintainability and scalability",
                "Mentor teammates, enhance UX, and drive efficiency and quality without sacrificing speed"
            ]
        }
    ];

    return (
        <section id="expertise" className="section expertise-section">
            <div className="container">
                <div className="title-wrapper reveal">
                    <div className="section-marker">
                        <span className="marker-line"></span>
                        <span className="marker-text">Expertise</span>
                        <span className="marker-line"></span>
                    </div>
                    <h2 className="section-title">What I can do for you</h2>
                    <p className="section-subtitle">Delivering high-quality code and seamless experiences from concept to production.</p>
                </div>

                <div className="expertise-grid">
                    {skillsData.map((skill, index) => (
                        <div
                            className="executive-card reveal monograph-animate"
                            key={index}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="card-header">
                                <div className="card-icon-box">{skill.icon}</div>
                                <h3 className="card-title">{skill.title}</h3>
                            </div>
                            <div className="card-body">
                                <ul className="card-list">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="card-item">
                                            <span className="item-bullet"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-number">0{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
