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
    { id: 1, name: 'HTML', icon: htmlIcon },
    { id: 2, name: 'CSS', icon: cssIcon },
    { id: 3, name: 'JavaScript', icon: javascriptIcon },
    { id: 4, name: 'PHP', icon: phpIcon},
    { id: 5, name: 'React', icon: reactIcon },
    { id: 6, name: 'Python', icon: pythonIcon },
    { id: 7, name: 'Java', icon: javaIcon },
    { id: 8, name: 'C#', icon: csharpIcon },
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2>Compétences</h2>
        <p>Voici une liste non-exhaustives des langages de programation que je maîtrise</p>
        <div className="skills-content">
          <div className="skills-list">
            {skillsData.map((skill) => (
              <div className="skills-item" key={skill.id}>
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