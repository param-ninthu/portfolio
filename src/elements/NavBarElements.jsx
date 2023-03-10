import styled from "styled-components";

import { Link as LinkS } from "react-scroll";

export const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
  margin-left: 10px;
  color: #59ce8f !important;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 40%;
  margin-right: 10px;

  @media screen and (max-width: 1024px) {
    margin-right: 0px;

    width: 50%;
  }

  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const NavButtonContainer = styled.div`
  margin-right: 5px;

  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;

// export const NavLinks = styled(LinkS)`
//   color: #59ce8f;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid #01bf71;
//   }
// `;

export const ResumeLink = styled.a`
  height: 40px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #59ce8f;
  border-radius: 5px;
  animation: wiggle 2s linear infinite;
  color: #59ce8f;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: rgba(89, 206, 143, 0.3);
    z-index: 1;
    transition: all ease-in-out 1000ms;
  }

  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%,
    100% {
      transform: rotateZ(0);
    }
  }
`;

export const UoList = styled.ul`
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: right;
  }

  /* @media screen and (max-width: 1024px) {
    padding-right: 40px;
  } */
`;

export const List = styled(LinkS)`
  text-decoration: none;
  cursor: pointer;
  height: fit-content;
  color: #59ce8f !important;

  :hover {
    border-bottom: 1px solid #59ce8f;
    border-width: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    transition: all ease-in-out 250ms;
    font-weight: 600;
    color: #000;
  }
  &.active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0px;

    display: none;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 10px;
  }
`;
