import * as S from './styles'
import { useRef, MutableRefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare,faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const instagramButton = useRef() as MutableRefObject<HTMLDivElement>
    const emailButton = useRef() as MutableRefObject<HTMLDivElement>
    const linkeinButton = useRef() as MutableRefObject<HTMLDivElement>
    const githubButton = useRef() as MutableRefObject<HTMLDivElement>

    function handleClick(destination:string) {
        if(destination === 'instagram'){
            window.open('https://instagram.com/lucasp_dev','_blank')
        } else if(destination === 'email'){ 
            let email = 'lucas.patrick2506@gmail.com'
            navigator.clipboard.writeText(email)
            console.log('copiado')
        } else if(destination === 'linkedin'){
            window.open('https://linkedin.com/in/lucas-patrick-p','_blank')
        } else if(destination === 'github'){
            window.open('https://github.com/hash-luk','_blank')
        }
    }
 
    return(
        <S.Container id='contact'>
            <div className="content">
                <div className="contact instagram" ref={instagramButton} onClick={()=> handleClick(instagramButton.current.title)} title='instagram'>
                    <p>instagram</p>
                    <FontAwesomeIcon icon={faInstagramSquare} id="instagram" className='icon'/>
                </div>
                <div className="contact email" ref={emailButton} onClick={()=> handleClick(emailButton.current.title)} title='email'>
                    <p>email</p>
                    <FontAwesomeIcon icon={faEnvelope} id="email" className='icon'/>
                </div>
                <div className="contact linkedin" ref={linkeinButton} onClick={()=> handleClick(linkeinButton.current.title)} title='linkedin'>
                    <p>linkedIN</p>
                    <FontAwesomeIcon icon={faLinkedin} id="linkedin" className='icon'/>
                </div>
                <div className="contact github" ref={githubButton} onClick={()=> handleClick(githubButton.current.title)} title='github'>
                    <p>github</p>
                    <FontAwesomeIcon icon={faGithubSquare} id="github" className='icon'/>
                </div>
            </div>
        </S.Container>
    )
}

export default Contact;