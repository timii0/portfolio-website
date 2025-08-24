import React from 'react'
// import profilepicture from '../assets/images/profilepicture.jpeg'

const Hero = ({
  title = 'Oluwatimilehin Sapara',
  subtitle = 'Hi, welcome to my portfolio website'
}) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-8 border-b-2 border-b-white font-fira">
      <div className="flex-shrink-0">
        <img
          src="/images/profilepicture.jpeg"
          alt="profile"
          className="rounded-lg w-40 h-40 md:w-56 md:h-56 object-cover shadow-lg"
        />
      </div>

      <div className="text-center md:text-left space-y-4  p-6 rounded-xl shadow-md max-w-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white">{subtitle}</p>
      </div>
    </section>
  )
}

export default Hero
