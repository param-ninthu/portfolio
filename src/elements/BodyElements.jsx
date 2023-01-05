import styled from "styled-components";

export const Image1 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  right: calc(10% - 2rem);
  display: none;
`;

export const Image2 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 5%;
  top: 40%;
  display: none;
`;

export const Image3 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 5%;
  top: 10%;
  display: none;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  height: 100%;
  width: 80%;
  margin-top: 20px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProfileCard = styled.div`
  display: flex;
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
`;

export const Content = styled.p`
  font-size: 15px;
  font-weight: 200;
`;

export const IconsCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: auto;
  justify-content: space-around;
  align-items: center;
`;

export const Icons = styled.img`
  display: flex;
  width: 32px !important;
  height: 32px !important;
`;
