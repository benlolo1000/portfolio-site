import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import FrontEnd from './components/pages/FrontEnd';
import BackEnd from './components/pages/BackEnd';
import DevOps from './components/pages/DevOps';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="projectsDiv">
        <Projects />
      </div>
      <div className="frontEndDiv">
        <FrontEnd />
      </div>
      <div className="backEndDiv">
        <BackEnd />
      </div>
      <div className="devOpsDiv">
        <DevOps />
      </div>
      <div className="contactDiv">
        <Contact />
      </div>
    </>
  );
}

export default App;
