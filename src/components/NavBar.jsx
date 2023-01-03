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
          <List>Works</List>
          <List>Services</List>
          <List>About me</List>
        </UoList>
      </NavLinkContainer>
      <NavButtonContainer>
        <ContactButton>Let's Talk</ContactButton>
      </NavButtonContainer>
    </>
  );
};

export default NavBar;
