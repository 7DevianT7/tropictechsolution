import React from 'react';
import './ContactUs.css';
import contactImg from '../assets/contact.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-left">
        <h2>Let's work together!</h2>
        <p className="subtitle">Book a free consultation.</p>
        <button className="contact-btn">contact us</button>

        <div className="contact-info">
          <div className="contact-block">
            <h4>PHONE</h4>
            <p>225-883</p>
          </div>

          <div className="contact-block">
            <h4>EMAIL</h4>
            <p>hello@tropic.com</p>
          </div>

          <div className="contact-block">
            <h4>SOCIAL</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <img src={contactImg} alt="Contact visual" />
      </div>
    </section>
  );
};

export default ContactUs;
