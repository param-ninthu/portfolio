import styled from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 75%;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ContactDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ContactIcon = styled.img`
  height: 30px;
  width: 30px;
`;
