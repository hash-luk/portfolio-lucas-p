import * as S from "./styles";
import { MutableRefObject, useRef, useState, useEffect } from "react";
import { Tilt_Neon } from 'next/font/google';

const titlneon = Tilt_Neon({
  weight: '400',
  subsets: ['latin']
})

const Menu = () => {
  const variantsContainer = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const [isOpen, setIsOpen] = useState("open");
  const [width, setWidth] = useState(1200);
  const hamburgerMenu = useRef() as MutableRefObject<HTMLDivElement>;
  const menuContainer = useRef() as MutableRefObject<HTMLDivElement>;

  function handleClick() {
    if (isOpen === "closed") {
      setIsOpen("open");
    } else {
      setIsOpen("closed");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    setWidth(window.innerWidth);

    if (width <= 613) {
      setIsOpen("closed");
    } else {
      setIsOpen("open");
    }

    return () => {
      removeEventListener("resize", () => {});
    };
  }, [width]);

  return (
    <S.Header>
      <S.NeonTitle className={titlneon.className} href="#">Lucas.dev</S.NeonTitle>
      <S.Nav>
        <S.a href="#aboutme" id="about"> Sobre</S.a>
        <S.a href="#techstack" id="tech-stack">Conhecimentos</S.a>
        <S.a href="#projects" id="projects-link">Projetos</S.a>
        <S.a href="#contact" id="contact-link">Contato</S.a>
      </S.Nav>
    </S.Header>
  );
};

export default Menu;
