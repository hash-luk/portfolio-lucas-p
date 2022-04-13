import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare,faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return(
        <S.Container>
            <div className="content">
                <div className="contact instagram">
                    <p>instagram</p>
                    <FontAwesomeIcon icon={faInstagramSquare} id="instagram" className='icon'/>
                </div>
                <div className="contact email">
                    <p>email</p>
                    <FontAwesomeIcon icon={faEnvelope} id="email" className='icon'/>
                </div>
                <div className="contact linkedin">
                    <p>linkedIN</p>
                    <FontAwesomeIcon icon={faLinkedin} id="linkedin" className='icon'/>
                </div>
                <div className="contact github">
                    <p>github</p>
                    <FontAwesomeIcon icon={faGithubSquare} id="github" className='icon'/>
                </div>
            </div>
        </S.Container>
    )
}

export default Contact;