import type { NextPage } from 'next'
import TopIcons from './components/banner/top-icons'
import BannerContent from './components/banner/main-content'
import AboutMe from './components/banner/about-me'
import GlobalStyle from '../styles/globalStyles'

const Home: NextPage = () => {
  return (
    <>
      <TopIcons />
      <BannerContent />
      <AboutMe />
      <GlobalStyle />
    </>
  )
}

export default Home
