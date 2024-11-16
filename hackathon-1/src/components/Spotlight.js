import React from 'react';
import './Spotlight.css';

const Spotlight = ({ title, tags, author, imageUrl }) => {
  return (
    <div className="spotlight">
      <h2 className="spotlight-header">Spotlight</h2>
      <div className="spotlight-card">
        <div className="spotlight-image"><img src="https://i.pinimg.com/736x/ce/ac/c5/ceacc5ea35020664083612b6f0b0391e.jpg" width="555" height="500"></img></div>
        <div className="spotlight-content">
          <div className="spotlight-tags">
            {tags.map((tag, index) => (
              <span key={index} className="spotlight-tag">{tag}</span>
            ))}
          </div>
          <h3 className="spotlight-title">{title}</h3>
          <p className="spotlight-author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
