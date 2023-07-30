import * as B from "./styles";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        isVisible && (
          <B.BacktoTop title="Voltar ao topo" id="back-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faAngleUp} id="icon" size="3x"/>
          </B.BacktoTop>
        )
      }
    </>
  );
};

export default BackToTopButton;
