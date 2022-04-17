import * as S from "./styles";
import { Title } from "../tech-stack/styles";
import Image from "next/image";
import spiderProjectImage from "./projects/spider.png";
import moveItProjectImage from "./projects/move.png";
import naBrasaProjectImage from "./projects/na-brasa.png";
import madeireiraMognoProjectImage from "./projects/madeireira.png";

const Projects = () => {
  const projectsRowAnimation = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
    },
  };

  const projectsLeftAnimationPreview = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const projectsRightAnimationPreview = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <S.Container id="projects">
      <Title>
        PROJETO<span>S</span>
      </Title>
      <S.ProjectsContainer>
        <S.Row
          variants={projectsRowAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <S.PreviewContainer
            variants={projectsLeftAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
          <S.TextContainer
            variants={projectsRightAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href="https://spider-man-home-page.vercel.app" className="link">
              <S.ProjectTitle>Spider-Man: Miles Morales</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Uma Landing page desenvolvida com
              HTML,CSS,JavaScript,Jquery,BootStrap e TiltJS. É uma página
              fictícia porém com grandes aprendizados em relação a UX/UI
            </S.ProjectDescription>
          </S.TextContainer>
        </S.Row>
        <S.Row>
          <S.TextContainer
            variants={projectsLeftAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://madeireira-mogno.vercel.app" className="link">
              <S.ProjectTitle>Madeireira Mogno</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Um site completo desenvolvido em um trabalho de freelancer.
              Utilizando React, TypeScript, NodeMailer, Styled-Components e
              algumas bibliotecas React para estilização
            </S.ProjectDescription>
          </S.TextContainer>
          <S.PreviewContainer
            variants={projectsRightAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
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
        </S.Row>
        <S.Row>
          <S.PreviewContainer
            variants={projectsLeftAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
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
          <S.TextContainer
            variants={projectsRightAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://na-brasa.vercel.app" className="link">
              <S.ProjectTitle>Na Brasa - Churrascaria</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Um site desenvolvido durante um curso realizado na Udemy,
              utilizando HTML, SASS,Jquery, plugins Jquery, BootStrap e
              Font-Awesome. Aprendizado gigantesco em prototipação
            </S.ProjectDescription>
          </S.TextContainer>
        </S.Row>
        <S.Row>
          <S.TextContainer
            variants={projectsLeftAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://keep-in-action.vercel.app" className="link">
              <S.ProjectTitle>Move.IT</S.ProjectTitle>
            </a>
            <S.ProjectDescription>
              Uma aplicação desenvolvida durante um evento de programação.
              Utilizando ReactJS,Next,Styled-Components. Dei uma melhorada no
              projeto principal utilizando Firebase para autenticação
            </S.ProjectDescription>
          </S.TextContainer>
          <S.PreviewContainer
            variants={projectsRightAnimationPreview}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
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
        </S.Row>
      </S.ProjectsContainer>
    </S.Container>
  );
};

export default Projects;
