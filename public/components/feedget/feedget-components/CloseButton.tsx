import { X } from "phosphor-react";
import * as S from "./styles";

const CloseButton = () => {
    return(
        <S.Container>
            <X weight="bold" style={{cursor: "pointer"}}/>
        </S.Container>
    )
}

export default CloseButton;