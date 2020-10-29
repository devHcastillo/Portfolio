import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header-navbar" id="myNavBar">
        <nav className="sticky">
          <ul className="nav__links">
            <li>
              <a
                href="home"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(".App").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(".about").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(".contact-container").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                href="contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(".container-footer").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                href="social-media"
              >
                Social Media
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
