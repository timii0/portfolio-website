// src/components/ProjectCards.jsx
import React from 'react';
import projects from '../projects.json';
import ProjectCard from './ProjectCard';

const ProjectCards = () => {
  return (
    <section
      id="projects"
      className="py-16 border-t border-slate-200 bg-white rounded-3xl shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          Selected projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
