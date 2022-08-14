import React from "react";
import ContactMe from "../ContactMe";

import Home from "../Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Allroutes = () => {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Allroutes;
