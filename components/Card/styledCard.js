import styled from 'styled-components';
import { mdScreen } from "../../Global/GlobalStyle";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.colors.altColor};

  @media screen and (max-width: ${mdScreen}) {
    width: 270px;
    padding: 0.5rem;
  }
`;

export const Icon = styled.div`
  background: #1b2337;
  border-radius: 100%;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSize.logoFont};
`;

export const CardTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 2rem;
  height: 30%;
  font-size: ${({ theme }) => theme.fontSize.cardFont};
`;

export const CardSubtitle = styled.p`
  height: 30%;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.firstColor};
`;