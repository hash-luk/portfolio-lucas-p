import * as S from "./styles";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef,useState } from "react";
import profilePhoto from "../../../public/assets/images/profile-photo.svg";

const AboutMe = () => {
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


  return (
    <S.Container id="aboutme">
      <div className="content">
          <S.Title variants={titleAnimation} initial="hidden" whileInView='visible' viewport={{once:true}}>
            /SOBRE
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
    </S.Container>
  );
};

export default AboutMe;
