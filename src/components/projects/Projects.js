import CardsContainer from "./CardsContainer";
import "./Projects.css";
import React from "react";

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h2 className="underline-small">Some Of My Projects</h2>
      <CardsContainer />

      <div className="curve"></div>
    </section>
  );
};

export default Projects;
