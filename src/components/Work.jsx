import React from "react";
import { Title } from "../elements/BodyElements";
import {
  Description,
  Heading,
  InnnerContainer,
  SubHeading,
  TechList,
  Tlist,
} from "../elements/WorkElements";

const Work = () => {
  return (
    <>
      <InnnerContainer>
        <Title>
          Experience <hr style={{ width: "50%" }} />
        </Title>
        <Heading> Where I've Worked</Heading>
        <SubHeading>
          {" "}
          Software Engineer Intern @{" "}
          <span style={{ color: "#59ce8f", cursor: "pointer" }}>
            Effective Solutions{" "}
          </span>
        </SubHeading>
        <div>
          {" "}
          <span style={{ color: "#59ce8f", cursor: "pointer" }}>
            2022 November - Present{" "}
          </span>{" "}
        </div>
        <Description>
          Route Radar - Tracking management system. Developing a mobile
          application for Fleet management. This mobile application will be used
          for tracking the movements of the vehicles through devices. At the
          beginning I worked on UI development.
        </Description>
        <TechList>
          <Tlist $mode="frontEnd"> Flutter </Tlist>
          <Tlist $mode="database"> MongoDB </Tlist>
        </TechList>
      </InnnerContainer>
    </>
  );
};

export default Work;
