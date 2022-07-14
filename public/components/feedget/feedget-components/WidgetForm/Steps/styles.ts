import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  font-family: "Roboto", sans-serif;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 20px;

    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
    }
  }

  .input-area {
    width: 100%;
    min-height: 150px;
    resize: none;
    border-radius: 10px;
    color: #000;
    padding: 5px;
  }

  .bottom-content {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;

    button:first-child {
      cursor: pointer;
      width: 25%;
      background-color: #af5cbc;
      height: 30px;
      border-radius: 8px;
    }

    button:last-child {
      cursor: pointer;
      width: 70%;
      background-color: #af5cbc;
      height: 30px;
      border-radius: 8px;
    }
  }

  .type-picker-container {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  .content {
    width: auto;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .svg-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .svg {
      width: 40px;
      height: 40px;
    }

    button {
      cursor: pointer;
      width: 250px;
      background-color: #af5cbc;
      height: 70px;
      border-radius: 8px;
      margin-top: 10px;
    }
  }
`;
