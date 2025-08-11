import React from 'react';
import './PromoCard.css';

const PromoCard = ({ title, description, buttonText, isDark = false }) => {
  return (
    <div className={`promo-card ${isDark ? 'concert-promo' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className={`promo-button ${isDark ? 'light' : ''}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default PromoCard;