import styled from "styled-components";
import { Popover } from "@headlessui/react";

export const Container = styled(Popover)`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #303030 !important;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
