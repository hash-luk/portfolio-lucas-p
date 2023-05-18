import * as S from './styles';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import bgImage from './assets/desk.jpg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const BannerContent = () => {
    const options = {
        string: ['Lucas', 'Patrick'],
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
                <Typewriter options={options} onInit={(typewritter) => {typewritter.typeString("Lucas Patrick").start().pauseFor(2500).typeString("<br /> Desenvolvedor <b>front-end</b>")}} />
            </motion.div>
            <S.linkIcon href="#aboutme" className='linkicon'>
                <FontAwesomeIcon icon={faAngleDown} id="icon" size='2x' inverse/>
            </S.linkIcon>
        </S.Container>
    )
}

export default BannerContent;