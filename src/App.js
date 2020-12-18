import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/sections/Projects';
import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="aboutMeDiv">
        <AboutMe />
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
