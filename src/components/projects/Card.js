import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <a target="_blank" href={props.github} className="card" rel="noreferrer">
      <div className="card-overlay">
        <h1>{props.title}</h1>
      </div>
      <img src={props.image} alt={props.title} className="card-image" />
    </a>
  );
};

export default Card;
