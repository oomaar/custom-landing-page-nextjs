import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 350px;
  border-radius: 1rem;
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.altColor};
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
  font-size: ${({ theme }) => theme.fontSize.cardFont};
`;

export const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.firstColor};
`;