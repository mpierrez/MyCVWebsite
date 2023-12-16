import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from "react-bootstrap-icons";
import '../css/Header.css';
import profileImage from '../img/photo.jpg';

const phrases = [
  "  Mathys PIERREZ",
  "  développeur passionné",
  "  créatif et curieux",
  "  toujours à la recherche de nouveaux défis",
  "  passionné par les technologies émergentes"
];

function Header() {
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const typingEffect = () => {
      if (currentIndex === currentPhrase.length-1) {
        clearInterval(timer);
        setTimeout(deleteEffect, 2000);
      } else {
        setText((prevText) => prevText + currentPhrase[currentIndex]);
        currentIndex++;
      }
    };

    const deleteEffect = () => {
      while (currentIndex !== 0) {
        setText((prevText) => prevText.slice(0, -1));
        currentIndex--;
      }
    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    timer = setInterval(typingEffect, 100);

    };

    timer = setInterval(typingEffect, 100);

    return () => clearInterval(timer);
  }, [currentPhrase, currentPhraseIndex]);

  useEffect(() => {
    setText('');
  }, [currentPhraseIndex]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="profile-image">
            <img src={profileImage} alt="Ma photo de profil" />
          </div>
          <div className="text-content">
            <h1>Je suis <span className="typing-text">{text}</span></h1>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/mathys.pierrez.5"><Facebook/></a>
            <a href="https://twitter.com/MonsterKiid_"><Twitter/></a>
            <a href="https://www.instagram.com/mathys_pi"><Instagram/></a>
            <a href="https://www.linkedin.com/in/mathys-pierrez-b51b4b258"><Linkedin/></a>
            <a href="https://github.com/mpierrez"><Github/></a>
            <a href="https://gitlab.unistra.fr/m.pierrez"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gitlab" viewBox="0 0 16 16">
              <path d="m15.734 6.1-.022-.058L13.534.358a.568.568 0 0 0-.563-.356.583.583 0 0 0-.328.122.582.582 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.673.673 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.046 4.046 0 0 0 1.34-4.668Z"/>
            </svg></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
