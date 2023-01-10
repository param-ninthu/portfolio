import styled, { css } from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
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
  justify-content: left;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
`;
