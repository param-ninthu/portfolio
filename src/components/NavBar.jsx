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
} from "../elements/NavBarElements";

const NavBar = () => {
  return (
    <>
      <Logo>choosen</Logo>
      <NavLinkContainer>
        <UoList>
          <List>Home</List>
          <List>Experience</List>
          <List>Projects</List>
          <List>Contact</List>
          <NavButtonContainer>
            <ContactButton>Resume</ContactButton>
          </NavButtonContainer>
        </UoList>
      </NavLinkContainer>
    </>
  );
};

export default NavBar;
