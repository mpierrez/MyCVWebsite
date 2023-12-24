import Done from './Done';
import Progress from './Progress';
import '../App.css';

function Education() {
  return (
    <section className="education">
      <div className="container">
        <h2>Dîplomes et formations</h2>
        <div className="education-item">
          <div className='status'>
            <h3>BUT Informatique</h3>
            <Progress/>
          </div>
          <p>IUT Robert Schuman, depuis septembre 2021</p>
          <p>1ère année et 2ème années validées, diplôme en cours d&apos;acquisition</p>
        </div>
        <div className="education-item">
          <div className='status'>
            <h3>Baccalauréat général</h3>
            <Done/>
          </div>
          <p>Lycée André Maurois, 2021</p>
          <p>Passé avec les spécialités Mathématiques et Physique-Chimie</p>
          <p>Obtention avec mention &quot;Bien&quot;</p>
        </div>
        <div className="education-item">
          <div className='status'>
            <h3>Brevet des collèges</h3>
            <Done/>
          </div>
          <p>Collège André Maurois, 2018</p>
          <p>Obtention avec mention &quot;Très bien&quot;</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
