import React from 'react';
import avatar from '../../images/avatar.png'
import codeIllustration from '../../images/code-illustration.png'


export default function AboutMe() {
  return (
    <>

      <div className='aboutMe'> 
        <h1 className="title">
        Hello, My name is Shane Benlolo.
        I am a Fullstack Developer.
        </h1>
        <p className="subTitle">Computer Science Graduate who loves to design, code, and create new things.</p>
        <img className="avatar" src={avatar} alt="avatar"></img>
        <img className="code-illustration" src={codeIllustration} alt="codeIllustration"></img>
      </div>
    </>
  );
}
