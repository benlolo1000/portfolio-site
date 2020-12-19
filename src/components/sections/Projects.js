import React from 'react';
import '../../App.css';
import projectsList from '../projects/projectList'
import Buttons from '../buttons/Buttons'

export default function Projects() {

const projects = projectsList.projects

  return (
    <>
    {projects.map((projects)=>
      <div className='projects'>
          <div className="projectDetails">
            <img className="mockUp" src={projects.mockUp} alt="SanFranTokyo"></img>
            <div className="right">
            <h1 className="projectHeader">{projects.name}</h1>
              <p className="projDescription">{projects.desc}</p>
              <Buttons />
            </div>
          </div>
      </div>
    )}
    </>
  )
}
