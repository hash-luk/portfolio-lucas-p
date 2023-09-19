import * as S from "./styles";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import bannerImage from "../../../assets/images/banner-image.svg";

const BannerContent = () => {
  return (
    <S.Container>
      <div className="nameDisplay">
        <S.H1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          Oi, eu sou o <b>Lucas</b>
        </S.H1>
        <S.p
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", duration: 3 }}
        >
          Desenvolvedor <em>full-stack</em>
        </S.p>
        <S.TypeWritterDiv
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <Typewriter
            onInit={(typewriter) =>
              typewriter
                .typeString(
                  "Ajudando você a construir soluções modernas e performáticas, para destacar seu produto no mercado!"
                )
                .pauseFor(4000)
                .start()
            }
          />
        </S.TypeWritterDiv>
      </div>
      <S.MoreAnchor href="#aboutme">Saiba mais</S.MoreAnchor>
      <S.OffDiv>
        <Image src={bannerImage} alt="Banner image"/>
      </S.OffDiv>
    </S.Container>
  );
};

export default BannerContent;
