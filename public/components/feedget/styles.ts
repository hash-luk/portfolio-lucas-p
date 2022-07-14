import styled from "styled-components";
import { Popover } from "@headlessui/react";

export const Container = styled(Popover)`
    position: fixed;
    right: 3.125rem;
    bottom: 3.125rem;
    width: fit-content;
    z-index: 999;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    background-color: #303030;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
    padding: 10px 10px;
    transition: all 0.3s ease-in-out;

    .pop-button {
        color: #fff;
        width: 130px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        font-weight: 400;
        background-color: #303030;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .chat-icon {
        width: 20px;
        height: 20px;
    }
`;