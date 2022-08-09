import React from "react";

import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  HStack,
  Show,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDeezer,
} from "react-icons/fa";
import { NavHashLink as NavLink } from "react-router-hash-link";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack
      p="0.5rem 1rem"
      position="sticky"
      top="0"
      background="gray"
      mb="1rem"
    >
      <Flex flex="1" justify="flex-start" align="center">
        <Heading ml="8" fontWeight="semibold" color="cyan.400">
          <Flex align="baseline">
            IP
            <FaDeezer />
          </Flex>
        </Heading>
      </Flex>
      {/* <Spacer/> */}
      <Show above="md">
        <Flex flex="1" justify="space-evenly" align="center">
          <NavLink to="#homePage">Home</NavLink>
          <NavLink to="#skillsPage">Skills</NavLink>
          <NavLink to="#projectsPage">Projects</NavLink>
          <NavLink to="#contactPage">Contact Me</NavLink>
        </Flex>
      </Show>
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
