import Navbar from "./components/nav/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import React, { useState } from "react";
import Contact from "./components/contact/Contact";
import ExpensesAnalyzer from "./components/react-projects/ExpensesAnalyzer";

const App = () => {
  const [overlaid, setOverlaid] = useState("fas fa-times");

  const overlay = (status) => {
    setOverlaid(status);
  };

  return (
    <div className="wrapper">
      <Navbar onOverlay={overlay} />
      <Home textStatus={overlaid} />
      <ExpensesAnalyzer />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
