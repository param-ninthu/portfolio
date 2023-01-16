import React, { useEffect, useState } from "react";
import Body from "../../components/Body";
import NavBar from "../../components/NavBar";
import Projects from "../../components/Projects";
import {
  MainContainer,
  NavContainer,
  BodyContainer,
  ProjectContainer,
  WorkContainer,
  ContactContainer,
} from "../../elements/HomePageElements";

import { animateScroll as scroll } from "react-scroll";
import Work from "../../components/Work";
import Contact from "../../components/Contact";

const Home = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <MainContainer>
        <NavContainer scrollNav={scrollNav}>
          <NavBar />
        </NavContainer>
        <BodyContainer id="home">
          <Body />
        </BodyContainer>
        <WorkContainer id="experiences">
          <Work />
        </WorkContainer>
        <ProjectContainer id="projects">
          <Projects />
        </ProjectContainer>
        <ContactContainer id="contact">
          <Contact />
        </ContactContainer>
      </MainContainer>
    </>
  );
};

export default Home;
