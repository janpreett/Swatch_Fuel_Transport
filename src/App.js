// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import './index.css';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <ContactUs onPrivacyPolicyClick={togglePrivacyPolicy} />
      <Footer onPrivacyPolicyClick={togglePrivacyPolicy} />
      {showPrivacyPolicy && <PrivacyPolicy onClose={togglePrivacyPolicy} />}
    </div>
  );
}

export default App;