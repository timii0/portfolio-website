// src/components/About.jsx
import React from 'react';
import { FaLinkedinIn, FaGithub, FaFileAlt } from 'react-icons/fa';

const About = () => {
  const text =
    'Hi, my name is Oluwatimilehin Sapara. I am a sophomore majoring in Computer Science at Texas Tech University. I enjoy building web applications and exploring how technology can solve real-world problems.';

  return (
    <section
      id="about"
      className="py-16 border-t border-slate-200 bg-white rounded-3xl shadow-sm"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src="/images/fullbody.JPG"
            alt="Oluwatimilehin full body"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="max-w-xl space-y-4 font-fira">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            About me
          </h2>
          <p className="text-sm md:text-base text-slate-600">{text}</p>

          <div className="flex gap-4 mt-4 flex-wrap text-slate-700 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              <FaFileAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
