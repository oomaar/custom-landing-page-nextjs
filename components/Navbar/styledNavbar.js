import styled from 'styled-components';

export const Nav = styled.nav`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 15rem;
  background: ${({ active }) => active ? "#000" : "transparent"};
  z-index: 100;

  @media screen and (max-width: 1300px) {
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  font-size: 1.7rem;
`;

export const LinksContainer = styled.div`
  display: ${({ active }) => active ? "flex" : "none"};

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const LinksList = styled.ul`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ListItem = styled.li`
  margin: 0 1rem;

  @media screen and (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin: 1rem 0;
  }
`;

export const Link = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  display: block;
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

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  height: 3px;
  width: 100%;
  background-color: #fff;
  border-radius: 1.3rem;
`;