import styled from "styled-components";

export const Container = styled.div`
    width: 9.875rem;
    height: 10.938rem;
    position: absolute;
    z-index: 999999;
    margin-left: 0.75rem;

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-evenly;
        padding-left: 2px;

        a {
            padding-left: 5px;
            text-decoration: none;
            color: #fff;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
            transition: all .2s ease;
            border-left: 1px solid #fff;

            :hover {
                border-left: 3px solid #AF5CBC;
                transform: scale(1.1);
                color: #AF5CBC;
            }
        }
    }
`