import styled, { css } from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: left;
  height: 800px;
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

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Project = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  border: 1px solid #fff;
  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          flex-direction: row;
        `;
      case "right":
        return css`
          flex-direction: row-reverse;
        `;
    }
  }}
`;

export const ProjectImageCard = styled.div`
  display: flex;
  height: 100%;
  width: 50%;

  ${(props) => {
    switch (props.$mode) {
      case "w":
        return css`
          flex-direction: column;
        `;
      case "h":
        return css`
          flex-direction: row;
        `;
    }
  }}
`;

export const ProjectContentCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          justify-content: left;
        `;
      case "right":
        return css`
          justify-content: right;
        `;
    }
  }}
`;

export const Image = styled.img`
  ${(props) => {
    switch (props.$mode) {
      case "h":
        return css`
          height: 300px;
          width: 150px;
          border-radius: 5px;
          margin-top: 10px;
        `;
      case "w":
        return css`
          height: 200px;
          width: 400px;
          border-radius: 5px;
          margin-top: 10px;
        `;
    }
  }}
`;

export const Heading = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  border: 1px solid #fff;
  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          text-align: left;
        `;
      case "right":
        return css`
          text-align: right;
        `;
    }
  }}
`;

export const SubHeading = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          text-align: left;
        `;
      case "right":
        return css`
          text-align: right;
        `;
    }
  }}
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          text-align: left;
        `;
      case "right":
        return css`
          text-align: right;
        `;
    }
  }}
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
  margin-top: 10px;
`;

export const Actionbutton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
`;

export const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 10px;
  margin: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #fff;
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`;
