import React from "react";
import { Heading, InnnerContainer, SubHeading } from "../elements/WorkElements";

const Work = () => {
  return (
    <>
      <InnnerContainer>
        <Heading> Where I've Worked</Heading>
        <SubHeading>
          {" "}
          Software Engineer Intern @{" "}
          <span style={{ color: "#59ce8f", cursor: "pointer" }}>
            Effective Solutions{" "}
          </span>
        </SubHeading>
      </InnnerContainer>
    </>
  );
};

export default Work;
