import "./App.css";
import React, { useEffect } from "react";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ParticlesApp from "./Components/ParticlesApp";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  //This useEffect is for relocate on #root after refresh
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
    <>
      <ParticlesApp />
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
