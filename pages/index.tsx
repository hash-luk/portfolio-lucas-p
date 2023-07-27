import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Menu from "../public/components/nav-menu";
import TopIcons from "../public/components/banner/top-icons";
import BannerContent from "../public/components/banner/main-content";
import AboutMe from "../public/components/about-me";
import TechStack from "../public/components/tech-stack";
import Projects from "../public/components/projects";
import GlobalStyle from "../styles/globalStyles";
import Footer from "../public/components/footer";
import BackToTopButton from "../public/components/back-to-top";
import theme from "../styles/theme";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/under-construction");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <TopIcons />
      <BannerContent />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
      <BackToTopButton />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Home;
