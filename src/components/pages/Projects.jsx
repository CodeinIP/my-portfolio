import React from "react";
import "../../App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bewakoof1 from "../images/bewakoof1.png";
import bewakoof2 from "../images/bewakoof2.png";
import bewakoof3 from "../images/bewakoof3.png";
import sportjam1 from "../images/sportjam1.png";
import sportsjam2 from "../images/sportsjam2.png";
import sportsjam3 from "../images/sportsjam3.png";
import { FaGithub } from "react-icons/fa";
import { Button, Heading } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { GiLinkedRings } from "react-icons/gi";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { SiVercel,SiNetlify } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
const Projects = () => {
  return (
    <div id="projectsPage" className="projectsPage">
      <div className="main">
        <Carousel>
          <div className="carousals">
            <Carousel>
              <div>
                <img src={bewakoof1} alt="" />
              </div>
              <div>
                <img src={bewakoof2} alt="" />
              </div>
              <div>
                <img src={bewakoof3} alt="" />
              </div>
            </Carousel>
            <div className="projectDescription">
              <Heading size="md">Bewakoof clone</Heading>
              <Heading size="sm" mt="1rem" color="gray">
                Tech Stack Used
              </Heading>
              <div className="techStack">
                <div>
                  <DiReact color="skyblue" />
                </div>
                <div>
                  <SiRedux color="#764abc" />
                </div>
                <div>
                  <SiChakraui color="lightblue" />
                </div>
              </div>
              <div className="links">
                <a
                  href="https://github.com/CodeinIP/bewakoof-clone"
                  target="_blank"
                >
                  <Button colorScheme="green" m="2" variant="outline">
                    GitHub
                    <FaGithub />
                  </Button>
                </a>
                <a href="https://bewakoof-project.vercel.app/" target="_blank">
                  <Button colorScheme="blue" m="2" variant="outline">
                    Link
                    <SiVercel />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="carousals">
            <Carousel>
              <div>
                <img src={sportjam1} alt="SportsJam1" />
              </div>
              <div>
                <img src={sportsjam2} alt="SportsJam2" />
              </div>
              <div>
                <img src={sportsjam3} alt="SportsJam3" />
              </div>
            </Carousel>
            <div className="projectDescription">
              <Heading size="md">SportsJam clone</Heading>
              <Heading size="sm" mt="1rem" color="gray">
                Tech Stack Used
              </Heading>
              <div className="techStack">
                <div>
                  <AiFillHtml5 color="orange" />
                </div>
                <div>
                  <DiCss3 color="blue" />
                </div>
                <div>
                  <DiJavascript1 />
                </div>
              </div>
              <div className="links">
                <a
                  href="https://github.com/CodeinIP/U3_sportsman_clone"
                  target="_blank"
                >
                  <Button colorScheme="green" m="2" variant="outline">
                    GitHub
                    <FaGithub />
                  </Button>
                </a>
                <a href="https://resonant-fudge-022d00.netlify.app/" target="_blank">
                  <Button colorScheme="blue" m="2" variant="outline">
                    Link
                    <SiNetlify/>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
