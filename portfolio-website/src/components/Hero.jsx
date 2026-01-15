// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="px-8 md:px-10 py-10 md:py-16 bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100"
    >
      {/* Top two-column layout */}
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-wide text-purple-500">
            Hello, I&apos;m
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight font-fira">
            Oluwatimilehin Sapara
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-md">
            I&apos;m a Computer Science student and aspiring developer who enjoys
            building immersive, clean web applications and using technology to
            solve real-world problems.
          </p>

          <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transform hover:-translate-y-0.5 transition">
            Say hello
          </button>
        </div>

        {/* Right: Image card */}
        <div className="relative">
          <div className="rounded-[2rem] bg-gradient-to-b from-slate-100 to-slate-200 p-3 md:p-4 shadow-xl">
            <div className="rounded-[1.5rem] overflow-hidden bg-slate-200 aspect-[3/4]">
              <img
                src="/images/profilepicture.jpeg"
                alt="Oluwatimilehin Sapara"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white shadow-md px-6 py-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Experience
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">2+</p>
          <p className="mt-1 text-xs text-slate-500">
            Years coding and building projects
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-md px-6 py-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Projects
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">10+</p>
          <p className="mt-1 text-xs text-slate-500">
            Personal and academic projects shipped
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-md px-6 py-5">
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Tech stack
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">8+</p>
          <p className="mt-1 text-xs text-slate-500">
            Languages & tools used regularly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
