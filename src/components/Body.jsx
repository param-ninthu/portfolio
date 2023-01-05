import React from "react";
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
  ProjectsCard,
  Title,
  Card,
  Heading,
  SubCard,
} from "../elements/BodyElements";

import { motion, useMotionValue, AnimatePresence } from "framer-motion";

import AppleWatch from "./../assets/images/AppleWatch.png";
import Macbook from "./../assets/images/Macbook.png";
import ScrewBlue from "./../assets/images/ScrewBlue.png";
import github from "./../assets/Icons/github.png";
import gmail from "./../assets/Icons/gmail.png";
import linkedin from "./../assets/Icons/linkedin.png";

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
            <Title>I'm Ninthukesan</Title>
            <Content>
              I am a driven individual seeking for an opportunity as a Software
              Engineer where I can polish my skills. Well motivated, smart and
              hardworking undergraduate exploring skills for the growth of the
              organization as well. Much enough experience in the field of
              software development looking forward to develop future career
              prospects.
            </Content>
          </ContentCardContainer>
          <IconsCard>
            <Icons src={gmail} />
            <Icons src={github} />
            <Icons src={linkedin} />
          </IconsCard>
        </ContentCard>
        <ProfileCard>Hello</ProfileCard>
        <ProjectsCard>
          <Card>
            <SubCard>
              <Heading>Hi</Heading>
            </SubCard>
          </Card>
          <Card>
            <SubCard>
              <Heading>Hi</Heading>
            </SubCard>
          </Card>
          <Card>
            <SubCard>
              <Heading>Hi</Heading>
            </SubCard>
          </Card>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Body;
