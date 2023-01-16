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
} from "../../elements/HomePageElements";

import { animateScroll as scroll } from "react-scroll";
import Work from "../../components/Work";

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
        <BodyContainer>
          <Body />
        </BodyContainer>
        <WorkContainer>
          <Work />
        </WorkContainer>
        <ProjectContainer>
          <Projects />
        </ProjectContainer>
      </MainContainer>
    </>
  );
};

export default Home;
