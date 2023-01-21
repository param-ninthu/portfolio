import styled, { css } from "styled-components";

export const InnnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 75%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Heading = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;

export const SubHeading = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin-top: 10px;
`;

export const Description = styled.div`
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  width: 60%;

  @media screen and (max-width: 768px) {
    text-align: justify;
    width: 95%;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  justify-content: left;
`;

export const Tlist = styled.div`
  padding: 3px;
  border-radius: 5px;
  font-weight: 400;
  color: white;
  font-size: 15px;
  ${(props) => {
    switch (props.$mode) {
      case "frontEnd":
        return css`
          background-color: #9c19e0;
        `;
      case "backEndEngine":
        return css`
          background-color: #5c33f6;
        `;
      case "backEnd":
        return css`
          background-color: #12947f;
        `;
      case "database":
        return css`
          background-color: #e41749;
        `;
    }
  }}
`;
