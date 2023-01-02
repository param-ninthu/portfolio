import React from "react";
import {
  BodyContainer,
  ContactButton,
  List,
  Logo,
  NavButtonContainer,
  NavContainer,
  NavLinkContainer,
  UoList,
} from "./homePageElements";

const Home = () => {
  return (
    <>
      <BodyContainer>
        <NavContainer>
          <Logo>choosen</Logo>
          <NavLinkContainer>
            <UoList>
              <List>Home</List>
              <List>Works</List>
              <List>Services</List>
              <List>About me</List>
            </UoList>
          </NavLinkContainer>
          <NavButtonContainer>
            <ContactButton>Button</ContactButton>
          </NavButtonContainer>
        </NavContainer>
      </BodyContainer>
    </>
  );
};

export default Home;
