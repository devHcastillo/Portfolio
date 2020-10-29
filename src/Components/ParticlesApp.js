
import Particles from "react-particles-js";
import configParticles from "../config/configParticles";

import React, { Component } from "react";


export default class ParticlesApp extends Component {
    render() {
        return (
            <div className="App" style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute" }}>
              <Particles
                height="100vh"
                width="100vw"
                params={configParticles.particlesConfigNasa}
              />
            </div>
            <header className="App-header">
              <p disa>
                Hello, I'm <span className="color__name">Heraldo Castillo</span>{" "}
                <br></br>
                I'm a Jr. full-stack developer
              </p>
              <a
                id="button-1"
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(".header-navbar").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                href="true"
              >
                Take a look
                <img
                  id="arrow-hover"
                  src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"
                  alt="arrow"
                />
              </a>
            </header>
            </div>
        )
    }
}



