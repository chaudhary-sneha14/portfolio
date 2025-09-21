import React from "react";
import { education } from "./constants.js";

export const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Header */}
      <div className="education-header">
        <h2>EDUCATION</h2>
        <div className="header-line"></div>
        <p>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Entries in row */}
      <div className="education-entries">
        {education.map((edu) => (
          <div key={edu.id} className="education-entry">
            <div className="edu-header">
              <div className="school-logo">
                <img src={edu.img} alt={edu.school} />
              </div>
              <div className="edu-info">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p className="edu-date">{edu.date}</p>
              </div>
            </div>
            <p className="edu-grade">Grade: {edu.grade}</p>
            <p className="edu-desc">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
