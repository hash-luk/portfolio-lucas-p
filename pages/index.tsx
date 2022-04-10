import type { NextPage } from 'next'
import TopIcons from '../public/components/banner/top-icons'
import BannerContent from '../public/components/banner/main-content'
import AboutMe from '../public/components/about-me'
import TechStack from '../public/components/tech-stack'
import Projects from '../public/components/projects'
import GlobalStyle from '../styles/globalStyles'
import Footer from '../public/components/footer'

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
