import "./Navbar.css";

import React, { useState } from "react";
const Navbar = (props) => {
  const [click, setClick] = useState(true);

  const menuIconHandler = (event) => {
    setClick(!click);
    props.onOverlay(event.currentTarget.className);
  };
  const closeMobileMenuHandler = () => {
    setClick(true);
    props.onOverlay("fas fa-times");
  };

  return (
    <nav className="nav-bar">
      <div className="menu-icon">
        <i
          className={click ? "fas fa-bars" : "fas fa-times"}
          onClick={menuIconHandler}
        />
      </div>
      <ul className={click ? "nav-list" : "nav-list active"}>
        <li>
          <a
            href="#home-section"
            className="nav-links"
            onClick={closeMobileMenuHandler}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#react-section"
            className="nav-links"
            onClick={closeMobileMenuHandler}
          >
            React
          </a>
        </li>
        <li>
          <a
            href="#projects-section"
            className="nav-links"
            onClick={closeMobileMenuHandler}
          >
            JavaScript
          </a>
        </li>
        <li>
          <a
            href="#contact-section"
            className="nav-links"
            onClick={closeMobileMenuHandler}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
