import '../App.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Me contacter</h2>
        <p>Si vous avez des questions ou souhaitez discuter d&apos;un projet potentiel, n&apos;hésitez pas à me contacter.</p>
        <p>Vous pouvez m&apos;envoyer un e-mail à <a href="mailto:mathys.pierrez@etu.unistra.fr">mathys.pierrez@etu.unistra.fr</a> ou me téléphoner au <a href="tel:0782479818">07 82 47 98 18</a>.</p>
        {/* Ajoutez ici le formulaire de contact */}
      </div>
    </section>
  );
}

export default Contact;