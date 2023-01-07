import styled from "styled-components";

export const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
  margin-left: 5px;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const NavButtonContainer = styled.div`
  margin-right: 5px;
`;

export const ContactButton = styled.div`
  height: 40px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  animation: wiggle 2s linear infinite;

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
`;

export const List = styled.li`
  text-decoration: none;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid #000;
    border-width: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    transition: all ease-in-out 250ms;
    font-weight: 600;
    color: #000;
  }
`;