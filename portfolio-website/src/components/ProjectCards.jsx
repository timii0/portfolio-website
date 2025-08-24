import React from 'react'
import projects from '../projects.json'
import ProjectCard from './ProjectCard'

const ProjectCards = () => {
  console.log(projects)
  return (
     <section className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Browse Projects
        </h2>
            <div className="grid grid-rows-3 gap-6">
             {projects.map((project) => (
            <ProjectCard key={project.id} project= {project}/>
          
          ))}
            </div>    
        </div>
    </section>
  )
} 

export default ProjectCards;