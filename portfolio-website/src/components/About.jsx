import React from 'react'
import { FaLinkedinIn, FaGithub, FaFileAlt } from 'react-icons/fa'

const About = () => {
  const text = `Hi, my name is Oluwatimilehin Sapara. I am a sophomore majoring in Computer Science at Texas Tech University. I enjoy building web applications and exploring how technology can solve real-world problems.`

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white border-b-2 border-b-white'>
        <section className="flex flex-col md:flex-row min-h-screen text-white px-6 py-12 items-center md:items-start gap-8 max-w-6xl mx-auto">
  <div className="flex-shrink-0">
    <img
      src="/images/fullbody.JPG"
      alt="fullbody"
      className="w-100 h-auto rounded-2xl shadow-lg"
    />
  </div>

  <div className="text-white max-w-xl space-y-4 font-fira flex flex-col justify-center  h-100">
    <p className="text-lg ">{text}</p>

    <div className="flex gap-4 mt-4 flex-wrap">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-300"
      >
        <FaGithub/>
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-300"
      >
        <FaLinkedinIn/>
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-300"
      >
        <FaFileAlt/>
      </a>
    </div>
  </div>
</section>
    </div>
    

  )
}

export default About
