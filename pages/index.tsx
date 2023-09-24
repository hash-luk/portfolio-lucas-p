import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../public/components/nav-menu";
import BannerContent from "../public/components/banner/main-content";
import AboutMe from "../public/components/about-me";
import TechStack from "../public/components/tech-stack";
import Projects from "../public/components/projects";
import Footer from "../public/components/footer";
import BackToTopButton from "../public/components/back-to-top";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Head>
          <title>Lucas &bull; Dev</title>
        </Head>
        <NavBar />
        <BannerContent />
        <AboutMe />
        <TechStack />
        <Projects />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Home;
