import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="project-card"
        >
            <div className="project-image" style={{ background: `linear-gradient(135deg, #6366f1 0%, #a855f7 100%)` }}>
                {/* Placeholder for real images */}
                <span style={{ fontSize: '3rem', color: 'white' }}>{project.title[0]}</span>
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                    {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">GitHub</a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn live">Live Demo</a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
