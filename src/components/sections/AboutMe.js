import React from 'react';
import avatar from '../../images/avatar.png'

export default function AboutMe() {
  return (
    <>

      <div className='aboutMe'> 
        <h1 className="title">
        Hello, My name is Shane Benlolo.
        I am a Fullstack Developer
        </h1>
        <img className="avatar" src={avatar} alt="avatar"></img>
      </div>
    </>
  );
}
