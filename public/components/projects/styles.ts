import styled from "styled-components";

export const Container = styled.div`
    padding-top: 2.25rem;

    .row {
        width: 100%;
        height: 20.125rem;
        display: flex;
    }
`

export const ProjectsContainer = styled.div`
    width: 53.125rem;
    height: 80rem;
    background-color: white;
    display: block;
    margin: 0 auto;
    margin-top: 2.25rem;
`

export const PreviewContainer = styled.div`
    width: 26.563rem;
    height: 20.125rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .img {
        transition: all .3s ease-in-out;
    }

    :hover {
        .img {
            transform: scale(1.1);
        }
    }
`

export const TextContainer = styled.div`
    width: 26.563rem;
    height: 20.125rem;
    background-color: #AB35AD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const ProjectTitle = styled.h3`
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: center;
    width: 20.6rem;
    color: #F0F0F0;
    cursor: pointer;
    transition: all .2s ease;

    :hover {
        transform: scale(1.1);
    }
`

export const ProjectDescription = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.5rem;
    color: #F0F0F0;
`

export const Filter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(112, 111, 112, 0.4);
    position: absolute;
    z-index: 1;
`