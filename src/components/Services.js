// src/components/Services.js
import React, { useEffect } from 'react';
import './Services.css';
import potlightsImage from '../assets/potlights.jpg'; 
import installPanelsImage from '../assets/install_panels.jpg'; 
import upgradePanelsImage from '../assets/upgrade_panels.jpg'; 
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
      <h2 className="services__title">SERVICES</h2>
      <p className="services__subtitle">We are deeply committed to the growth and success of our clients.</p>
      <div className="services__container">
        <div className="service">
          <img src={potlightsImage} alt="Install Potlights" className="service__image" />
          <div className="service__content">
            <h3 className="service__title">Install Potlights</h3>
            <p className="service__description">
              Our team specializes in the professional installation of high-quality potlights, enhancing the ambiance and functionality of your space with minimal disruption.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={installPanelsImage} alt="Install Panels" className="service__image" />
          <div className="service__content">
            <h3 className="service__title">Install Panels</h3>
            <p className="service__description">
              We provide expert installation of electrical panels, ensuring your home or business has a reliable and efficient power distribution system.
            </p>
          </div>
        </div>
        <div className="service">
          <img src={upgradePanelsImage} alt="Upgrade Panels" className="service__image" />
          <div className="service__content">
            <h3 className="service__title">Upgrade Panels</h3>
            <p className="service__description">
              Upgrade your old electrical panels to modern, safe, and efficient systems that meet current standards and increase your electrical capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;