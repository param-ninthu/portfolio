import React from "react";
import {
  BodyContainer,
  Logo,
  NavButtonContainer,
  NavContainer,
  NavLinkContainer,
} from "./homePageElements";

const Home = () => {
  return (
    <>
      <BodyContainer>
        <NavContainer>
          <Logo>choosen</Logo>
          <NavLinkContainer>Navlinks</NavLinkContainer>
          <NavButtonContainer>Button</NavButtonContainer>
        </NavContainer>
      </BodyContainer>
    </>
  );
};

export default Home;
