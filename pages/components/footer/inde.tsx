import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <S.Container>
           <S.Text>Desenvolvido com <FontAwesomeIcon icon={faHeart} id="heart"/> por <b>Lucas P.</b></S.Text>
        </S.Container>
    )
}


export default Footer;