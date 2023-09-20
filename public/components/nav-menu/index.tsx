import * as S from "./styles";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import { Mooli } from 'next/font/google'


const mooli = Mooli({ weight: "400",style: "normal", subsets: ["latin"] })

export default function Menu() {
  return (
    <S.Header>
      <S.Title className={mooli.className} href="#">
        <Image src={logo} alt="Imagem de logo em fundo preto com a escrita LP em azul claro" width={56}/>
        <h4>lucas p dev</h4>
      </S.Title>
      <S.Nav>
        <S.a href="#aboutme" id="about"> Sobre</S.a>
        <S.a href="#techstack" id="tech-stack">Conhecimentos</S.a>
        <S.a href="#projects" id="projects-link">Projetos</S.a>
        <S.a href="#contact" id="contact-link">Contato</S.a>
      </S.Nav>
    </S.Header>
  );
};
