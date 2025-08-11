import React from 'react';
import './HeroBanner.css';
import { heroContent } from '../data';

const HeroBanner = () => {
  return (
    <section className="hero-container">
      {heroContent.map((item, index) => (
        <div key={index} className={`hero-banner ${item.imagePosition}`}>
          <div className="hero-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="cta-button">{item.buttonText}</button>
          </div>
          <div className="hero-image">
            <img 
              src={`/src/assets/${item.image}`} 
              alt={item.title}
              className="hero-img"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroBanner;