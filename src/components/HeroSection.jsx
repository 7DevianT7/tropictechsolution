import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>IT Solutions<br />that transform<br />your business</h1>
        <button className="learn-more-btn">learn more</button>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Laptop" className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
