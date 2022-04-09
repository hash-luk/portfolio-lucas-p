import * as S from './styles';
import Image from 'next/image';
import ReactIcon from '../../../public/assets/icons/react.png';
import SassIcon from '../../../public/assets/icons/sass.png';
import JSIcon from '../../../public/assets/icons/js.png';
import TSIcon from '../../../public/assets/icons/ts.png';
import NPMIcon from '../../../public/assets/icons/npm.png';
import CSSIcon from '../../../public/assets/icons/css3.png';
import HTMLIcon from '../../../public/assets/icons/html.png';
import GitHubIcon from '../../../public/assets/icons/github.png';
import GitIcon from '../../../public/assets/icons/git.png';
import ApiIcon from '../../../public/assets/icons/api.png';
import BootStrapIcon from '../../../public/assets/icons/bootstrap.png';
import AngularIcon from '../../../public/assets/icons/angular.png';

const TechStack = () => {
    return (
        <S.Container>
            <S.Title>TEC<span>H</span> STAC<span>K</span></S.Title>
            <div id="icons-container">
                <div className="icon-row">
                    <Image src={HTMLIcon} alt=""  className='icon'/>
                    <Image src={CSSIcon} alt="" className='icon'/>
                    <Image src={JSIcon} alt="" className='icon'/>
                </div>
                <div className="icon-row">
                    <Image src={TSIcon} alt="" className='icon'/>
                    <Image src={ReactIcon} alt="" className='icon'/>
                    <Image src={GitHubIcon} alt="" className='icon'/>
                </div>
                <div className="icon-row">
                    <Image src={AngularIcon} alt="" className='icon'/>
                    <Image src={SassIcon} alt="" className='icon'/>
                    <Image src={GitIcon} alt="" className='icon'/>
                </div>
                <div className="icon-row">
                    <Image src={NPMIcon} alt="" className='icon'/>
                    <Image src={BootStrapIcon} alt="" className='icon'/>
                    <Image src={ApiIcon} alt="" className='icon'/>
                </div>
            </div>
        </S.Container>
    )
}

export default TechStack