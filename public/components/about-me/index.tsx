import * as S from "./styles";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";
import profilePhoto from "../../../public/assets/images/profile-photo.svg";

const AboutMe = () => {
  const ball1 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball2 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball3 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball4 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball5 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball6 = useRef() as MutableRefObject<HTMLDivElement>;

  const balls = [ball1, ball2, ball3, ball4, ball5, ball6];

  useEffect(() => {
    console.log("rodou");
    balls.forEach((ball) => {
      ball.current.style.marginRight = `${Math.random() * 10}%`;
      ball.current.style.marginLeft= `${Math.random() * 10}%`;
      ball.current.style.marginTop = `${Math.random() * 10}%`;
    });
  });

  return (
    <S.Container id="aboutme">
<div className="content">
      <div className="profilePhoto">
        <Image src={profilePhoto} alt="profilePhoto" width={310} height={310} />
      </div>
      <h2>Sobre</h2>
      <div className="content-text">
        <p>
        Sou o Lucas Patrick, desenvolvedor front-end localizado em Belo Horizonte/MG. Desde criança sempre fui apaixonado por design e tecnologia então desde 2018 decidi investir na área. Iniciei os aprendizados em HTML e CSS, posteriormente aprendendo o básico de JavaScript. Atualmente cursando análise e desenvolvimento de sistemas e como principal stack o React, mas sou bastante flexivel quanto a tecnologia e tenho rápido aprendizado. Sou focado, determinado, disciplinado e adoro aprender com as pessoas que possuem mais eperiência . Amo trabalhar em equipe pois acho que é mais incentivante.
        </p>
      </div>
      </div>

      <div className="ball" ref={ball1}></div>
      <div className="ball" ref={ball2}></div>
      <div className="ball" ref={ball3}></div>
      <div className="ball" ref={ball4}></div>
      <div className="ball" ref={ball5}></div>
      <div className="ball" ref={ball6}></div>
    </S.Container>
  );
};

export default AboutMe;
