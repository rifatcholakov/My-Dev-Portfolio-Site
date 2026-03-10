import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Global Commerce Engine",
            github: "https://github.com/rifatcholakov/commerce-engine",
            image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23111827%22%2F%3E%3C%2Fsvg%3E"
        },
        {
            title: "Nexus Finance Ecosystem",
            github: "https://github.com/rifatcholakov/nexus-finance",
            image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23111827%22%2F%3E%3C%2Fsvg%3E"
        },
        {
            title: "Lumina SaaS Platform",
            github: "https://github.com/rifatcholakov/lumina-saas",
            image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23111827%22%2F%3E%3C%2Fsvg%3E"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="title-wrapper reveal">
                    <div className="section-marker">
                        <span className="marker-line"></span>
                        <span className="marker-text">Showcase</span>
                        <span className="marker-line"></span>
                    </div>
                    <h2 className="section-title">Selected Works</h2>
                    <p className="section-subtitle">A visual collection of engineering excellence and digital architecture.</p>
                </div>

                <div className="minimal-project-grid">
                    {projects.map((project, index) => (
                        <div className="minimal-card reveal monograph-animate" key={index} style={{ transitionDelay: `${index * 0.15}s` }}>
                            <div className="minimal-visual">
                                <img src={project.image} alt={project.title} className="minimal-img" />
                                <div className="minimal-overlay"></div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="minimal-github-link">
                                    GitHub ↗
                                </a>
                            </div>
                            <div className="minimal-info">
                                <h3 className="minimal-title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta reveal" style={{ transitionDelay: '0.4s' }}>
                    <a href="https://github.com/rifatcholakov?tab=repositories" target="_blank" rel="noopener noreferrer" className="executive-cta-button">
                        View All Projects
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
