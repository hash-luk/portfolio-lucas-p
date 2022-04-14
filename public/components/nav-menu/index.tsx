import * as S from './styles'
import { MutableRefObject, useRef, useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
    const [isOpen, setIsOpen] = useState("closed");
    const [width, setWidth] = useState(window.innerWidth);
    const hamburgerMenu = useRef() as MutableRefObject<HTMLDivElement>;
    const menuContainer = useRef() as MutableRefObject<HTMLDivElement>;
    
    function handleClick() {
        if(isOpen === "closed") {
            setIsOpen("open");
        } else {
            setIsOpen("closed");
        }
    }

    useEffect(() => {
        setWidth(window.innerWidth);

        if(width <= 600) {
            setIsOpen("closed");
        } else {
            setIsOpen("open");
        }
    },[width]);

    return(
        <S.Container>
            <div className='responsive-menu' ref={hamburgerMenu} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} inverse id='icon'/>
            </div>
            <div className={`content ${isOpen}`} ref={menuContainer}>
                <a href="#aboutme" >SOBRE</a>
                <a href="#techstack" >TECH STACK</a>
                <a href="#projects" >PROJETOS</a>
                <a href="#contact" >CONTATO</a>
            </div>
        </S.Container>
    )
}

export default Menu;