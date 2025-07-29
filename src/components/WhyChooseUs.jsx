import React from 'react';
import './WhyChooseUs.css';
import bgImage from '../assets/why-bg.png';
import { FaGlobe, FaClipboardList, FaDesktop } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div>
     
      <section className="why-cards">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features">
          <div className="feature-box">
            <FaGlobe className="feature-icon" />
            <h3>We are global.</h3>
            <p>No matter where you are, we've got you covered.</p>
          </div>
          <div className="feature-box">
            <FaClipboardList className="feature-icon" />
            <h3>We value our clients.</h3>
            <p>Virtual assistance. Talk to us about any concerns, 24/7.</p>
          </div>
          <div className="feature-box">
            <FaDesktop className="feature-icon" />
            <h3>We use top-rate systems.</h3>
            <p>Easy peasy UI. Our interface is simple and easy to use.</p>
          </div>
        </div>
      </section>

   
      <section
        className="why-quote"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay">
          <div className="quote">
            <p>
              Grab the reader's attention with a descriptive line that hypes your event,
              product or service. A short and relevant quote works, too!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
