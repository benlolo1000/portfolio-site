import React from 'react';
import avatar from '../../images/avatar.png'
import codeIllustration from '../../images/code-illustration.png'
import '../../css/AboutMe.css'


export default function AboutMe() {
  return (
    <>

      <div className='aboutMe'> 
        <h1 className="title">
        Hello, My name is Shane Benlolo.
        I am a Fullstack Developer.
        </h1>
        <p className="subTitle">Computer Science Graduate, Towson University Alumni. I love to design, code, and create new things.</p>
        <img className="avatar" src={avatar} alt="avatar"></img>
        <img className="code-illustration" src={codeIllustration} alt="codeIllustration"></img>
      </div>
    </>
  );
}
