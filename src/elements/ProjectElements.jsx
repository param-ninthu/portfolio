import styled, { css } from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: left;
  height: auto;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 95%;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
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
          @media screen and (max-width: 768px) {
            flex-direction: row;
            gap: 20px;
            justify-content: space-between;
          }
        `;
      case "h":
        return css`
          flex-direction: row;
          align-items: center;
          gap: 50px;
          @media screen and (max-width: 768px) {
            justify-content: left;
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.$align) {
      case "right":
        return css`
          justify-content: left;
        `;
      case "left":
        return css`
          justify-content: right;
        `;
      case "right-right":
        return css`
          align-items: flex-end;
          justify-content: right;
        `;
    }
  }}

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectContentCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 50px;
  row-gap: 10px;
  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          justify-content: left;
          @media screen and (max-width: 768px) {
            justify-content: left;
            width: 100%;
          }
          @media screen and (max-width: 425px) {
            justify-content: left;
            width: 100%;
          }
        `;
      case "right":
        return css`
          justify-content: right;
          @media screen and (max-width: 768px) {
            justify-content: left;
            width: 100%;
          }
          @media screen and (max-width: 425px) {
            justify-content: left;
            width: 100%;
          }
        `;
    }
  }}
`;

export const Image = styled.img`
  ${(props) => {
    switch (props.$mode) {
      case "h":
        return css`
          height: 380px;
          width: 200px;
          border-radius: 5px;
          margin-top: 10px;
        `;
      case "w":
        return css`
          height: 200px;
          width: 400px;
          border-radius: 5px;
          margin-top: 10px;

          @media screen and (max-width: 768px) {
            height: 200px;
            width: 350px;
          }
        `;
    }
  }}
`;

export const Heading = styled.div`
  font-size: 30px;
  font-weight: 600;
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
          @media screen and (max-width: 768px) {
            text-align: left;
          }
        `;
    }
  }}
`;

export const SubHeading = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgba(89, 206, 143, 1);

  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          text-align: left;
        `;
      case "right":
        return css`
          text-align: right;
          @media screen and (max-width: 768px) {
            text-align: left;
          }
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
          @media screen and (max-width: 768px) {
            text-align: left;
          }
        `;
    }
  }}
`;

export const DescritptionCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: rgba(89, 206, 143, 0.5);
  border-radius: 10px;

  ${(props) => {
    switch (props.$mode) {
      case "right":
        return css`
          padding-left: 5px;
        `;
      case "left":
        return css`
          padding-right: 5px;
          @media screen and (max-width: 768px) {
            text-align: left;
            padding-right: 0px;
            padding-left: 5px;
          }
        `;
    }
  }}
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;

  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          justify-content: left;
        `;
      case "right":
        return css`
          justify-content: right;
          @media screen and (max-width: 768px) {
            justify-content: left;
          }
        `;
    }
  }}
`;

export const Actionbutton = styled.div`
  display: flex;
  flex-direction: row;

  ${(props) => {
    switch (props.$mode) {
      case "left":
        return css`
          justify-content: left;
        `;
      case "right":
        return css`
          justify-content: right;
          @media screen and (max-width: 768px) {
            justify-content: left;
          }
        `;
    }
  }}
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
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #59ce8f;
    transition: all 0.2s ease-in-out;
  }
`;
