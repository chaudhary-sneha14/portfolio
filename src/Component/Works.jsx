import React from "react";
import { projects } from "./constants.js";


export const Works = () => {
  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <div className="work-header">
        <h2>PROJECTS</h2>
        <div className="work-divider"></div>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Column */}
      <div className="work-list">
        {projects.map((project) => (
          <div key={project.id} className="work-card">
            <div className="work-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="work-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="work-tags">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <div className="work-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
                <a href={project.webapp} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

