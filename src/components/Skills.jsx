import React, { useState } from 'react';
import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import javascriptIcon from '../img/js.png';
import phpIcon from '../img/php.png';
import reactIcon from '../img/react.png';
import pythonIcon from '../img/python.png';
import javaIcon from '../img/java.svg';
import csharpIcon from '../img/csharp.png';
import '../App.css';

function Skills() {
  const skillsData = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'PHP', icon: phpIcon},
    { name: 'React', icon: reactIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'C#', icon: csharpIcon },
  ];

  const [currentSkill, setCurrentSkill] = useState(0);

  const handlePrevSkill = () => {
    setCurrentSkill((prevSkill) => (prevSkill === 0 ? skillsData.length - 1 : prevSkill - 1));
  };

  const handleNextSkill = () => {
    setCurrentSkill((prevSkill) => (prevSkill === skillsData.length - 1 ? 0 : prevSkill + 1));
  };

  return (
    <section className="skills">
      <div className="container">
        <h2>Compétences</h2>
        <p>Voici une liste non-exhaustives des langages de programation que je maîtrise</p>
        <div className="skills-content">
          <div className="skills-list">
            {skillsData.map((skill) => (
              <div className="skills-item">
                <img src={skill.icon} alt={skill.name}></img>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          {/*<div className="skills-navigation">
            <button onClick={handlePrevSkill} className="arrow-button">
              <FaArrowLeft />
            </button>
            <button onClick={handleNextSkill} className="arrow-button">
              <FaArrowRight />
            </button>
            </div>*/}
        </div>
      </div>
    </section>
  );
}

export default Skills;