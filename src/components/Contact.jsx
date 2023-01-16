import React from "react";
import { Title } from "../elements/BodyElements";
import {
  ContactDetails,
  ContactDetailsItem,
  InnerContainer,
} from "../elements/ContactElements";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <InnerContainer>
        <Title>
          Contact <hr style={{ width: "50%" }} />{" "}
        </Title>
        <ContactDetails>
          <ContactDetailsItem>
            <CallIcon />
            <div> 0766194332 </div>
          </ContactDetailsItem>
          <ContactDetailsItem>
            <EmailIcon />
            <div> ninthu1999@gmail.com </div>
          </ContactDetailsItem>
          <ContactDetailsItem>
            <HomeIcon />
            <div> No 2/8/8 Seaview Residencies, Lunawa </div>
          </ContactDetailsItem>
        </ContactDetails>
      </InnerContainer>
    </>
  );
};

export default Contact;
