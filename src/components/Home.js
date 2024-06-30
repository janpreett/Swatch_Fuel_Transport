// src/components/Home.js
import React from 'react';
import './Home.css';
import './LightBulb.css';

const Home = () => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="home" id="home">
        <div className="home__content">
            <div className="light-bulb-container">
                <div className="light-bulb"></div>
            </div>
            <h2 className="home__subtitle">Empowering Your Electrical Needs</h2>
            <h1 className="home__title">GN Electricals</h1>
            <p className="home__description">
                At GN Electricals, we provide top-notch electrical services to ensure your home and business are powered safely and efficiently.
            </p>
            <div className="home__buttons">
                <a href="#services" className="home__button home__button--primary" onClick={handleButtonClick}>Learn More</a>
                <a href="#contact" className="home__button home__button--secondary" onClick={handleButtonClick}>Contact Us</a>
            </div>
        </div>
    </section>
);
};
export default Home;