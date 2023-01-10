import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
`;

export const NavContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 7%;
  max-height: 7%;
  padding-top: 5px;
  position: fixed;
  z-index: 1;
  background-color: #22577a;
  opacity: 0.8;
  color: #fff;

  /* border: 1px solid #000; */
`;
export const BodyContainer = styled.section`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
`;

export const ProjectConatiner = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #08ffc8;
`;
