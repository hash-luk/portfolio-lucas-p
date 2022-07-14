import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import * as S from "./styles";

const CloseButton = () => {
    return(
        <S.Container.Button className="close-button">
            <X className="w-4 h-4" weight="bold"/>
        </S.Container.Button>
    )
}

export default CloseButton;