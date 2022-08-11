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
        <AiFillHtml5 />
      </div>
      <div>
        <DiCss3 />
      </div>
      <div>
        <DiJavascript1 />
      </div>
      <div>
        <DiReact />
      </div>
      <div>
        <SiRedux />
      </div>
      <div>
        <SiChakraui />
      </div>
    </div>
  );
};

export default Skills;
