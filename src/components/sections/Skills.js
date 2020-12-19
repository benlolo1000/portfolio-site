import React from 'react'
import skillsList from '../data/skillsList'
import '../../css/Skills.css'

const Skills = () => {

    const skills = skillsList.skills

    return (
        <>
        <div className="greenFill"></div>
            <div className="skillsOuterContainer">
                <h1 className="bio">From Conception to Deployment</h1>
                <p className="subBio">I create fullstack web applications. This includes tasks ranging from designing user interfaces, to building API's and databases, to developing efficient deployment pipelines, and everything in between. If you are looking for a software engineer who can be placed in any stage of an applications development and deployment lifecycle, look no further, you've found him.</p>
                <div className="skillsContainer">
                    <div className="skills">
                        {skills.map((skills) =>
                            <div className="skill">
                                <img className="skillIcon" src={skills.icon} alt="skills icon"></img>
                                <h2>{skills.name}</h2>
                                <p>{skills.statement}</p>
                                <b>Experience:</b>
                                <p>{skills.experience}</p>
                                <b>Languages and Tools I Use:</b>
                                <p>{skills.tools}</p>
                            </div>
                        )}
                </div>
            </div>
        </div>
    </>
    )
}

export default Skills
