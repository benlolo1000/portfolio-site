import React from 'react';

const Buttons = ({ githubLink, websiteLink }) => {
  console.log(githubLink);
  return (
    <div className="projButtons">
      <button className="github">
        <a href={githubLink} target="_blank">
          Github
        </a>
      </button>
      <button className="demo">
        <a href={websiteLink} target="_blank">
          View Demo
        </a>
      </button>
    </div>
  );
};

export default Buttons;
