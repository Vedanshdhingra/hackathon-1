import React from 'react';
import Card from './Card';
import './CardGrid.css';

const CardGrid = ({ cards, columns = 1 }) => {
  return (
    <div className={`card-grid columns-${columns}`}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;