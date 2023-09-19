import styled from "styled-components";

interface styledProps {
  width?: string,
  padding?: string,
  flexDirection?: string
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Card = styled.div<styledProps>`
  width: ${props => props.width || '100%'};
  max-width: 1140px;
  height: 420px;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.baseGrayText};
  border-radius: 8px;
  padding: ${props => props.padding || '8px 16px'};
  background-color: ${(props) => props.theme.colors.black100};

  .redirect-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 16px 0;

    .link-icon {
      color: ${(props) => props.theme.colors.baseTextColor};
      transition: all .2s ease-in;

      &[data-name='github']:hover {
        color: ${(props) => props.theme.colors.lightGray};
      }

      &[data-name='linkedin']:hover {
        color: ${(props) => props.theme.colors.darkCyan};
      }

      &[data-name='instagram']:hover {
        color: ${(props) => props.theme.colors.darkPink};
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 3.5rem;
  text-align: center;
  color: #dddddd;
  margin-bottom: 1.875rem;
  transition: all 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;

  span {
    color: #303030;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem !important;
  }
`;

export const ContentText = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 16px;

  h4,p {
    font-size: 20px;
    line-height: 22px;
  }

  h4 {
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 1.6rem;
  }

  h4,h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }

  h3,p,span {
    color: ${(props) => props.theme.colors.white};
    font-weight: normal;
  }

  h3 {
    font-size: 32px;
    line-height: 30px;
  }

  span {
    font-size: 1.8rem;
    line-height: 24px;
    color: ${(props) => props.theme.colors.baseGrayText};
  }
`;

export const Text = styled.p`
  max-width: 53rem;
  max-height: 13.188rem;
  color: #f2f2f2;
  font-size: 1.3rem;
  line-height: 24px;
  transition: all 4s ease;
  animation: opacityTransition 10s ease forwards;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    font-size: 1rem;
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    max-width: 90%;
    font-size: 1rem;
    text-align: left;
  }
`;
