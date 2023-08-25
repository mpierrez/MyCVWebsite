import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import profileImage from '../img/photo.jpg';

const phrases = [
  "  développeur web passionné",
  "  créatif et curieux",
  "  toujours à la recherche de nouveaux défis",
  "  passionné par les technologies émergentes",
  "  Mathys PIERREZ"
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
        console.log(currentIndex)
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
        </div>
      </div>
    </header>
  );
}

export default Header;
