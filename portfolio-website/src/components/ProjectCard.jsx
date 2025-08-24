import React from 'react'
import projects from '../projects.json'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
   <>
    <div className="rounded-xl shadow-md relative bg-gray-950 font-fira hover:bg-gray-500">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{project.type}</div>
                <div>
                  {/* <img src={project.image} alt="project image" className='w-full h-24 object-cover mb-4' /> */}
                </div>
                <h3 className="text-xl font-bold text-gray-600">{project.title}</h3>
              </div>

              <div className="mb-5 text-gray-600">
              {project.description}
              </div>
              <button  className="text-indigo-500 mb-5 hover:text-indigo-60"></button>

          

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                 
                  
                </div>
                {/* <Link
                  to={`/projects/${project.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link> */}
              </div>
            </div>
            </div>
            
   </>
  )
}

export default ProjectCard