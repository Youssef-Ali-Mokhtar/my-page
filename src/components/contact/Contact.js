import "./Contact.css";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const onClickHandler = () => {
    alert("goodnews#2529 copied to clipboard");
  };
  // goodnews#2529
  return (
    <div id="contact-section" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
      </div>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/youssef-ali-mokhtar/"
          target="_blank"
          className="contact-details"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          id="profile-link"
          href="https://github.com/Youssef-Ali-Mokhtar"
          target="_blank"
          className="contact-details"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        {/* <a href="#!!" className="contact-details discord">
          <span>
            <i className="fab fa-discord"></i> Discord
          </span>
        </a> */}
        <CopyToClipboard text={"goodnews#2529"}>
          <div
            id="profile-link"
            className="contact-details"
            onClick={onClickHandler}
          >
            <i className="fab fa-discord"></i> Discord
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Contact;
