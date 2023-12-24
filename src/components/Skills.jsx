import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import javascriptIcon from '../img/js.png';
import phpIcon from '../img/php.png';
import reactIcon from '../img/react.png';
import pythonIcon from '../img/python.png';
import javaIcon from '../img/java.svg';
import csharpIcon from '../img/csharp.png';
import cIcon from '../img/c.png';
import cplusplusIcon from '../img/c++.png'
import bashIcon from '../img/bash.png';
import mysqlIcon from '../img/mysql.png';
import wlangageIcon from '../img/wlangage.png';
import laravelIcon from '../img/laravel.png';
import viteIcon from '../img/vite.png';
import '../App.css';

function Skills() {
  const skillsData = [
    { id: 1, name: 'HTML', icon: htmlIcon },
    { id: 2, name: 'CSS', icon: cssIcon },
    { id: 3, name: 'JavaScript', icon: javascriptIcon },
    { id: 4, name: 'PHP', icon: phpIcon},
    { id: 5, name: 'Python', icon: pythonIcon },
    { id: 6, name: 'Java', icon: javaIcon },
    { id: 7, name: 'C#', icon: csharpIcon },
    { id: 8, name: 'C', icon: cIcon },
    { id: 9, name: 'C++', icon: cplusplusIcon },
    { id: 10, name: 'Bash / Shell', icon: bashIcon },
    { id: 11, name: 'MySQL', icon: mysqlIcon },
    { id: 12, name: 'WLangage', icon: wlangageIcon}
  ];

  const frameworksData = [
    { id: 1, name: 'React', icon: reactIcon},
    { id: 2, name: 'Vite', icon: viteIcon},
    { id: 3, name: 'Laravel', icon: laravelIcon}
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
        </div>
        <div>
          <p>Voici une liste de frameworks que j&apos;ai utilisé lors de mon cursus</p>
          <div className='skills-content'>
              <div className='skills-list'>
                {frameworksData.map((framework) => (
                  <div className="skills-item" key={framework.id}>
                    <img src={framework.icon} alt={framework.name}></img>
                    <p>{framework.name}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;