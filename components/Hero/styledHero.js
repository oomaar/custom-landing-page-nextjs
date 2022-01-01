import styled from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)),
  url("/hero-bg.jpg")
  center center / cover no-repeat;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 42%;
    width: 11rem;
    height: 0.25rem;
    border-radius: 1rem;
    background: #a1958d;
  }
`;

export const SubHeading = styled.p`
  margin: 5rem 0;
  font-size: 1.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1.9rem;
  margin: 0 1.5rem;
  text-transform: uppercase;
  color: #fff;
  background: ${({ contact }) => contact ? `#a1958d` : `transparent`};
  border: 1px solid ${({ contact }) => contact ? `transparent` : `#fff`};
  border-radius: 2rem;
  font-size: 1.2rem;
`;