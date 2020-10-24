import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

import Particles from "react-particles-js";
import configParticles from "./config/configParticles";

function App() {
  // This useEffect is for relocate on #root after refresh
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      200
    );
  }, []);

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
        <p>
          Hello, I'm <span className="color__name">Heraldo Castillo</span>{" "}
          <br></br>
          I'm a Jr. full-stack web developer
        </p>
        <a
          id="button-1"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(".navBar").scrollIntoView({
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

      <div className="navBar">
        <p>nav bar test</p>
      </div>
      <div className="navBar1">
        <p>other test</p>
      </div>
    </div>
  );
}

export default App;
