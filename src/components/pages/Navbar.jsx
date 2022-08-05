import React from "react";

import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDeezer,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack p="0.5rem 1rem">
      <Flex flex="1" justify="flex-start" align="center">
        <Heading ml="8" fontWeight="semibold" color="cyan.400">
          <Flex align="baseline">
            IP
            <FaDeezer />
          </Flex>
        </Heading>
      </Flex>
      {/* <Spacer/> */}
      <Flex flex="1" justify="space-evenly" align="center">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { color: "lightblue", fontWeight: "bold", fontSize: "1.2rem" }
              : { color: "white" }
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { color: "lightblue", fontWeight: "bold", fontSize: "1.2rem" }
              : { color: "white" }
          }
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { color: "lightblue", fontWeight: "bold", fontSize: "1.2rem" }
              : { color: "white" }
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </Flex>
      {/* <Spacer/> */}

      <Flex flex="1" justify="flex-end" align="center">
        <IconButton m="1" icon={<FaGithub />} isRound="true"></IconButton>
        <IconButton m="1" icon={<FaLinkedin />} isRound="true"></IconButton>
        <IconButton m="1" icon={<FaInstagram />} isRound="true"></IconButton>
        <IconButton
          m="1"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </HStack>
  );
}
export default Navbar;
