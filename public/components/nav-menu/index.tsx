import * as S from './styles'


const Menu = () => {
    return(
        <S.Container>
            <div className='content'>
                <a href="#aboutme" >SOBRE</a>
                <a href="#techstack" >TECH STACK</a>
                <a href="#projects" >PROJETOS</a>
                <a href="#contact" >CONTATO</a>
            </div>
        </S.Container>
    )
}

export default Menu;