import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 3.813rem;
    background-color: #F0F0F0;
    box-shadow: 0px -4px 4px rgba(135, 135, 135, 0.25);
    padding-top: 1.25rem;
`

export const Text = styled.p`
    font-family: 'Roboto',sans-serif ;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
    text-align: center;

    #heart {
        
        animation: heartColor 3s infinite;


        @keyframes heartColor {
            0% {
                color: #7f7eff;
            }
            25% {
                color: #a390e4;
            }
            50% {
                color: #a390e4;
            }
            75% {
                color: #cc8b8c;
            }
            100% {
                color: #7f7eff;
            }
        }
    }
`