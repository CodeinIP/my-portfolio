import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import resume from '../components/images/resumePhoto.png'
const Resume = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-evenly" m="5" >
      <Link to="/" ><Button variant="solid" colorScheme="teal" >Go Back</Button></Link>
        <Button variant="outline" >
            <Link to="/files/resume.pdf" target="_blank"  download >Download PDF</Link>
        </Button>
      </Box>
      <Box>
        <Image src={resume} alt="resume image" />
      </Box>
    </Box>
  );
};

export default Resume;
