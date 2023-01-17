import React, { useState } from "react";
import {
  Content,
  ContentCard,
  ContentCardContainer,
  IconsCard,
  Icons,
  Image1,
  Image2,
  Image3,
  InnerContainer,
  ProfileCard,
  Title,
  TechCard,
  Profile,
  TechIcons,
} from "../elements/BodyElements";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import AppleWatch from "./../assets/images/AppleWatch.png";
import Macbook from "./../assets/images/Macbook.png";
import ScrewBlue from "./../assets/images/ScrewBlue.png";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ReactI from "./../assets/Icons/react.png";
import JavaI from "./../assets/Icons/java.png";
import FlutterI from "./../assets/Icons/flutter.png";
import PythonI from "./../assets/Icons/python.png";
import NodejsI from "./../assets/Icons/nodejs.png";
import ASP from "./../assets/Icons/asp.png";

import Pro from "./../assets/images/Profile.jpg";
import { green } from "@mui/material/colors";
import { LinkButton } from "../elements/ProjectElements";

const Body = () => {
  return (
    <>
      <Image1 src={AppleWatch} />
      <Image2 src={Macbook} />
      <Image3 src={ScrewBlue} />
      <InnerContainer>
        <ContentCard>
          <ContentCardContainer>
            <Title>Hi there,</Title>
            <Title>
              I'm{" "}
              <span style={{ color: "#59ce8f", fontSize: "50px" }}>
                {" "}
                Ninthukesan
              </span>
            </Title>
            <Content>
              I am a driven individual seeking for an opportunity as a Software
              Engineer where I can polish my skills. Well motivated, smart and
              hardworking undergraduate exploring skills for the growth of the
              organization as well. Much enough experience in the field of
              software development looking forward to develop future career
              prospects.
            </Content>
          </ContentCardContainer>
          <TechCard>
            <TechIcons src={PythonI} />
            <TechIcons src={JavaI} />
            <TechIcons src={ReactI} />
            <TechIcons src={FlutterI} />
            <TechIcons $mode="w" src={ASP} />
            <TechIcons $mode="w" src={NodejsI} />
          </TechCard>
          <IconsCard>
            <LinkButton href="mailto:ninthu1999@gmail.com" target="_blank">
              <EmailIcon sx={{ fontSize: 30 }} />
            </LinkButton>
            <LinkButton
              href="https://github.com/param-ninthu
                  "
              target="_blank"
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </LinkButton>
            <LinkButton
              href="https://www.linkedin.com/in/ninthu-param-0264b919b/
                  "
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </LinkButton>
          </IconsCard>
        </ContentCard>
        <ProfileCard>
          <Profile src={Pro} />
        </ProfileCard>
      </InnerContainer>
    </>
  );
};

export default Body;
