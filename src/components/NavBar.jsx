import React from "react";
import {
  BodyContainer,
  ResumeLink,
  List,
  Logo,
  NavButtonContainer,
  NavContainer,
  NavLinkContainer,
  UoList,
} from "../elements/NavBarElements";

import Resume from "./../assets/pdf/Ninthu.pdf";

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
            <ResumeLink href={Resume} target={"_blank"}>
              Resume
            </ResumeLink>
          </NavButtonContainer>
        </UoList>
      </NavLinkContainer>
    </>
  );
};

export default NavBar;
