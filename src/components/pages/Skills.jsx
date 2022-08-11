import React from "react";
import "../../App.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
const Skills = () => {
  return (
    <div id="skillsPage" className="skillsPage">
      <div>
        <AiFillHtml5 color="orange"  />
      </div>
      <div>
        <DiCss3 color="lightblue" />
      </div>
      <div>
        <DiJavascript1 color="orangered" />
      </div>
      <div>
        <DiReact color="skyblue" />
      </div>
      <div>
        <SiRedux color="#764abc" />
      </div>
      <div>
        <SiChakraui color="#6fcad0" />
      </div>
    </div>
  );
};

export default Skills;
