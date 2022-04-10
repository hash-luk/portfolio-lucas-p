import * as S from './styles';
import Image from 'next/image';
import bgImage from './assets/desk.jpg';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BannerContent = () => {
    return(
        <S.Container>
            <S.Filter />
            <Image src={bgImage} alt="bgImage" className='bgImage' layout='fill' objectFit='cover'/>
            <p className='nameDisplay'>lucas<span>patrick</span></p>
            <FontAwesomeIcon icon={faAngleDown} id="icon" size='2x' inverse/>
        </S.Container>
    )
}

export default BannerContent;