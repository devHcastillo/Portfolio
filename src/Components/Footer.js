import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/heraldo-castillo-677514184/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icons-footer"
              alt="icon"
              src="https://www.flaticon.com/svg/static/icons/svg/124/124011.svg"
            />
          </a>

          <a
            href="https://github.com/devHcastillo"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icons-footer"
              alt="icon"
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              style={{ "background-color": "transparent" }}
            />
          </a>

          <a
            href="https://www.instagram.com/_stevencastillo/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icons-footer"
              alt="icon"
              src="https://www.flaticon.com/svg/static/icons/svg/124/124032.svg"
            />
          </a>
        </div>
        <p className="footer-author">
          Heraldo Castillo <span className="year-color"> ©2020</span>
        </p>
      </div>
    );
  }
}
