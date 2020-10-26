import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header-navbar" id="myNavBar">
        <nav className="sticky">
          <ul className="nav__links">
            <li>
              <a href="home"
               onClick={(e) => {
              e.preventDefault();
              document.querySelector(".App").scrollIntoView({
                behavior: "smooth",
              });
            }}
              >Home</a>
            </li>
            <li>
              <a href="about" 
              onClick={(e) => {
              e.preventDefault();
              document.querySelector(".about").scrollIntoView({
                behavior: "smooth",
              });
            }}
              >About</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              {" "}
              <a className="btn-contact" href="true">
                <button>Contact </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
