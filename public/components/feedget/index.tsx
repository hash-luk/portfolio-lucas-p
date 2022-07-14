import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import WidgetForm from "./feedget-components/WidgetForm";


const Feedget = () => {
    return(
        <Popover>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button>
                <ChatTeardropDots />
                <span></span>
                Feedback
            </Popover.Button>
        </Popover>
    )
}

export default Feedget;