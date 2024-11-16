import React from 'react';
import './Card.css';

const Card = ({ type, title, author, imageUrl }) => {
  return (
    <div className="news-card">
      <div className="card-image-container">
        <div className="card-image" style={{ backgroundColor: '#2a2a2a' }}>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e461415-cff4-49a9-9589-baed37615a07/dem79n0-40465b73-413f-4788-b7da-19b7f95a618a.jpg/v1/fit/w_800,h_1280,q_70,strp/anime_ninja_fanart_by_gb6162249_dem79n0-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzNlNDYxNDE1LWNmZjQtNDlhOS05NTg5LWJhZWQzNzYxNWEwN1wvZGVtNzluMC00MDQ2NWI3My00MTNmLTQ3ODgtYjdkYS0xOWI3Zjk1YTYxOGEuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.VmyxcwTADNBA7MjAURUYHW0Q6KW8ZRZvad2ydTEZIHk" height="400" width="360"></img>
        </div>
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