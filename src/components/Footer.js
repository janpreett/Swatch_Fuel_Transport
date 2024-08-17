// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ onPrivacyPolicyClick }) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2023 Swatch Fuel Transport. All rights reserved.</p>
        <p>Efficiently transporting fuel across New Jersey to fuel your success.</p>
        <p>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            onPrivacyPolicyClick();
          }}>Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;