import '../App.css';

function Footer() {
  let date = new Date()
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {date.getFullYear()} Mathys PIERREZ. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;