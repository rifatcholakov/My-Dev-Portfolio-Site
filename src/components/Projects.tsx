import './Projects.css';
import { PROJECTS_DATA } from '../constants/data';

const GITHUB_PROFILE_URL = 'https://github.com/rifatcholakov?tab=repositories';

const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="github-icon" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Projects = () => {
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
                    {PROJECTS_DATA.map((project, index) => (
                        // Using title as key — stable and unique, unlike array index
                        <div
                            className="minimal-card reveal monograph-animate"
                            key={project.title}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="minimal-visual">
                                <img src={project.image} alt={`Screenshot of ${project.title}`} className="minimal-img" />
                                <div className="minimal-overlay" aria-hidden="true"></div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="minimal-github-link"
                                >
                                    <GitHubIcon />
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
                    <a
                        href={GITHUB_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="executive-cta-button"
                    >
                        View All Projects
                        <span className="cta-arrow" aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
