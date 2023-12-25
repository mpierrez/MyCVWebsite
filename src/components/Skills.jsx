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
import plsqlIcon from '../img/plsql.png';
import rIcon from '../img/r.png';

import wlangageIcon from '../img/wlangage.png';
import laravelIcon from '../img/laravel.png';
import viteIcon from '../img/vite.png';
import junitIcon from '../img/junit.png';
import phpunitIcon from '../img/phpunit.png';
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
    { id: 13, name: 'PL/SQL', icon: plsqlIcon},
    { id: 14, name: 'R', icon: rIcon},
    { id: 15, name: 'WLangage', icon: wlangageIcon},
  ];

  const frameworksData = [
    { id: 1, name: 'React', icon: reactIcon},
    { id: 2, name: 'Vite', icon: viteIcon},
    { id: 3, name: 'Laravel', icon: laravelIcon},
    { id: 4, name: 'JUnit', icon: junitIcon},
    { id: 5, name: 'PHP Unit', icon: phpunitIcon},
  ];

  return (
    <section className="skills">
      <h2>Compétences</h2>
      <p>Voici une liste de langages de programation que j&apos;ai utilisé durant mon cursus</p>
      <div className="skills-list">
        {skillsData.map((skill) => (
          <div className="skills-item" key={skill.id}>
            {skill.id === 15 ? (
                <img src={skill.icon} alt={skill.name} width={65} height={30}></img>
              ) : (
                <img src={skill.icon} alt={skill.name} width={50} height={50}></img>
              )}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <p>Voici une liste des frameworks que j&apos;ai utilisé durant mon cursus</p>
        <div className="frameworks-list">
          {frameworksData.map((framework) => (
            <div className="framework-item" key={framework.id}>
              {framework.id === 5 ? (
                <img src={framework.icon} alt={framework.name} width={100} height={50}></img>
              ) : (
                <img src={framework.icon} alt={framework.name} width={50} height={50}></img>
              )}
              <p>{framework.name}</p>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Skills;