import React from "react";
import Body from "../../components/Body";
import NavBar from "../../components/NavBar";
import {
  MainContainer,
  NavContainer,
  BodyContainer,
} from "../../elements/HomePageElements";

const Home = () => {
  return (
    <>
      <MainContainer>
        <NavContainer>
          <NavBar />
        </NavContainer>
        <BodyContainer>
          <Body />
        </BodyContainer>
      </MainContainer>
    </>
  );
};

export default Home;
