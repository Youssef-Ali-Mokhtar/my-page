import "./Card.css";
import React from "react";

const Card = (props) => {
  return (
    <a
      target="_blank"
      href={props.github}
      className="item"
      rel="noopener noreferrer"
    >
      <div className="item-overlay">
        <p>{props.title}</p>
      </div>
      <img className="image-container" src={props.image} alt={props.title} />
    </a>
  );
};

export default Card;
