import * as S from "./styles";
import { MutableRefObject, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    <S.Container>
      <div
        className="responsive-menu"
        ref={hamburgerMenu}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} inverse id="icon" />
      </div>
      <div className={`content ${isOpen}`} ref={menuContainer}>
        <S.a href="#aboutme" variants={variantsContainer} initial="closed" animate="open" transition={{duration: 2,type: "spring", delay: 0.2}} id="about"> Sobre</S.a>
        <S.a href="#techstack" variants={variantsContainer} initial="closed" animate="open" transition={{duration: 2,type: "spring", delay: 0.4}} id="tech-stack">Tech Stack</S.a>
        <S.a href="#projects" variants={variantsContainer} initial="closed" animate="open" transition={{duration: 2,type: "spring", delay: 0.6}} id="projects-link">Projetos</S.a>
        <S.a href="#contact" variants={variantsContainer} initial="closed" animate="open" transition={{duration: 2,type: "spring", delay: 0.8}} id="contact-link">Contato</S.a>
      </div>
    </S.Container>
  );
};

export default Menu;
