// src/components/Services.js
import React, { useEffect } from 'react';
import './Services.css';
import dieselImage from '../assets/diesel.jpg'; 
import gasolineImage from '../assets/gasoline.jpg'; 
const Services = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -10% 0px' // Adjust root margin to trigger animations slightly before they enter the viewport
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('services__title') || entry.target.classList.contains('services__subtitle')) {
            entry.target.classList.add('animate-zoom');
          } else if (entry.target.classList.contains('service')) {
            entry.target.classList.add('animate-slide');
          }
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const headerText = document.querySelector('.services__title');
    const subtitle = document.querySelector('.services__subtitle');
    const serviceTiles = document.querySelectorAll('.service');
  
    observer.observe(headerText);
    observer.observe(subtitle);
    serviceTiles.forEach(tile => observer.observe(tile));
  }, []);
  return (
    <section className="services" id="services">
      <h2 className="services__title">OUR SERVICES</h2>
      <p className="services__subtitle">We specialize in efficient fuel logistics across New Jersey.</p>
      <div className="services__container">
        <div className="service">
          <img src={dieselImage} alt="Diesel Transport" className="service__image" />
          <div className="service__content">
            <h3 className="service__title">Diesel Transport</h3>
            <p className="service__description">
              Efficient transport of diesel fuel to ensure your industrial and commercial needs are met reliably.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={gasolineImage} alt="Gasoline Transport" className="service__image" />
          <div className="service__content">
            <h3 className="service__title">Gasoline Transport</h3>
            <p className="service__description">
              Reliable delivery of gasoline to keep your operations running smoothly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;