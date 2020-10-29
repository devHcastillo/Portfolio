import React, { Component } from "react";
import me from "../me.jpeg";
export class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="about-title">About</h1>

        <div className="top-about">
          <div className="top-about-item">
            <img
              className="image-about-item"
              alt="item1"
              src="https://www.flaticon.com/svg/static/icons/svg/702/702797.svg"
            />
            <p className="title-about-item">Proactive</p>
            <p className="content-about-item">
              I like to learn about new technologies and programming tools
            </p>
          </div>

          <div className="top-about-item">
            <img
              className="image-about-item"
              alt="item2"
              src="https://www.flaticon.com/svg/static/icons/svg/3588/3588668.svg"
            />
            <p className="title-about-item">Teamwork</p>
            <p className="content-about-item">
              Ability to work in a team and improve communications
            </p>
          </div>
          <div className="top-about-item">
            <img
              className="image-about-item"
              alt="item3"
              src="https://www.flaticon.com/svg/static/icons/svg/3588/3588540.svg"
            />
            <p className="title-about-item">Responsible </p>
            <p className="content-about-item">
              I like to finish everything on time as organized
            </p>
          </div>
          <div className="top-about-item">
            <img
              className="image-about-item"
              alt="item4"
              src="https://www.flaticon.com/svg/static/icons/svg/3534/3534155.svg"
            />
            <p className="title-about-item">Flexible</p>
            <p className="content-about-item">
              I adapt quickly to new changes and challenges
            </p>
          </div>
        </div>

        <div className="container-about">
          <div className="test-div-left">
            <img className="imageme-about-picture" alt="me" src={me} />
            <p className="title-imageme">Who's this guy?</p>
            <p className="imageme-about">
              I'm a Jr. Full-Stack Developer from David, Chiriqui.{" "}
            </p>
            <p className="imageme-about">
              I consider myself a person who loves the world of software
              development, I like to learn and implement all kinds of
              technologies.
            </p>
            <p className="imageme-about">
              <a
                className="a-color-hithub"
                href="https://github.com/devHcastillo"
                target="_blank"
                rel="noreferrer"
                alt="GitHub Profile"
              >
                Check my projects in Github
              </a>
            </p>
          </div>
          <div className="test-div-right">
            <p className="margin-skills">HTML</p>
            <div class="container ">
              <div class="skills html">85%</div>
            </div>
            <p>CSS</p>
            <div class="container">
              <div class="skills css">50%</div>
            </div>
            <p>JavaScript</p>
            <div class="container">
              <div class="skills js">70%</div>
            </div>
            <p>React</p>
            <div class="container">
              <div class="skills react">62%</div>
            </div>
            <p>Node.js</p>
            <div class="container">
              <div class="skills node">60%</div>
            </div>
            <p>PHP</p>
            <div class="container">
              <div class="skills php">35%</div>
            </div>
            <p>Laravel</p>
            <div class="container">
              <div class="skills laravel">45%</div>
            </div>
            <p>Java</p>
            <div class="container">
              <div class="skills java">60%</div>
            </div>
            <p>Flutter</p>
            <div class="container">
              <div class="skills flutter">20%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
