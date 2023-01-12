import styled, { css } from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: center;
  height: 800px;
  background-color: #59ce8f;
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
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  align-items: center;
`;

export const Project = styled.div`
  height: 300px;
  width: 300px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 10px;
  align-items: flex-start;
  background: rgba(6, 44, 48, 0.6);
`;

export const Image = styled.img`
  height: 180px;
  width: 100px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const Heading = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
`;

export const LinkButton = styled.button`
  display: flex;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  border: none;
  ${(props) => {
    switch (props.$mode) {
      case "github":
        return css`
          background-color: rgba(70, 73, 255, 0.2);
          border: 2px solid #4649ff;
          color: #fff;

          :hover {
            border: none;
            color: #fff;
            background-color: #4649ff;
            transition: all ease-in-out 1000ms;
          }
        `;
      case "showmore":
        return css`
          background-color: #6d67e4;
        `;
    }
  }}
`;
