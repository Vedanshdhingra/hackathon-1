import React from 'react';
import Header from '../components/Header';
import NewsColumn from '../components/NewsColumn';
import Spotlight from '../components/Spotlight';
import './HomePage.css';

const HomePage = () => {
  const latestNews = [
    {
      type: "News",
      title: "Himitsu no AiPri Anime Confirms Second Season in Production",
      author: "Kara Dennison",
      imageUrl: ""
    },
    // Add more news items
  ];

  const features = [
    {
      type: "Features",
      title: "Cozy Anime Corner: Need a Quick Pick-Me-Up?",
      author: "Kelly Knox",
      imageUrl: ""
    },
    // Add more features
  ];

  const spotlightData = {
    title: "Solo Leveling -ReAwakening- Anime Movie Tickets Now on Sale",
    tags: ["Announcements", "Movies"],
    author: "Joseph Luster",
    imageUrl: ""
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="content-grid">
          <div className="news-section">
            <NewsColumn title="Latest News" cards={latestNews} />
          </div>
          <div className="spotlight-section">
            <Spotlight {...spotlightData} />
          </div>
          <div className="features-section">
            <NewsColumn title="Features" cards={features} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;