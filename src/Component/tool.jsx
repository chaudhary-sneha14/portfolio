// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "./constants.js";

export const Tool = () => (
  <section id="tool" className="skills-section">
    {/* Section Title */}
    <div className="skills-header">
      <h2>SKILLS</h2>
      <div className="underline"></div>
      <p>
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="skills-categories">
      {SkillsInfo.map((category) => (
        <div key={category.title} className="skills-category-card">
          <h3>{category.title}</h3>

          <div className="skills-grid">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <img src={skill.logo} alt={`${skill.name} logo`} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
