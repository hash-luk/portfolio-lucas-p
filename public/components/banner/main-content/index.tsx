import * as S from './styles';
import Image from 'next/image';
import bgImage from './assets/desk.jpg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const BannerContent = () => {
    const lucas = 'l u c a s'
    const patrick = 'p a t r i c k'

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

    const letter = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }


    return(
        <S.Container>
            <S.Filter />
            <Image src={bgImage} alt="bgImage" className='bgImage' layout='fill' objectFit='cover'/>
            <motion.div className='nameDisplay' variants={nameAnimation} initial="hidden" animate="visible" transition={{type:"spring"}}>
                {lucas.split("").map((char, index) => (
                    <motion.p key={char + "-" + index} variants={letter} style={{display:'inline-block'}} >
                        {char}
                    </motion.p>
                ))}
                {patrick.split(" ").map((char, index) => (
                    <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>

            <S.linkIcon href="#aboutme" className='linkicon'>
                <FontAwesomeIcon icon={faAngleDown} id="icon" size='2x' inverse/>
            </S.linkIcon>
        </S.Container>
    )
}

export default BannerContent;