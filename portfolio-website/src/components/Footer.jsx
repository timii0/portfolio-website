// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-10 border-t border-slate-200 bg-white rounded-3xl shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Let&apos;s work together
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Have a project in mind, or just want to say hi? Feel free to reach out.
        </p>

        <a
          href="mailto:example@email.com"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transform hover:-translate-y-0.5 transition"
        >
          Email me
        </a>

        <p className="mt-6 text-[11px] text-slate-400">
          &copy; {new Date().getFullYear()} Oluwatimilehin Sapara. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
