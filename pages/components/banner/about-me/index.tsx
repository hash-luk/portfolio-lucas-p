import * as S from './styles';
import Image from 'next/image';
import shape from '../../../../public/assets/shapes/aboutme-shape.svg';
import profilePhoto from '../../../../public/assets/images/profile-photo.svg';

const AboutMe = () => {
    return (
        <S.Container>
            <div className='shape'>
                
            </div>


            <div className="profilePhoto" >
                <Image src={profilePhoto} alt="profilePhoto" width={310} height={310}/>
            </div>
            <div className="content-text">
                <h2>
                    Sobre Mim
                </h2>
                <p>
                Sou o Lucas Patrick, desenvolvedor front-end localizado em Belo Horizonte/MG. Desde criança sempre fui apaixonado por design e tecnologia então desde 2018 decidi investir na área. Iniciei os aprendizados em HTML e CSS, posteriormente aprendendo o básico de JavaScript. Atualmente cursando análise e desenvolvimento de sistemas e atualmente focado em React, mas sou bastante flexivel quanto a tecnologia e tenho rápido aprendizado
                </p>
            </div>
        </S.Container>
    )
}

export default AboutMe;