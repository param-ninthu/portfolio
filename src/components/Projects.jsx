import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";
import {
  InnerContainer,
  Project,
  ProjectsCard,
} from "../elements/ProjectElements";

import "./../elements/body.css";
import { Title } from "../elements/BodyElements";

const Projects = () => {
  return (
    <>
      <InnerContainer>
        <Title>Projects</Title>
        <ProjectsCard>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Projects;
