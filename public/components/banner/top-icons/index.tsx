import * as S from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopIcons = () => {

    return(
        <S.Container>
            <a href="https://github.com/hash-luk">
                <FontAwesomeIcon icon={faGithub} id="icon" className='github-icon' size='2x' inverse/>
            </a>
            <a href="https://instagram.com/lucasp_dev">
                <FontAwesomeIcon icon={faInstagram} id="icon" className='instagram-icon' size='2x' inverse/>
            </a>
            <a href="https://linkedin.com/in/lucas-patrick-p">
                <FontAwesomeIcon icon={faLinkedin} id="icon" className='linkedin-icon' size='2x' inverse/>
            </a>
        </S.Container>
    )
}

export default TopIcons