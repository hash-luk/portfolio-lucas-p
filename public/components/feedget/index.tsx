import React, {useState, useEffect, useRef} from "react";
import { ChatTeardropDots } from "phosphor-react";
import WidgetForm from "./feedget-components/WidgetForm";
import * as S from "./styles";

const Feedget = () => {
  return (
       <S.Container>
        <S.Container.Panel>
          <WidgetForm />
        </S.Container.Panel>

        <S.Container.Button className="pop-button">
          <ChatTeardropDots className="chat-icon" />
          <span>
            <span></span>
            <span className="text">Feedback</span>
          </span>
        </S.Container.Button>
      </S.Container>
  );
};

export default Feedget;
