import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const aboutUsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);
  
  return (
    <div className="about-us" id="about" ref={aboutUsRef}>
      <div className="about-us__content">
        <h1 className="about-us__title">About Us</h1>
        <p className="about-us__description">
          GN Electricals is a dedicated team of skilled electricians providing reliable electrical solutions for residential, commercial, and industrial clients. We prioritize safety, efficiency, and reliability in all our services.
        </p>
        <p className="about-us__description">
          With extensive industry experience, we handle projects of any size and complexity, from installations and upgrades to maintenance. Our mission is to deliver innovative electrical solutions that meet your unique needs.
        </p>
        <p className="about-us__description">
          We are committed to building long-term relationships based on trust, integrity, and exceptional service. Your safety and satisfaction are our top priorities.
        </p>
        <p className="about-us__description">
          ESA No. 7015689
        </p>
      </div>
    </div>
  );
};

export default AboutUs;