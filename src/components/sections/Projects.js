import React from 'react';
import '../../css/Projects.css';
import projectsList from '../data/projectList'
import Buttons from '../buttons/Buttons'

export default function Projects() {

const projects = projectsList.projects

  return (
    <>
    <div className='projects'>
    <h1 className="projectsTitle">Projects</h1>
    {projects.map((projects)=>
          <div className="projectDetails">
            <img className="mockUp" src={projects.mockUp} alt="SanFranTokyo"></img>
            <div className="right">
            <h1 className="projectHeader">{projects.name}</h1>
              <p className="projDescription">{projects.desc}</p>
              <Buttons />
            </div>
          </div>
    )}
    </div>
    </>
  )
}
