import type { NextPage } from 'next'
import Menu from '../public/components/nav-menu'
import TopIcons from '../public/components/banner/top-icons'
import BannerContent from '../public/components/banner/main-content'
import AboutMe from '../public/components/about-me'
import TechStack from '../public/components/tech-stack'
import Projects from '../public/components/projects'
import GlobalStyle from '../styles/globalStyles'
import Footer from '../public/components/footer'
import BackToTopButton from '../public/components/back-to-top'


const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <TopIcons />
      <BannerContent />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
      <BackToTopButton />
      <GlobalStyle />
    </>
  )
}

export default Home
