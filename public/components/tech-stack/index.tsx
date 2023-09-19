import * as S from "./styles";
import {DiHtml5, DiCss3, DiJsBadge} from "react-icons/di";
import {FiFigma} from "react-icons/fi";
import {FaGitSquare, FaSass, FaReact, FaGithub, FaBootstrap} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStyledcomponents,SiCypress,SiTypescript,SiTailwindcss,SiStorybook } from "react-icons/si";

const TechStack = () => {
  const cardAnimations = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .3,
        type: "spring",
      }
    }
  }

  return (
    <S.Container id="techstack">
      <S.Title>
        Conhecimentos
      </S.Title>
      <S.CardsContainer>
        <S.TechCard title="HTML5" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true, amount: 0.5}}>
          <DiHtml5 size={64} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="CSS3" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <DiCss3 size={64} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="JavaScript" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <DiJsBadge size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="Figma" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <FiFigma size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="git" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <FaGitSquare size={56} color="#00DFFC" className="tech-icon"/>
          <span>Intermediário</span>
        </S.TechCard>
        <S.TechCard title="SASS" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <FaSass size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="ReactJS" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <FaReact size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="NextJS" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <TbBrandNextjs size={56} color="#00DFFC" className="tech-icon"/>
          <span>Intermediário</span>
        </S.TechCard>
        <S.TechCard title="Styled-components" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <SiStyledcomponents size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="Github" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <FaGithub size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
        <S.TechCard title="Cypress" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <SiCypress size={56} color="#00DFFC" className="tech-icon"/>
          <span>Básico</span>
        </S.TechCard>
        <S.TechCard title="Typescript" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <SiTypescript size={56} color="#00DFFC" className="tech-icon"/>
          <span>Intermediário</span>
        </S.TechCard>
        <S.TechCard title="Tailwind" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <SiTailwindcss size={56} color="#00DFFC" className="tech-icon"/>
          <span>Intermediário</span>
        </S.TechCard>
        <S.TechCard title="Tailwind" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <SiStorybook size={56} color="#00DFFC" className="tech-icon"/>
          <span>Básico</span>
        </S.TechCard>
        <S.TechCard title="Bootstrap" initial="hidden" variants={cardAnimations} whileInView="visible" viewport={{once: true}}>
          <FaBootstrap size={56} color="#00DFFC" className="tech-icon"/>
          <span>Avançado</span>
        </S.TechCard>
      </S.CardsContainer>
    </S.Container>
  );
};

export default TechStack;
