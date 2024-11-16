import React from 'react';
import CardGrid from './CardGrid';
import './NewsColumn.css';

const NewsColumn = ({ title, cards }) => {
  return (
    <div className="news-column">
      <h2 className="column-title">{title}</h2>
      <CardGrid cards={cards} />
    </div>
  );
};

export default NewsColumn;
