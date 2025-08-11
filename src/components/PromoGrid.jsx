import React from 'react';
import PromoCard from './PromoCard';
import { promotions } from '../data';
import './PromoGrid.css';

const PromoGrid = () => {
  return (
    <section className="promo-grid">
      {promotions.map((promo, index) => (
        <PromoCard
          key={index}
          title={promo.title}
          description={promo.description}
          buttonText={promo.buttonText}
          image={promo.image}
          theme={promo.theme || 'light'}
        />
      ))}
    </section>
  );
};

export default PromoGrid;