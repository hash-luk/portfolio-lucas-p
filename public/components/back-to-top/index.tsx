import * as B from "./styles";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const arrowUpElement = useRef() as MutableRefObject<HTMLAnchorElement>;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (scrollY >= 300) {
        arrowUpElement.current.style.display = "block";
      } else {
        arrowUpElement.current.style.display = "none";
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <B.BacktoTop href="#" ref={arrowUpElement} title="Voltar ao topo" id="back-to-top">
      <FontAwesomeIcon icon={faAngleUp} id="icon" size="4x" inverse />
    </B.BacktoTop>
  );
};

export default BackToTopButton;
