import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #d9e1e6;
  width: 100%;
  overflow: hidden;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

export const Logo = styled.div`
  font-weight: 900;
  font-size: 2rem;
  margin-left: 5px;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const NavButtonContainer = styled.div`
  margin-right: 5px;
`;

export const ContactButton = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const UoList = styled.ul`
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 100%;
`;

export const List = styled.li`
  text-decoration: none;
`;
