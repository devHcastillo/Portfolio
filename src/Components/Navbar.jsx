import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header-navbar">
        {/* <img className="logo-navbar" src="dd" alt="logo" /> */}
        dev-ch
        <nav>
          <ul className="nav__links">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
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
