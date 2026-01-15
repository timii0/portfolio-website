// src/components/Skills.jsx
import React from 'react';

const skills = [
  { src: '/images/python.png', alt: 'Python' },
  { src: '/images/js.png', alt: 'JavaScript' },
  { src: '/images/html.png', alt: 'HTML' },
  { src: '/images/css-3.png', alt: 'CSS' },
  { src: '/images/letter-c.png', alt: 'C' },
  { src: '/images/atom.png', alt: 'React' },
  { src: '/images/java.png', alt: 'Java' },
  { src: '/images/social.png', alt: 'Git' }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 border-t border-slate-200 bg-white rounded-3xl shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          Skills & tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.alt}
              className="bg-slate-50 rounded-2xl h-28 flex items-center justify-center shadow-sm"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
