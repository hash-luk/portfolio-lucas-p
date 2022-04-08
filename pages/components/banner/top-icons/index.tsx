import * as S from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopIcons = () => {
    return(
        <S.Container>
            <FontAwesomeIcon icon={faGithub} id="icon" className='github-icon' size='2x' inverse/>
            <FontAwesomeIcon icon={faInstagram} id="icon" className='instagram-icon' size='2x' inverse/>
            <FontAwesomeIcon icon={faLinkedin} id="icon" className='linkedin-icon' size='2x' inverse/>
        </S.Container>
    )
}

export default TopIcons