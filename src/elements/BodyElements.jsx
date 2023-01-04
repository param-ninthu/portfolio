import styled from "styled-components";

export const Image1 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  right: calc(10% - 2rem);
`;

export const Image2 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 5%;
  top: 40%;
`;

export const Image3 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 5%;
  top: 10%;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
`;

export const ProfileCard = styled.div`
  display: flex;

  border: 1px solid #000;
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #000;
`;
