import React from "react";
import "../App.css";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Heading } from "@chakra-ui/react";
const Social = () => {
  return (
    <div id="socialPage" className="social">
      <div>
        <Heading m="1rem" size="1xl">
          Feel free to contact
        </Heading>
      </div>
      <div className="socialIcons">
        <div>
          <a href="https://github.com/Inder-Pal-github" target="_blank" rel="noopener">
            <AiFillGithub color="black" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/punk.379/"
            target="_blank"
            rel="noopener"
          >
            <AiFillInstagram color="#d24b74" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/inder231/"
            target="_blank"
            rel="noopener"
          >
            <AiFillLinkedin color="#0971f1" />
          </a>
        </div>
        <div>
          <AiOutlineWhatsApp color="green" />
          <div className="mobile">+91-82193-19272</div>
        </div>
      </div>
      <div>
        <Heading as="h2" size="sm" m="1rem">
          SUCCESS IS NOT FINAL;
          <br />
          FAILURE IS NOT FATAL;
          <br />
          IT IS THE COURAGE TO CONTINUE
          <br />
          THAT COUNTS.
          <br />
          <span style={{ fontSize: "10px" }}>
            <i>WINSTON S. CHURCHILL</i>
          </span>
        </Heading>
      </div>
    </div>
  );
};

export default Social;
