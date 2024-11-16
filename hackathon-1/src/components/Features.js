import React from "react";
import Card from "./Card";

function FeaturesColumn() {
  const features = [
    {
      title: "Anime Trivia",
      date: "Nov 16, 2024",
      description: "Test your knowledge about anime!",
      image: "https://via.placeholder.com/300x150",
    },
    {
      title: "Seasonal Lineup",
      date: "Nov 15, 2024",
      description: "Discover the hottest anime this season.",
      image: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <div>
      <h2>Features</h2>
      {features.map((feature, index) => (
        <Card key={index} {...feature} />
      ))}
    </div>
  );
}

export default FeaturesColumn;
