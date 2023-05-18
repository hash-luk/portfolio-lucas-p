import * as S from './styles';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import bgImage from './assets/desk.jpg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const BannerContent = () => {
    const options = {
        autoStart: true,
        loop: false,
        wrapperClassName: 'tyContainer'
    }

    const nameAnimation = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                strongerChildren: 0.08
            }
        }
    }


    return(
        <S.Container>
            <S.Filter />
            <Image src={bgImage} alt="Imagem de background" className='bgImage' layout='fill' objectFit='cover'/>
            <motion.div className='nameDisplay' variants={nameAnimation} initial="hidden" animate="visible" transition={{type:"spring"}}>
                <Typewriter options={options} onInit={(typewritter) => {typewritter.typeString("Oi, eu sou o <b>Lucas</b>").start().pauseFor(400).typeString('<br /> <span style="font-size: 1.9rem;">Desenvolvedor full-stack</span>').start()}} />
            </motion.div>
            <S.linkIcon href="#aboutme" className='linkicon'>
                <FontAwesomeIcon icon={faAngleDown} id="icon" size='2x' inverse/>
            </S.linkIcon>
        </S.Container>
    )
}

export default BannerContent;