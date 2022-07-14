import { ChatTeardropDots } from "phosphor-react";
// import { Popover } from "@headlessui/react";
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
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2 "></span>
            Feedback
          </span>
        </S.Container.Button>
      </S.Container>
  );
};

export default Feedget;
