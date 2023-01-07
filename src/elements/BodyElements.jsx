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
  grid-template-columns: 20% 50% 30%;
  height: 100%;
  width: 90%;
  margin-top: 20px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  justify-content: space-between;
  gap: 50px;
  align-items: center;
`;

export const Icons = styled.img`
  display: flex;
  width: 32px !important;
  height: 32px !important;
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;
  justify-content: left;
  align-items: center;
`;

export const SubCard = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 5px;
  background-color: #b9c5cd;
`;

export const Heading = styled.h2`
  font-size: 20px;
  background-color: #b9c5cd;
  border-radius: 5px;
`;
