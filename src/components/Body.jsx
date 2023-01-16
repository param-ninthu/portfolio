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

import Pro from "./../assets/images/Profile.jpg";
import { green } from "@mui/material/colors";

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
            <TechIcons $mode="w" src={NodejsI} />
          </TechCard>
          <IconsCard>
            <EmailIcon sx={{ fontSize: 30 }} />
            <GitHubIcon sx={{ fontSize: 30 }} />
            <LinkedInIcon sx={{ fontSize: 30 }} />
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
