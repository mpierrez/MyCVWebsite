import React from 'react';
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
            <h3>Développeur back-end</h3>
            <Progress/>
          </div>
          <p>CUSTY, août 2023 à septembre 2024</p>
          <ul>
            <li>Todo</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="status">
            <h3>Stage: Mise en place de tests d'intégration automatisés</h3>
            <Done/>
          </div>
          <p>UBICENTREX, avril 2023 à juin 2023</p>
          <ul>
            <li>Réalisation d'une trentaine de tests d'intégration entièrement configurables</li>
            <li>Collaboration avec l'équipe de développement pour identifier les scénarios de tests</li>
            <li>Mise en place d'une automatisation des tests via GitLab CI</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="status">
            <h3>Hôte de caisse (étudiant)</h3>
            <Progress/>
          </div>
          <p>E.LECLERC, depuis avril 2022</p>
          <ul>
            <li>Manipulation du logiciel de caisse afin d'encaisser, d'ajouter des réductions et d'annuler de potentielles erreurs</li>
            <li>Amélioration de la relation client</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
