import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  HStack,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaUserAstronaut,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack
      p="0.5rem 1rem"
      position="sticky"
      zIndex="10"
      top="0"
      background="gray"
      mb="1rem"
    >
      <Flex flex="1" justify="flex-start" align="center">
        <Heading ml="8" fontWeight="semibold" color="cyan.400">
          <Flex align="baseline">
            Inder
            <FaUserAstronaut />
          </Flex>
        </Heading>
      </Flex>
      {/* <Spacer/> */}
      <Show above="md">
        <Flex flex="1" justify="space-evenly" align="center">
          <NavLink to="#aboutPage">About</NavLink>
          <NavLink to="#skillsPage">Skills</NavLink>
          <NavLink to="#projectsPage">Projects</NavLink>
          <NavLink to="#contactPage">Contact Me</NavLink>
        </Flex>
      </Show>
      {/* <Spacer/> */}

      <Flex flex="1" justify="flex-end" align="center">
        <a href="https://github.com/CodeinIP" target="_blank" rel="noopener" >
          <IconButton m="1" icon={<FaGithub />} isRound="true" />
        </a>
        <a href="https://www.linkedin.com/in/inder231/" target="_blank" rel="noopener" >
          <IconButton m="1" icon={<FaLinkedin />} isRound="true" />
        </a>
        <IconButton
          m="1"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <Show below="md">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="options"
              icon={<GiHamburgerMenu />}
              variant="outline"
              bgColor="white"
            />
            <MenuList>
              <MenuItem>
                <NavLink to="#aboutPage">About</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="#skillsPage">Skills</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="#projectsPage">Projects</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="#contactPage">Contact Me</NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </HStack>
  );
}
export default Navbar;
