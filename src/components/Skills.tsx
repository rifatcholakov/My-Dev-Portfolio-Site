import './Skills.css';
import { SKILLS_DATA } from '../constants/data';

const Skills = () => {
    return (
        <section id="skills" className="section expertise-section">
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
                    {SKILLS_DATA.map((skill, index) => (
                        <article
                            className="executive-card reveal monograph-animate"
                            key={skill.title}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="card-header">
                                <div className="card-icon-box" aria-hidden="true">{skill.icon}</div>
                                <h3 className="card-title">{skill.title}</h3>
                            </div>
                            <div className="card-body">
                                <ul className="card-list">
                                    {skill.items.map((item) => (
                                        <li key={item} className="card-item">
                                            <span className="item-bullet" aria-hidden="true"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-number" aria-hidden="true">0{index + 1}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
