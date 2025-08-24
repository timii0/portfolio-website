import React from 'react'

const Footer = () => {
  return (
   <footer className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        {/* Funny Header */}
        <h2 className="text-2xl font-bold mb-4">
          📚 Powered by Coffee & Last-Minute Deadlines
        </h2>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#resume" className="hover:underline">
            Resume
          </a>
        </div>

        {/* Fun Text */}
        <p className="max-w-lg mx-auto text-sm mb-6">
          This website was built during late-night coding sessions, fueled by snacks, questionable
          amounts of caffeine, and the magical ability to procrastinate productively.  
          If you’re reading this, I probably have an assignment due tomorrow.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            💼
          </a>
          <a
            href="mailto:example@email.com"
            className="hover:scale-125 transition-transform"
          >
            📧
          </a>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-xs opacity-75">
          &copy; 2025 Student Life, All rights probably reserved.
          <span className="block">
            Disclaimer: No coffee cups were harmed in the making of this site.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer