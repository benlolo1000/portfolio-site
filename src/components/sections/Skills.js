import React from 'react'
import frontEndIcon from '../../images/front-end-icon.png'
import backEndIcon from '../../images/back-end-icon.png'
import devOpsIcon from '../../images/dev-ops-icon.png'

const Skills = () => {
    return (
        <>
        <div className="greenFill"></div>
            <div className="sectionContainer">
                <h1 className="bio">From Conception to Deployment</h1>
                <p className="subBio">I create fullstack web applications. This includes tasks ranging from designing user interfaces, to building API's and databases, to developing efficient deployment pipelines, and everything in between. If you are looking for a software engineer who can be placed in any stage of an applications development and deployment lifecycle, look no further, you've found him.</p>
                <div className="skillsContainer">
                    <div className="skills">
                        <div className="skill">
                            <img className="skillIcon" src={frontEndIcon} alt="front end icon"></img>
                            <h2>Front End</h2>
                            <p>I design custom UI's from the ground up, from pen and paper to deployment on the web</p>
                            <b>Experience Designing:</b>
                            <p>UI, UX, Mobile, Apps, Logos</p>
                            <b>Languages and Tools I Use</b>
                            <p>HTML, CSS, SASS, BootStrap, Javascript, React, Photoshop, Illustrator</p>
                        </div>
                        <div className="skill">
                            <img className="skillIcon" src={backEndIcon} alt="back end icon"></img>
                            <h2>Back End</h2>
                            <p>I build secure and reliable API's, that hit online resources or custom built databases </p>
                            <b>Experience Building:</b>
                            <p>RESTful API's, Authentication, Web Servers</p>
                            <b>Languages I Use</b>
                            <p>Node, Express, Golang, Jest, Nginx</p>
                        </div>
                        <div className="skill">
                            <img className="skillIcon" src={devOpsIcon} alt="back end icon"></img>
                            <h2>DevOps</h2>
                            <p>I develop CI/CD pipelines, which make going from production to development a breeze</p>
                            <b>Experience Deploying:</b>
                            <p>Static Web Pages, React Apps, Fullstack Applications</p> 
                            <b>Languages and Tools I Use</b>
                            <p>Docker, AWS, Bash Scripts, Github Actions </p>
                        </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Skills
