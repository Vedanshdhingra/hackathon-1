import React from 'react';
import './Card.css';

const Card = ({ type, title, author, imageUrl }) => {
  return (
    <div className="news-card">
      <div className="card-image-container">
        <div className="card-image" style={{ backgroundColor: '#2a2a2a' }}></div>
      </div>
      <div className="card-content">
        <span className="card-type">{type}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
      </div>
    </div>
  );
};

export default Card;