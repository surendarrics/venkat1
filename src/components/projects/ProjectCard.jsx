import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../projects/project.scss'
import { ProjectData } from './ProjectData'

const ProjectCard = ({image, name, id}) => {
  return (
    <div container project-page >
  

  <div className="bgImage"  style={{backgroundImage: `url(${image})`}} >
      <a className='title'>${name}</a>
  </div>
 </div>
 
  )
}

export default ProjectCard