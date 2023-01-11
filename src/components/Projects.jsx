import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";
import {
  Heading,
  Image,
  InnerContainer,
  Project,
  ProjectsCard,
} from "../elements/ProjectElements";

import Charity from "./../assets/images/charity.png";
import CharityLogin from "./../assets/images/charitylog.png";

import "./../elements/body.css";
import { Title } from "../elements/BodyElements";

const Projects = () => {
  return (
    <>
      <InnerContainer>
        <Title>Projects</Title>
        <ProjectsCard>
          <Project>
            <div className="image">
              <Image src={CharityLogin} />

              <Image src={Charity} />
            </div>
            <Heading>Click and Share </Heading>
          </Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Projects;
