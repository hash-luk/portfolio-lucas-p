import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from "../styles/404";
import GlobalStyle from "../styles/globalStyles";
import theme from "../styles/theme";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const UnderContruction: NextPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <S.Container>
          <S.NumbersContainer>
            <h1>Em construção!</h1>
          </S.NumbersContainer>
          <S.RightSideContent>
            <h3>Estamos passando por atualizações, novidades em breve!</h3>
            <p>Me acompanhe em outras redes: </p>
            <div className="icons">
                <a href="https://github.com/hash-luk"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                <a href="https://www.linkedin.com/in/lucas-patrick-p/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            </div>
          </S.RightSideContent>
        </S.Container>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default UnderContruction;
