import styled from 'styled-components';
import { mdScreen, smScreen } from '../../Global/GlobalStyle';

export const AboutContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.55)),
  url("/about/about-bg.jpg")
  center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  padding: 2rem;
`;

export const AboutCards = styled.div`
  display: grid;
  gap: 2rem 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${smScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AboutCard = styled.div`
  background: ${({ theme }) => theme.colors.bodyColor};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 1rem;

  h4 {
    margin: 1rem 0;
  }
`;

export const AboutCardImage = styled.img`
  width: 270px;
`;