// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCards from '../components/ProjectCards';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-10">
      {/* Main browser-style card */}
      <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-white/60">
        <Navbar />
        <Hero />
      </div>

      {/* Rest of the page content */}
      <div className="max-w-6xl mx-auto mt-16 space-y-16">
        <About />
        <ProjectCards />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
