import * as S from "./styles";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef,useState } from "react";
import profilePhoto from "../../../public/assets/images/profile-photo.svg";

const AboutMe = () => {
  const ball1 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball2 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball3 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball4 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball5 = useRef() as MutableRefObject<HTMLDivElement>;
  const ball6 = useRef() as MutableRefObject<HTMLDivElement>;

  const balls = [ball1, ball2, ball3, ball4, ball5, ball6];

  let titleAnimation = {}
  let textAnimation = {}
  let textBoxAnimation = {}

  useEffect(() => {
    let windowWidth = window.innerWidth < 768;

    if (!windowWidth) {
      titleAnimation = {
        hidden: {
          x: -20,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 2,
            type:'tween',
          }
        }
      },
      textAnimation = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
            stiffness: 100,
          }
        }
      },
      textBoxAnimation = {
        hidden: {
          width: 0,
          backgroundColor: 'transparent',
          border: 'none',
        },
        visible: {
          width: '55rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
    
          transition: {
            duration: 1,
            type:"tween",
            stiffness: 100,
            clamp: false,
          }
        }
      }
    }
  })


  useEffect(() => {
    balls.forEach((ball) => {
      ball.current.style.top = `${Math.random() * 100}vw`;
      ball.current.style.left = `${Math.random() * 100}%`;
      ball.current.style.gap = `${Math.random() * 30}%`;
    });
  });


  return (
    <S.Container id="aboutme">
      <div className="content">
          <S.Title variants={titleAnimation} initial="hidden" whileInView='visible' viewport={{once:true}}>
            SOBR<span>E</span>
          </S.Title>
        <S.ContentText className="content-text" variants={textBoxAnimation} initial="hidden" whileInView='visible' viewport={{once:true}}>
          <S.Text variants={textAnimation} initial="hidden" whileInView='visible'  viewport={{once:true}}>
            Sou o Lucas Patrick, desenvolvedor front-end morando em Belo
            Horizonte/MG. Desde criança sempre fui apaixonado por design e
            tecnologia então desde 2018 decidi investir na área. Iniciei os
            aprendizados em HTML e CSS, posteriormente aprendendo o básico de
            JavaScript. Atualmente cursando análise e desenvolvimento de
            sistemas e como principal tecnologia o React, mas sou bastante flexivel
            quanto a tecnologia e tenho rápido aprendizado. Sou focado,
            determinado, disciplinado e adoro aprender com as pessoas que
            possuem mais eperiência . Amo trabalhar em equipe pois acho que é
            mais incentivante.
          </S.Text>
        </S.ContentText>
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
