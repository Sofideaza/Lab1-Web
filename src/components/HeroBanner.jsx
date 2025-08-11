import React from 'react';
import './HeroBanner.css';
import { heroContent } from '../data';

const HeroBanner = () => {
  return (
    <section className="hero">
      {heroContent.map((item, index) => (
        <div key={index} className="hero-promo">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button className="cta-button">{item.buttonText}</button>
        </div>
      ))}
    </section>
  );
};

export default HeroBanner;