import Done from './Done';
import Progress from './Progress';
import '../App.css';

function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h2>Expériences professionnelles</h2>
        <div className="experience-item">
          <div className="status">
            <h3>Alternant en conception et développement d&apos;applications Windev</h3>
            <Progress/>
          </div>
          <p>CUSTY, août 2023 à septembre 2024</p>
          <ul>
            <li>Todo</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="status">
            <h3>Stagiaire en développement backend avec implémentation de tests d&apos;intégration (PHPUnit)</h3>
            <Done/>
          </div>
          <p>UBICENTREX, avril 2023 à juin 2023</p>
          <ul>
            <li>Réalisation d&apos;une trentaine de tests d&apos;intégration entièrement configurables</li>
            <li>Collaboration avec l&apos;équipe de développement pour identifier les scénarios de tests</li>
            <li>Mise en place d&apos;une automatisation des tests via GitLab CI</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="status">
            <h3>Hôte de caisse (étudiant)</h3>
            <Done/>
          </div>
          <p>E.LECLERC, avril 2022 à septembre 2023</p>
          <ul>
            <li>Manipulation du logiciel de caisse afin d&apos;encaisser, d&apos;ajouter des réductions et d&apos;annuler de potentielles erreurs</li>
            <li>Amélioration de la relation client</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
