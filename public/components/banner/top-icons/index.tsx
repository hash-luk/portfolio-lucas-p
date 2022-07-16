import * as S from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopIcons = () => {
    const variantscontainer = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return(
        <S.Container>
            <S.Icon variants={variantscontainer} initial="hidden" animate="visible" transition={{duration: 1, bounce:0.2,type:"spring"}}>
                <a href="https://github.com/hash-luk" id='github-link'>
                    <FontAwesomeIcon icon={faGithub} id="icon" className='github-icon' size='2x' inverse/>
                </a>
            </S.Icon>
            <S.Icon variants={variantscontainer} initial="hidden" animate="visible" transition={{duration: 1, bounce:0.2,type:"spring",delay:0.2}}>
                <a href="https://instagram.com/lucasp_dev" id='instagram-link'>
                    <FontAwesomeIcon icon={faInstagram} id="icon" className='instagram-icon' size='2x' inverse/>
                </a>
            </S.Icon>
            <S.Icon variants={variantscontainer} initial="hidden" animate="visible" transition={{duration: 1, bounce:0.2,type:"spring",delay:0.4}}>
                <a href="https://linkedin.com/in/lucas-patrick-p" id='linkedin-link'>
                    <FontAwesomeIcon icon={faLinkedin} id="icon" className='linkedin-icon' size='2x' inverse/>
                </a>
            </S.Icon>
        </S.Container>
    )
}

export default TopIcons