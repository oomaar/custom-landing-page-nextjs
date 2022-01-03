import styled from 'styled-components';
import { mdScreen, smScreen, transition, xlScreen } from '../../Global/GlobalStyle';

export const Nav = styled.nav`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  transition: ${transition};
  background: ${({ active }) => active ? "#000" : "rgba(0, 0, 0, 0.5)"};

  @media screen and (max-width: ${mdScreen}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
  }

  @media screen and (max-width: ${smScreen}) {
    padding: 1rem 0.5rem;
  }
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.logoFont};
`;

export const LinksContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
    transition: ${transition};
    transform: ${({ active }) => active ? "translateY(0)" : "translateY(-500px)"};
    display: ${({ active }) => active ? "flex" : "none"};
  }
`;

export const LinksList = styled.ul`
  display: flex;

  @media screen and (max-width: ${mdScreen}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  margin: 0 1rem;

  @media screen and (max-width: ${mdScreen}) {
    text-align: center;
    width: 100%;
    margin: 1rem 0;
  }
`;

export const Link = styled.a`
  display: block;
  text-transform: uppercase;
  font-weight: 500;
  transition: ${transition};
  border-bottom: 4px solid transparent;
  padding-bottom: 0.3rem;

  :hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.altColor};
  }
`;

export const ToogleButton = styled.a`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  position: absolute;
  top: 1.6rem;
  right: 2rem;

  @media screen and (max-width: ${mdScreen}) {
    display: flex;
  }
`;

export const Bar = styled.span`
  height: 3px;
  width: 100%;
  background-color: #fff;
  border-radius: 1.3rem;
`;