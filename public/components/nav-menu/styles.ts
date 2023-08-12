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

export const NeonTitle = styled.a`
  font-size: 2.1rem;
  padding: 8px 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryBlue};
  animation: neon 0.8s ease-in-out infinite alternate;
  text-decoration: none;

  @keyframes neon {
    from {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
        0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
        0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
        0 0 54px rgba(30, 132, 242, 0.92);
    }
    to {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
        0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
        0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
        0 0 60px rgba(30, 132, 242, 1);
    }
  }
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
