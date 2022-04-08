import * as S from './styles';
import Image from 'next/image';
import bgImage from './assets/desk.jpg'

const BannerContent = () => {
    return(
        <S.Container>
            <S.Filter />
            <Image src={bgImage} alt="bgImage" className='bgImage' layout='fill' objectFit='cover'/>
            <p className='nameDisplay'>lucas <span>patrick</span></p>
        </S.Container>
    )
}

export default BannerContent;