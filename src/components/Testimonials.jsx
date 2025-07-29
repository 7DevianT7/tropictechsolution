import React from 'react';
import './Testimonials.css';
import boris from '../assets/boris.png';
import jovo from '../assets/jovo.png';
import bojan from '../assets/bojan.png';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src={boris} alt="Boris Keser" className="testimonial-img" />
          <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
          <h4>Boris Keser</h4>
          <span>Wright Co.</span>
        </div>
        <div className="testimonial-card">
          <img src={jovo} alt="Jovo Risovic" className="testimonial-img" />
          <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
          <h4>Jovo Risovic</h4>
          <span>Financial</span>
        </div>
        <div className="testimonial-card">
          <img src={bojan} alt="Bojan Vukojevic" className="testimonial-img" />
          <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
          <h4>Bojan Vukojevic</h4>
          <span>Express</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;