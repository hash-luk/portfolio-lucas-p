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
      ball.current.style.left = `${Math.random() * 100}vw`;
      ball.current.style.top = `${Math.random() * 100}%`;
      ball.current.style.gap = `${Math.random() * 30}%`;
    });
  });

  return (
    <S.Container id="aboutme">
      <div className="shape"></div>

      <div className="profilePhoto">
        <Image src={profilePhoto} alt="profilePhoto" width={310} height={310} />
      </div>
      <div className="content-text">
        <h2>Sobre</h2>
        <p>
          <span><b>Oi, sou o Lucas Patrick!</b></span><br /> Desenvolvedor front-end localizado em Belo
          Horizonte/MG. Desde criança sempre fui apaixonado por design e
          tecnologia então desde 2018 decidi investir na área. Iniciei os
          aprendizados em HTML e CSS, posteriormente aprendendo JavaScript. Atualmente cursando análise e desenvolvimento de sistemas, tenho maior experiência em desenvolvimento de aplicações utilizando React e Angular, mas estou iniciando os estudos em Vue.
          Sou focado, disciplinado e adoro adquirir e passar experiências
        </p>
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
