import * as S from "./styles";
import { Title } from "../tech-stack/styles";
import Image from "next/image";
import spiderProjectImage from "./projects/spider.png";
import moveItProjectImage from "./projects/move.png";
import naBrasaProjectImage from "./projects/na-brasa.png";
import madeireiraMognoProjectImage from "./projects/madeireira.png";

const Projects = () => {
  return (
    <S.Container>
      <Title>
        PROJETO<span>S</span>
      </Title>
      <S.ProjectsContainer>
        <div className="row">
          <S.PreviewContainer>
            <a href="https://spider-man-home-page.vercel.app">
              <S.Filter />
              <Image
                src={spiderProjectImage}
                alt=""
                width={425}
                height={322}
                objectFit="cover"
                className="img"
              />
            </a>
          </S.PreviewContainer>
          <S.TextContainer>
            <a href="https://spider-man-home-page.vercel.app" className="link">
              <S.ProjectTitle>Spider-Man: Miles Morales</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Uma Landing page desenvolvida com
              HTML,CSS,JavaScript,Jquery,BootStrap e TiltJS. É uma página
              fictícia porém com grandes aprendizados em relação a UX/UI
            </S.ProjectDescription>
          </S.TextContainer>
        </div>
        <div className="row">
          <S.TextContainer>
            <a href="https://madeireira-mogno.vercel.app" className="link">
              <S.ProjectTitle>Madeireira Mogno</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Um site completo desenvolvido em um trabalho de freelancer.
              Utilizando React, TypeScript, NodeMailer, Styled-Components e
              algumas bibliotecas React para estilização
            </S.ProjectDescription>
          </S.TextContainer>
          <S.PreviewContainer>
            <a href="https://madeireira-mogno.vercel.app">
              <S.Filter />
              <Image
                src={madeireiraMognoProjectImage}
                alt=""
                width={425}
                height={322}
                objectFit="cover"
                className="img"
              />
            </a>
          </S.PreviewContainer>
        </div>
        <div className="row">
          <S.PreviewContainer>
            <a href="https://na-brasa.vercel.app">
              <S.Filter />
              <Image
                src={naBrasaProjectImage}
                alt=""
                width={425}
                height={322}
                objectFit="cover"
                className="img"
              />
            </a>
          </S.PreviewContainer>
          <S.TextContainer>
            <a href="https://na-brasa.vercel.app" className="link">
              <S.ProjectTitle>Na Brasa - Churrascaria</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Um site desenvolvido durante um curso realizado na Udemy,
              utilizando HTML, SASS,Jquery, plugins Jquery, BootStrap e
              Font-Awesome. Aprendizado gigantesco em prototipação
            </S.ProjectDescription>
          </S.TextContainer>
        </div>
        <div className="row">
          <S.TextContainer>
            <a href="https://keep-in-action.vercel.app" className="link">
              <S.ProjectTitle>Move.IT</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Uma aplicação desenvolvida durante um evento de programação.
              Utilizando ReactJS,Next,Styled-Components. Dei uma melhorada no
              projeto principal utilizando Firebase para autenticação
            </S.ProjectDescription>
          </S.TextContainer>
          <S.PreviewContainer>
            <a href="https://keep-in-action.vercel.app">
              <S.Filter />
              <Image
                src={moveItProjectImage}
                alt=""
                width={425}
                height={322}
                objectFit="cover"
                className="img"
              />
            </a>
          </S.PreviewContainer>
        </div>
      </S.ProjectsContainer>
    </S.Container>
  );
};

export default Projects;
