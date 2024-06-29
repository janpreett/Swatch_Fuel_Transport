// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer/>
      {/* Other components and content */}
    </div>
  );
}

export default App;