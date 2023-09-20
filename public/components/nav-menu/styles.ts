import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Nav = styled.nav`
  width: fit-content;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const Title = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: 2.7rem;
  padding: 8px 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
`;

export const a = styled.a`
  padding-left: 5px;
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  transition: all 0.2s ease;
  color: ${(props) => props.theme.colors.baseGrayText};
  border-radius: 8px;
  padding: 8px 16px;
  position: relative;

  ::before {
    content: "";
    height: 2px;
    background-color: ${(props) => props.theme.colors.baseGrayText};
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.2s ease;
    transform: rotate();
  }

  ::after {
    content: "";
    height: 2px;
    background-color: ${(props) => props.theme.colors.baseGrayText};
    width: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 0.2s ease;
  }

  :hover {
    ::before,
    ::after {
      width: 100%;
      background-color: ${(props) => props.theme.colors.white};
    }

    color: ${(props) => props.theme.colors.primaryBlue};
    transform: scale(1.03);
    letter-spacing: 0.2rem;
  }
`;
