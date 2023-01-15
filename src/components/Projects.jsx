import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";
import {
  ButtonContainer,
  Heading,
  Image,
  InnerContainer,
  LinkButton,
  Project,
  ProjectsCard,
  ProjectImageCard,
  ProjectContentCard,
  SubHeading,
  Description,
  TechList,
  Actionbutton,
} from "../elements/ProjectElements";

import GitHubIcon from "@mui/icons-material/GitHub";

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
          <Project $mode="left">
            <ProjectImageCard $mode="w">
              <Image $mode="w" src={Knot} />
              <Image $mode="w" src={KnotProfile} />
            </ProjectImageCard>
            <ProjectContentCard $mode="right">
              <SubHeading $mode="right"> Online wedding planner </SubHeading>
              <Heading $mode="right">Knot</Heading>
              <Description $mode="right">
                Knot is an online wedding planner that helps you plan your
                wedding. It is a web application that helps you to plan your
                wedding by providing you with a checklist of things to do and
                also helps you to find the best vendors for your wedding.
              </Description>
              <TechList>
                <li>React Js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
              </TechList>
              <Actionbutton>
                <LinkButton
                  href="
                  "
                  target="_blank"
                >
                  <GitHubIcon className="" sx={{ fontSize: 30 }} />
                </LinkButton>
              </Actionbutton>
            </ProjectContentCard>
          </Project>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Projects;
