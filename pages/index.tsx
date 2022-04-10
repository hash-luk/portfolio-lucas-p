import type { NextPage } from 'next'
import TopIcons from './components/banner/top-icons'
import BannerContent from './components/banner/main-content'
import AboutMe from './components/about-me'
import TechStack from './components/tech-stack'
import Projects from './components/projects'
import GlobalStyle from '../styles/globalStyles'
import Footer from './components/footer/inde'

const Home: NextPage = () => {
  return (
    <>
      <TopIcons />
      <BannerContent />
      <AboutMe />
      <TechStack />
      <Projects />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default Home
