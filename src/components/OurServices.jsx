import React from 'react';
import './OurServices.css';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={service1} alt="Managed IT" className="service-img" />
          <h3>Managed IT Services</h3>
          <p>Reliable infrastructure, maintenance and support to keep your systems running efficiently.</p>
        </div>
        <div className="service-card">
          <img src={service2} alt="IT Security" className="service-img" />
          <h3>IT Security</h3>
          <p>Protect your data and operations with top-notch security solutions tailored to your needs.</p>
        </div>
        <div className="service-card">
          <img src={service3} alt="IT Consulting" className="service-img" />
          <h3>IT Consulting</h3>
          <p>Expert advice and strategic planning to ensure your technology supports your growth.</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;