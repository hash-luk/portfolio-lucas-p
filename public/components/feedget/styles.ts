import styled from "styled-components";
import { Popover } from "@headlessui/react";

export const Container = styled(Popover)`
    position: fixed;
    right: 3.125rem;
    bottom: 3.125rem;
    width: fit-content;
    background-color: red;
    z-index: 999;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    background-color: #af5cbc;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;

    .pop-button {
        color: #fff;
        width: 130px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        font-weight: 400;
    }

    .chat-icon {
        width: 20px;
        height: 20px;
    }
`;