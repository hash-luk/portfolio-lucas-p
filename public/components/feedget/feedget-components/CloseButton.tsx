import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

const CloseButton = () => {
    return(
        <Popover.Button>
            <X />
        </Popover.Button>
    )
}

export default CloseButton;