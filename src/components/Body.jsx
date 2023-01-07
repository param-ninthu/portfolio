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
  ProjectsCard,
  Title,
  Card,
  Heading,
  SubCard,
} from "../elements/BodyElements";

import "./../elements/body.css";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import AppleWatch from "./../assets/images/AppleWatch.png";
import Macbook from "./../assets/images/Macbook.png";
import ScrewBlue from "./../assets/images/ScrewBlue.png";
import github from "./../assets/Icons/github.png";
import gmail from "./../assets/Icons/gmail.png";
import linkedin from "./../assets/Icons/linkedin.png";

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 5 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <MContent />}</AnimatePresence>
    </motion.li>
  );
}

function MContent() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">Romba sangadama irukku makkale</div>
    </motion.div>
  );
}

const items = [0, 1, 2];
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
        <ProjectsCard className="fmotion">
          <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 5, size: 600 }}>
              {items.map((item) => (
                <Item key={item} />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Body;
