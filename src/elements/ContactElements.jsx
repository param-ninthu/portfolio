import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 75%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 95%;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  /* @media screen and (max-width: 426px) {
    justify-content: left;
    align-items: flex-start;
  } */
`;

export const ContactDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /* @media screen and (max-width: 426px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
  } */
`;

export const ContactIcon = styled.img`
  height: 30px;
  width: 30px;
`;
