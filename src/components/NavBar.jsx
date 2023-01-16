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
          <List
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Home
          </List>
          <List
            to="experiences"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Experience
          </List>
          <List
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </List>
          <List
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </List>
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
