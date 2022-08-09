import React from "react";
import ContactMe from "../ContactMe";

import Home from "../Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Allroutes = () => {
  return (
    <>
      <div>
        <Home />
      </div>
      <div className="scrollSnapChild">
        <Skills />
      </div>
      <div className="scrollSnapChild">
        <Projects />
      </div>
      <div className="scrollSnapChild">
        <ContactMe />
      </div>
    </>
  );
};

export default Allroutes;
