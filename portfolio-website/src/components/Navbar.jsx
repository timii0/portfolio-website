// src/components/Navbar.jsx
import React from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' }, // placeholder
  { label: 'Process', href: '#process' },   // placeholder
  { label: 'Portfolio', href: '#projects' },
  { label: 'Blog', href: '#blog' }          // placeholder
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 md:px-10 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-sm">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
          O
        </div>
        <span className="font-semibold text-slate-900 text-sm md:text-base">
          Oluwatimilehin
        </span>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-500">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-slate-900 transition-colors"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          className="ml-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-5 py-2 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-transform transform hover:-translate-y-0.5"
        >
          Contact
        </a>
      </nav>

      {/* Mobile: just a Contact button for now */}
      <div className="md:hidden">
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-4 py-2 shadow-md shadow-purple-500/40"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
