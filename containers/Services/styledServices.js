import styled from 'styled-components';
import { mdScreen, smScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cards = styled.div`
  margin: 2rem 0;
  display: grid;
  gap: 2.5rem 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: ${mdScreen}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${smScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;