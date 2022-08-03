import "./ExpensesAnalyzer.css";
import React from "react";
import ExpensesProjectContainer from "./ExpensesProjectContainer";

const ExpensesAnalyzer = () => {
  return (
    <section id="react-section" className="react-section">
      <div className="react-title-holder">
        <h2 className="underline-small-react">React Projects</h2>
      </div>
      <ExpensesProjectContainer />
      <div className="upper-curve"></div>
    </section>
  );
};

export default ExpensesAnalyzer;
