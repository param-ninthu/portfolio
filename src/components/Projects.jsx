import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import projectDetails from "./../assets/json/projectDetails.json";
import {
  Tlist,
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
  DescritptionCard,
} from "../elements/ProjectElements";

import GitHubIcon from "@mui/icons-material/GitHub";

import Charity from "./../assets/images/charity.png";
import CharityLogin from "./../assets/images/charitylog.png";

import Knot from "./../assets/images/Knot.png";
import KnotProfile from "./../assets/images/knotprofile.png";

import OWMF from "./../assets/images/owmf.png";
import OWM from "./../assets/images/owm.png";

import AdminDash from "./../assets/images/adminDash.png";
import Login from "./../assets/images/login.png";

import "./../elements/body.css";
import { Title } from "../elements/BodyElements";

// create function

const Projects = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const showCard = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 50,
      },
    });
  };

  return (
    <>
      <InnerContainer>
        <Title>
          Projects <hr style={{ width: "50%" }} />
        </Title>
        <ProjectsCard>
          <animated.div onClick={showCard} style={springs}>
            <Project $mode="left">
              <ProjectImageCard $hide="yes" $mode="w" $align="left">
                <Image $mode="w" src={Knot} />
                <Image $hide="yes" $mode="w" src={KnotProfile} />
              </ProjectImageCard>
              <ProjectContentCard $mode="right">
                <SubHeading $mode="right"> Online wedding planner </SubHeading>
                <Heading $mode="right">Knot</Heading>
                <DescritptionCard $mode="left">
                  <Description $mode="right">
                    Knot is an online wedding planner that helps you plan your
                    wedding. It is a web application that helps you to plan your
                    wedding by providing you with a checklist of things to do
                    and also helps you to find the best vendors for your
                    wedding.
                  </Description>
                </DescritptionCard>

                <TechList $mode="right">
                  <Tlist $mode="frontEnd">React JS</Tlist>
                  <Tlist $mode="backEndEngine">Node JS</Tlist>
                  <Tlist $mode="backEnd">Express JS</Tlist>
                  <Tlist $mode="database">PostgreSQL</Tlist>
                  <Tlist $mode="frontEnd">Material UI</Tlist>
                  <Tlist $mode="frontEnd">Tailwind CSS</Tlist>
                </TechList>
                <Actionbutton $mode="right">
                  <LinkButton
                    href="https://github.com/Knot-17
                  "
                    target="_blank"
                  >
                    <GitHubIcon className="" sx={{ fontSize: 30 }} />
                  </LinkButton>
                </Actionbutton>
              </ProjectContentCard>
            </Project>
          </animated.div>
          <Project $mode="right">
            <ProjectImageCard $hide="yes" $mode="h" $align="left">
              <Image $mode="h" src={CharityLogin} />

              <Image $mode="h" src={Charity} />
            </ProjectImageCard>
            <ProjectContentCard $mode="left">
              <SubHeading $mode="left">
                {" "}
                Marketing platform for Charities{" "}
              </SubHeading>
              <Heading $mode="left">Click and Share</Heading>
              <DescritptionCard $mode="right">
                <Description $mode="left">
                  Allow charities to market their own products also they can
                  request for donations from the users. The users can donate to
                  the charities and also they can buy the products from the
                  charities.
                </Description>
              </DescritptionCard>
              <TechList $mode="left">
                <Tlist $mode="frontEnd">React Native</Tlist>
                <Tlist $mode="backEnd">Firebase</Tlist>
                <Tlist $mode="frontEnd">Style Sheet</Tlist>
              </TechList>
              <Actionbutton $mode="left">
                <LinkButton
                  href="https://github.com/param-ninthu/Charity.git
                  "
                  target="_blank"
                >
                  <GitHubIcon className="" sx={{ fontSize: 30 }} />
                </LinkButton>
              </Actionbutton>
            </ProjectContentCard>
          </Project>
          <Project $mode="left">
            <ProjectImageCard $hide="yes" $mode="w" $align="left">
              <Image $hide="yes" $mode="w" src={AdminDash} />
              <Image $mode="w" src={Login} />
            </ProjectImageCard>
            <ProjectContentCard $mode="right">
              <SubHeading $mode="right">
                {" "}
                Online Marketing platform for Farmers{" "}
              </SubHeading>
              <Heading $mode="right">Agrofy</Heading>
              <DescritptionCard $mode="left">
                <Description $mode="right">
                  Providing interfaces to the Business organizations like
                  supermarkets and restaurants to buy the excess yield from
                  farmers. Also providing interfaces to the farmers to sell
                  their excess yield to the business organizations.
                </Description>
              </DescritptionCard>
              <TechList $mode="right">
                <Tlist $mode="frontEnd">HTML</Tlist>
                <Tlist $mode="backEnd">PHP</Tlist>
                <Tlist $mode="database">MySQL</Tlist>
                <Tlist $mode="frontEnd">JavaScript</Tlist>
                <Tlist $mode="frontEnd">CSS</Tlist>
              </TechList>
              <Actionbutton $mode="right">
                <LinkButton
                  href="https://github.com/param-ninthu/Agrofy
                  "
                  target="_blank"
                >
                  <GitHubIcon className="" sx={{ fontSize: 30 }} />
                </LinkButton>
              </Actionbutton>
            </ProjectContentCard>
          </Project>
          <Project $mode="right">
            <ProjectImageCard $hide="yes" $mode="w" $align="right-right">
              <Image $mode="w" src={OWMF} />
              <Image $hide="yes" $mode="w" src={OWM} />
            </ProjectImageCard>
            <ProjectContentCard $mode="left">
              <SubHeading $mode="left">
                {" "}
                Basic Weather map with API integrations{" "}
              </SubHeading>
              <Heading $mode="left">Suggest me Weather</Heading>
              <DescritptionCard $mode="right">
                <Description $mode="left">
                  Learning project inorder to learn the API integrations. So
                  here we are implemented Google cloud API , MapBox API , Open
                  Weathermap API in order to build this system.
                </Description>
              </DescritptionCard>
              <TechList $mode="left">
                <Tlist $mode="frontEnd">HTML</Tlist>
                <Tlist $mode="backEnd">Python</Tlist>
                <Tlist $mode="database">Django</Tlist>
                <Tlist $mode="database">PostgreSQL</Tlist>
                <Tlist $mode="frontEnd">CSS</Tlist>
              </TechList>
              <Actionbutton $mode="left">
                <LinkButton
                  href="https://github.com/param-ninthu/OurGroupProject
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
