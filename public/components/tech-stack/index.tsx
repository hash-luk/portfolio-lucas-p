import * as S from "./styles";
import Image from "next/image";
import { MutableRefObject, useRef, useEffect } from "react";
import ReactIcon from "../../../public/assets/icons/react.png";
import SassIcon from "../../../public/assets/icons/sass.png";
import JSIcon from "../../../public/assets/icons/js.png";
import TSIcon from "../../../public/assets/icons/ts.png";
import NPMIcon from "../../../public/assets/icons/npm.png";
import CSSIcon from "../../../public/assets/icons/css3.png";
import HTMLIcon from "../../../public/assets/icons/html.png";
import GitHubIcon from "../../../public/assets/icons/github.png";
import GitIcon from "../../../public/assets/icons/git.png";
import ApiIcon from "../../../public/assets/icons/api.png";
import BootStrapIcon from "../../../public/assets/icons/bootstrap.png";
import AngularIcon from "../../../public/assets/icons/angular.png";

const TechStack = () => {
  const titleAnimation = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
  };

  return (
    <S.Container id="techstack">
      <S.Title
        variants={titleAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        TEC<span>H</span> STAC<span>K</span>
      </S.Title>
      <div id="icons-container">
        <S.IconRow initial={{y: -100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1,bouce:0.2,delay:0.2}} viewport={{once:true}}>
          <Image src={HTMLIcon} alt="" className="icon left" />
          <Image src={CSSIcon} alt="" className="icon  middle" />
          <Image src={JSIcon} alt="" className="icon right" />
        </S.IconRow>
        <S.IconRow  initial={{y: -100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1,bouce:0.2,delay:0.4}} viewport={{once:true}}>
          <Image src={TSIcon} alt="" className="icon left" />
          <Image src={ReactIcon} alt="" className="icon middle" />
          <Image src={GitHubIcon} alt="" className="icon right" />
        </S.IconRow>
        <S.IconRow  initial={{y: -100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1,bouce:0.2,delay:0.6}} viewport={{once:true}}>
          <Image src={AngularIcon} alt="" className="icon left" />
          <Image src={SassIcon} alt="" className="icon middle" />
          <Image src={GitIcon} alt="" className="icon right" />
        </S.IconRow>
        <S.IconRow initial={{y: -100, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:1,bouce:0.2,delay:0.8}} viewport={{once:true}}>
          <Image src={NPMIcon} alt="" className="icon left" />
          <Image src={BootStrapIcon} alt="" className="icon middle" />
          <Image src={ApiIcon} alt="" className="icon right" />
        </S.IconRow>
      </div>
    </S.Container>
  );
};

export default TechStack;
