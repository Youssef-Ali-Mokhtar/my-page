import "./CardsContainer.css";
import Card from "./Card";
import React from "react";

const CardsContainer = () => {
  return (
    <div className="grid-container">
      <Card
        github="https://youssef-ali-mokhtar.github.io/Pac-Man/"
        image="https://i.imgur.com/nbuZn7d.png"
        title="Pac-Man"
      />
      <Card
        github="https://youssef-ali-mokhtar.github.io/Breakout-Game/"
        image="https://i.imgur.com/boX4wqm.png"
        title="Breakout"
      />
      <Card
        github="https://youssef-ali-mokhtar.github.io/StackCalculator/"
        image="https://i.imgur.com/oq1EzW6.png"
        title="Stack Calculator"
      />
      <Card
        github="https://youssef-ali-mokhtar.github.io/To-Do-List/"
        image="https://i.imgur.com/V96uJ8o.png"
        title="To-Do List"
      />
      <Card
        github="https://youssef-ali-mokhtar.github.io/Small-Blog/"
        image="https://i.imgur.com/bjAr1AW.png"
        title="Small Blog"
      />
      <Card
        github="https://youssef-ali-mokhtar.github.io/ShareMyLocation/"
        image="https://i.imgur.com/9OkVIec.png"
        title="Share My Location"
      />
    </div>
  );
};

export default CardsContainer;
