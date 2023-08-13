import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import profilePhoto from "../../assets/images/profile-photo.jpg";
import * as S from "./styles";

const AboutMe = () => {
  return (
    <S.Container id="aboutme">
      <S.Card>
        <Image
          src={profilePhoto}
          alt="Foto que ilustra o desenvolvedor Lucas, de terno azul marinho, em um fundo florido, durante um evento"
          width={300}
          height={400}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <S.ContentText>
          <h4>Quem sou eu</h4>
          <h3>Lucas Patrick</h3>
          <p>Desenvolvedor Front-End e aspirante a UI/UX Designer</p>
          <span>
            Olá me chamo Lucas Patrick, sou desenvolvedor front-end a 5 anos.
            Sou apaixonado por desenvolvimento e design, passando pelas 2 áreas
            atuando com edição de vídeo e imagens e posteriormente com
            programação, decidi manter minha carreira onde eu posso atuar nos
            dois. Meu interesse por programação vem desde pequeno, quando era
            extremamente curioso para entender como sites e aplicações
            funcionavam, então no meio do ensino médio decidi iniciar meus
            estudos em HTML, CSS e JavaScript e aprendi um pouco de Java e C# na
            faculdade mas não me interessaram tanto.Passei por diversos projetos
            com variadas tecnologias, hoje meu foco é construir aplicações
            escaláveis, visualmente bonitas, intuitivas e ainda se preocupando
            com SEO, responsividade e acessibilidade.
            <br />
            <br />
            Que tal construirmos algo incrível juntos?
          </span>
        </S.ContentText>
      </S.Card>
      <S.Card width="80px" padding="0" flexDirection="column">
        <Link
          href="https://www.github.com/hash-luk"
          className="redirect-link"
          title="Github"
        >
          <Github
            size={32}
            strokeWidth={1}
            className="link-icon"
            data-name="github"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lucas-patrick-p"
          className="redirect-link"
          title="LinkedIN"
        >
          <Linkedin
            size={32}
            strokeWidth={1}
            className="link-icon"
            data-name="linkedin"
          />
        </Link>
        <Link
          href="https://www.instagram.com/lkc_lucasp/"
          className="redirect-link"
          title="Instagram"
        >
          <Instagram
            size={32}
            strokeWidth={1}
            className="link-icon"
            data-name="instagram"
          />
        </Link>
      </S.Card>
    </S.Container>
  );
};

export default AboutMe;
