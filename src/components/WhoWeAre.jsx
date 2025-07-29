import React from 'react';
import './WhoWeAre.css';
import whoWeAreBg from '../assets/who-We-Are-Bg.png';

const WhoWeAre = () => {
  return (
    <section className="who-we-are" style={{ backgroundImage: `url(${whoWeAreBg})` }}>
      <div className="overlay">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Write a paragraph that talks about your company here. You can talk
            about your company's background, history, mission, vision or
            philosophy. Anything that will introduce your brand's persona to your
            clients. This will help build a connection between you and them, that
            hopefully leads into a working relationship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;