import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #af5cbc;
  display: flex;
  font-family: "Roboto", sans-serif;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
  padding: 20px 0px;

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .profilePhoto {
    width: 13.875rem;
    height: 13.438rem;
    z-index: 4;
    transition: all 0.2s ease;
    border-radius: 50%;

    :hover {
      transform: scale(1.1);
    }
  }

  .ball {
    background-color: #303030;
    position: absolute;
    z-index: 1;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden !important;
    animation: scaleAnimation 3s infinite;

    @keyframes scaleAnimation {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .profilePhoto {
      width: 10rem;
      height: 10.2rem;
    }

    .ball {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .profilePhoto {
      width: 10rem;
      height: 10.2rem;
    }

    .ball {
      display: none;
    }
  }
`;

export const Title = styled(motion.h2)`
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  color: #dddddd;
  margin-bottom: 1.875rem;
  transition: all 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;

  span {
    color: #303030;
    transition: all 0.2s ease-in-out;
  }

  :hover {
    transform: scale(1.1);
    letter-spacing: 0.1rem;

    span {
      color: #dddddd;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem !important;
  }
`;

export const ContentText = styled(motion.div)`
  width: 55rem;
  height: 14rem;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
  border: 0.5px solid #dadadada;
  border-radius: 15px;
  transition: all 0.2s ease;

  @media screen and (max-width: 768px) {
    width: 95% !important;
    height: 20rem !important;
    border: none !important;
  }

  @media screen and (max-width: 600px) {
    width: 95% !important;
    height: 20rem !important;
    border: none !important;
  }
`;

export const Text = styled(motion.p)`
    max-width: 53rem;
    max-height: 13.188rem;
    color: #f2f2f2;
    font-size: 1.3rem;
    line-height: 24px;
    transition: all 4s ease;
    animation: opacityTransition 10s ease forwards;



    @media screen and (max-width: 768px) {
      max-width: 90%;
      font-size: 1rem;
      text-align: left;
    }


    @media screen and (max-width: 600px) {
      max-width: 90%;
      font-size: 1rem;
      text-align: left;
    }
`
