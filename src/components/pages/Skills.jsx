import React from "react";
import "../../App.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
const Skills = () => {
  return (
    <div id="skillsPage" className="skillsPage">
      <div className="insideSkills">
        <div data-content="HTML" >
          <AiFillHtml5 color="orange" />
        </div>
        <div data-content="CSS" >
          <DiCss3 color="lightblue" />
        </div>
        <div data-content="JS" >
          <DiJavascript1 color="orangered" />
        </div>
        <div data-content="REACT" >
          <DiReact color="skyblue" />
        </div>
        <div data-content="REDUX" >
          <SiRedux color="#764abc" />
        </div>
        <div data-content="CHAKRA" >
          <SiChakraui color="#6fcad0" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
