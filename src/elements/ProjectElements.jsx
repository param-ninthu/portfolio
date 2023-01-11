import styled, { css } from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: center;
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
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  align-items: center;
`;

export const Project = styled.div`
  height: 300px;
  width: 300px;
  background-color: #453c67;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
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

export const LinkButton = styled.div``;
