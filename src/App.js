import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/sections/AboutMe';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="aboutMeDiv">
        <AboutMe />
      </div>
      <div className="skillsDiv">
        <Skills />
      </div>
      <div className="projectsDiv">
        <Projects />
      </div>
      <div className="contactDiv">
        <Contact />
      </div>
    </>
  );
}

export default App;
