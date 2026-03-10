import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
    const skillsData = [
        {
            title: "Development",
            icon: "💻",
            items: [
                "Build scalable, maintainable applications using React, TypeScript, or other modern frameworks",
                "Architect modular component systems for consistent and maintainable UIs",
                "Integrate seamlessly with APIs, microservices, and third-party platforms"
            ]
        },
        {
            title: "Workflow & Delivery",
            icon: "🚀",
            items: [
                "Set up CI/CD pipelines & automated deployments for smooth, reliable releases",
                "Apply Agile practices: iterative development, sprint planning, and backlog management",
                "Deploy scalable solutions on cloud & serverless platforms, with performance monitoring and observability"
            ]
        },
        {
            title: "Team & Product Impact",
            icon: "🤝",
            items: [
                "Collaborate effectively with product, design, and backend teams",
                "Plan system architecture for long-term maintainability and scalability",
                "Mentor teammates, enhance UX, and drive efficiency and quality without sacrificing speed"
            ]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
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

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className={`skill-card reveal glass`} key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-title">{skill.title}</h3>
                            <ul className="skill-list">
                                {skill.items.map((item, i) => (
                                    <li key={i}>
                                        <span className="list-bullet">›</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
