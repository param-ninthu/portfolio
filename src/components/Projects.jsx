import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";
import {
  ButtonContainer,
  Heading,
  Imageh,
  InnerContainer,
  LinkButton,
  Project,
  ProjectsCard,
  ImageW,
} from "../elements/ProjectElements";

import Charity from "./../assets/images/charity.png";
import CharityLogin from "./../assets/images/charitylog.png";

import Knot from "./../assets/images/Knot.png";
import KnotProfile from "./../assets/images/knotprofile.png";

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
              <ImageW src={Knot} />

              <ImageW src={KnotProfile} />
            </div>
            <Heading>Knot Online Wedding planning </Heading>
            <ButtonContainer>
              <LinkButton $mode="github">GitHub</LinkButton>
              <LinkButton $mode="showmore">ReadMore</LinkButton>
            </ButtonContainer>
          </Project>

          <Project>
            <div className="image">
              <Imageh src={CharityLogin} />

              <Imageh src={Charity} />
            </div>
            <Heading>Click and Share </Heading>
            <ButtonContainer>
              <LinkButton $mode="github">GitHub</LinkButton>
              <LinkButton $mode="showmore">ReadMore</LinkButton>
            </ButtonContainer>
          </Project>
          <Project></Project>
          <Project></Project>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Projects;
