import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const NumbersContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};
    justify-content: flex-end;
    padding: 0 20px;

    h1 {
        font-size: 1.6rem;
        font-weight: 600;
    }
`

export const RightSideContent = styled.div`
    width: 50%;
    height: 30vh;
    display: flex;
    align-items: flex-start;
    color: ${props => props.theme.colors.white};
    border-left: 2px solid ${props => props.theme.colors.white};
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;

    .icons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;

        a {
            color: ${props => props.theme.colors.white};
            transition: all ease-in .3s;

            :hover {
                color: ${props => props.theme.colors.baseTextColor};
            }
        }
    }
`