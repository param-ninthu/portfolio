import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #000;
  width: 100%;
  overflow-y: scroll;
`;

export const NavContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 7%;
  max-height: 7%;
  padding-top: 10px;
  position: sticky;
  z-index: 1;
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};

  @media screen and (max-width: 1024px) {
    padding-right: 40px;
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
  /* border: 1px solid #000; */
`;
export const BodyContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProjectContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const WorkContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #000;
`;
