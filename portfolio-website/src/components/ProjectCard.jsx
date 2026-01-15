// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl bg-slate-50 hover:bg-slate-100 transition shadow-sm hover:shadow-md border border-slate-100 flex flex-col h-full font-fira">
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs font-medium text-purple-500 mb-2">
          {project.type}
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          {project.title}
        </h3>

        <p className="text-xs text-slate-600 flex-1">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
