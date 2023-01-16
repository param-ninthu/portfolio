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
            <CallIcon sx={{ fontSize: 30 }} />
            <div style={{ textDecoration: "none", color: "#59ce8f" }}>
              {" "}
              0766194332{" "}
            </div>
          </ContactDetailsItem>
          <ContactDetailsItem>
            <EmailIcon sx={{ fontSize: 30 }} />
            <div>
              <a
                style={{ textDecoration: "none", color: "#59ce8f" }}
                href="mailto:ninthu1999@gmail.com"
              >
                {" "}
                ninthu1999@gmail.com
              </a>{" "}
            </div>
          </ContactDetailsItem>
          <ContactDetailsItem>
            <HomeIcon sx={{ fontSize: 30 }} />
            <div style={{ textDecoration: "none", color: "#59ce8f" }}>
              {" "}
              No 2/8/8, Seaview Residencies, Lunawa.{" "}
            </div>
          </ContactDetailsItem>
        </ContactDetails>
      </InnerContainer>
    </>
  );
};

export default Contact;
