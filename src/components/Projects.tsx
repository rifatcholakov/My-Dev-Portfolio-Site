import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive analytics dashboard for e-commerce platforms featuring real-time data visualization, inventory management, and sales tracking.",
            github: "https://github.com/rifatcholakov/ecommerce-dashboard",
            image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23888%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EProject%20Image%3C%2Ftext%3E%3C%2Fsvg%3E"
        },
        {
            title: "Fintech Mobile App",
            description: "A secure and intuitive mobile application for managing personal finances, tracking expenses, and setting savings goals.",
            github: "https://github.com/rifatcholakov/fintech-app",
            image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23888%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EProject%20Image%3C%2Ftext%3E%3C%2Fsvg%3E"
        },
        {
            title: "SaaS Landing Page",
            description: "High-conversion marketing website with complex animations, dynamic pricing tables, and multi-language support.",
            github: "https://github.com/rifatcholakov/saas-landing",
            image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23888%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EProject%20Image%3C%2Ftext%3E%3C%2Fsvg%3E"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div className="title-wrapper reveal">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">A selection of my recent work and technical experiments.</p>
                </div>

                <div className="project-gallery">
                    {projects.map((project, index) => (
                        <div className="gallery-item reveal" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="gallery-image-wrapper">
                                <img src={project.image} alt={project.title} className="gallery-img" />
                                <div className="gallery-label">
                                    <div className="label-header">
                                        <span className="label-index">Project 0{index + 1}</span>
                                        <h3 className="label-title">{project.title}</h3>
                                    </div>
                                    <p className="label-description">{project.description}</p>
                                    <div className="label-footer">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                            View Source <span className="arrow">↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
