import React from "react";
import { Image1, Image2, Image3 } from "../elements/BodyElements";
import AppleWatch from "./../assets/AppleWatch.png";
import Macbook from "./../assets/Macbook.png";
import ScrewBlue from "./../assets/ScrewBlue.png";
const Body = () => {
  return (
    <>
      <Image1 src={AppleWatch} />
      <Image2 src={Macbook} />
      <Image3 src={ScrewBlue} />
    </>
  );
};

export default Body;
