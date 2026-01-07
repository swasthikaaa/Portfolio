import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const Home = () => {
    return (
        <div className="home-container">
            <section id="home" className="hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>Building Digital <span className="gradient-text">Experiences</span></h1>
                    <p>Full-stack developer specializing in modern web applications and creative UI.</p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-secondary">Let's Talk</a>
                    </div>
                </motion.div>
            </section>

            <section id="projects" className="projects-section">
                <div className="section-header">
                    <h2>Featured <span className="gradient-text">Projects</span></h2>
                    <p>A collection of my recent work in web development.</p>
                </div>
                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
