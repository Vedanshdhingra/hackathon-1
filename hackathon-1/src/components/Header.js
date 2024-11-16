import React from 'react';
import { Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">Logo</div>
            <nav className="main-nav">
              <ul className="nav-list">
                <li><a href="#" className="nav-link">Latest News</a></li>
                <li><a href="#" className="nav-link">Seasonal Lineup</a></li>
                <li><a href="#" className="nav-link">Features</a></li>
                <li><a href="#" className="nav-link">Quizzes</a></li>
                <li><a href="#" className="nav-link">Guides</a></li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <button className="premium-button">TRY PREMIUM FREE</button>
            <Search className="search-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;