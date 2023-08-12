import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import Menu from "../public/components/nav-menu";
import BannerContent from "../public/components/banner/main-content";
import AboutMe from "../public/components/about-me";
import TechStack from "../public/components/tech-stack";
import Projects from "../public/components/projects";
import GlobalStyle from "../styles/globalStyles";
import Footer from "../public/components/footer";
import BackToTopButton from "../public/components/back-to-top";
import theme from "../styles/theme";
import UnderContruction from "./under-construction";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <UnderContruction />
    </ThemeProvider>
  );
};

export default Home;
