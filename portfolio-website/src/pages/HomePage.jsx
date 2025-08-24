import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ProjectCards from '../components/ProjectCards'
import Skills from '../components/Skills'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ProjectCards/>
      <Skills/>
      <Footer/>
      
    </div>
  )
}

export default HomePage