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
} from "../elements/BodyElements";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import AppleWatch from "./../assets/images/AppleWatch.png";
import Macbook from "./../assets/images/Macbook.png";
import ScrewBlue from "./../assets/images/ScrewBlue.png";
import github from "./../assets/Icons/githubb.png";
import gmail from "./../assets/Icons/gmail.png";
import linkedin from "./../assets/Icons/linkedin.png";

import Pro from "./../assets/images/Profile.jpg";

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
          <IconsCard>
            <Icons src={gmail} />
            <Icons src={github} />
            <Icons src={linkedin} />
          </IconsCard>
        </ContentCard>
        <ProfileCard>
          <Profile src={Pro} />
        </ProfileCard>
        <TechCard className="fmotion"></TechCard>
      </InnerContainer>
    </>
  );
};

export default Body;
