import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    .nameDisplay {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 6;
        color: #DDDDDD;
        
        span {
            color: #AF5CBC;
        }
    }
`;


export const Filter = styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(20,20,20,0.5);
    position: absolute;
    z-index: 3;
    overflow-x: hidden !important;
`