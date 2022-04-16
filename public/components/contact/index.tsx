import * as S from './styles';
import { useRef, MutableRefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare,faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const instagramButton = useRef() as MutableRefObject<HTMLDivElement>
    const emailButton = useRef() as MutableRefObject<HTMLDivElement>
    const linkeinButton = useRef() as MutableRefObject<HTMLDivElement>
    const githubButton = useRef() as MutableRefObject<HTMLDivElement>
    const copiedEmail = useRef() as MutableRefObject<HTMLDivElement>

    const linksAnimations = {
        hidden: {
            opacity: 0,
            x: 30
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    function handleClick(destination:string) {
        if(destination === 'instagram'){
            window.open('https://instagram.com/lucasp_dev','_blank')
        } else if(destination === 'email'){ 
            let email = 'lucas.patrick2506@gmail.com'
            navigator.clipboard.writeText(email)
            copiedEmail.current.style.opacity = '1'
            setTimeout(() => {
                copiedEmail.current.style.opacity = '0'
            } , 2000)
        } else if(destination === 'linkedin'){
            window.open('https://linkedin.com/in/lucas-patrick-p','_blank')
        } else if(destination === 'github'){
            window.open('https://github.com/hash-luk','_blank')
        }
    }
 
    return(
        <S.Container id='contact'>
            <S.CopiedEmail ref={copiedEmail}>
                <p>Email copiado</p>
            </S.CopiedEmail>
            <div className="content">
                <S.Contact className="instagram" ref={instagramButton} onClick={()=> handleClick(instagramButton.current.title)} title='instagram'  variants={linksAnimations} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration: 1}}>
                    <p>instagram</p>
                    <FontAwesomeIcon icon={faInstagramSquare} id="instagram" className='icon'/>
                </S.Contact>
                <S.Contact className="email" ref={emailButton} onClick={()=> handleClick(emailButton.current.title)} title='email' variants={linksAnimations} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration: 1,delay:0.2}}>
                    <p>email</p>
                    <FontAwesomeIcon icon={faEnvelope} id="email" className='icon'/>
                </S.Contact>
                <S.Contact className=" linkedin" ref={linkeinButton} onClick={()=> handleClick(linkeinButton.current.title)} title='linkedin' variants={linksAnimations} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration: 1,delay:0.2}}>
                    <p>linkedIN</p>
                    <FontAwesomeIcon icon={faLinkedin} id="linkedin" className='icon'/>
                </S.Contact>
                <S.Contact className=" github" ref={githubButton} onClick={()=> handleClick(githubButton.current.title)} title='github' variants={linksAnimations} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration: 1,delay:0.2}}>
                    <p>github</p>
                    <FontAwesomeIcon icon={faGithubSquare} id="github" className='icon'/>
                </S.Contact>
            </div>
        </S.Container>
    )
}

export default Contact;