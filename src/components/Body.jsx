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
  Tlist,
} from "../elements/BodyElements";

import "./../elements/body.css";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";

import AppleWatch from "./../assets/images/AppleWatch.png";
import Macbook from "./../assets/images/Macbook.png";
import ScrewBlue from "./../assets/images/ScrewBlue.png";
import github from "./../assets/Icons/github.png";
import gmail from "./../assets/Icons/gmail.png";
import linkedin from "./../assets/Icons/linkedin.png";

const Item = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 5 }}>
      {!isOpen && (
        <motion.div className="title" layout>
          {" "}
          {props.data.ProjectTitle}{" "}
        </motion.div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0, tabSize: 4 }}
          >
            <div className="row"> {props.data.ProjectTitle}</div>
            <div className="row"> {props.data.Description}</div>
            <div className="row"> {props.data.GithubLink}</div>
            <div className="row">
              {" "}
              <Tlist $mode="frontEnd">{props.data.FrontEnd}</Tlist>
              <Tlist $mode="backEndEngine">{props.data.BackEndEngine}</Tlist>
              <Tlist $mode="backEnd">{props.data.BackEnd}</Tlist>
              <Tlist $mode="database">{props.data.Database}</Tlist>{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const MContent = (props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row"> props.ProjectTitle</div>
    </motion.div>
  );
};

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
            <motion.ul layout initial={{ borderRadius: 5 }}>
              {projectDetails.map((details) => (
                <Item data={details} />
              ))}
            </motion.ul>
          </AnimateSharedLayout>
        </ProjectsCard>
      </InnerContainer>
    </>
  );
};

export default Body;
