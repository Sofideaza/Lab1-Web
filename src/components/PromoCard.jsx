import React from 'react';
import './PromoCard.css';

const PromoCard = ({ title, description, buttonText, image, theme = 'light' }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none'; 
    console.error(`Error loading image: ${image}`);
  };

  return (
    <div className={`promo-card ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="promo-image">
        {image && (
          <img 
            src={`/src/assets/${image}`} 
            alt={title}
            onError={handleImageError}
          />
        )}
      </div>
      <div className="promo-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={`promo-button ${theme === 'dark' ? 'light' : ''}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PromoCard;