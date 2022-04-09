import type { NextPage } from 'next'
import TopIcons from './components/banner/top-icons'
import BannerContent from './components/banner/main-content'
import AboutMe from './components/about-me'
import TechStack from './components/tech-stack'
import GlobalStyle from '../styles/globalStyles'

const Home: NextPage = () => {
  return (
    <>
      <TopIcons />
      <BannerContent />
      <AboutMe />
      <TechStack />
      <GlobalStyle />
    </>
  )
}

export default Home
