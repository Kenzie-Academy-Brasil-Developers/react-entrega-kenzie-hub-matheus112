import styled from "styled-components";

export const Nav = styled.nav`
  font-family: "Inter", sans-serif;
  width: 100%;
  display: flex;
  button {
    border: none;
    width: 50px;
    max-width: 15vw;
    height: 30px;
    border-radius: 4px;
    background-color: var(--color-login-container);
    color: var(--color-button-text);
  }
  .divheader {
    background-color: var(--color-header);
    display: flex;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    justify-content: space-around;
  }
  @media (min-width: 728px) {
    .divheader {
      width: 100vw;
      background-color: var(--color-header);
      display: flex;
      height: 72px;
      align-items: center;
      border-bottom: 1px solid #ccc;
      justify-content: space-around;
    }
    button {
      border: none;
      width: 50px;
      max-width: 15vw;
      height: 30px;
      border-radius: 4px;
      background-color: var(--color-login-container);
      color: var(--color-button-text);
    }
  }
`;
export const Container = styled.header`
  font-family: "Inter", sans-serif;
  color: white;
  background-color: #000000;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  p {
    font-weight: 700;
    font-size: 18px;
  }
  .pName {
    font-size: 17px;
  }
  .line {
    width: 100vw;
    height: 1px;
    background-color: #212529;
  }
  .divUser {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .spanModule {
    color: var(--color-grey-text);
    font-size: 12px;
  }

  .divInfoUser {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    height: 100px;

  }

  @media (min-width: 728px) {
    font-family: "Inter", sans-serif;
    color: white;
    background-color: #000000;
    min-width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

    .divUser {
      height: 150px;
      width: 100%;
      background-color: #000000;
    }
    .divInfoUser {
      min-width: 100%;
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 10px;
      height: 100px;
    }

    .pName {
      font-size: 17px;
      width: 15vw;
    }
  }
  @media (min-width: 450px) {
    .divInfoUser {
      min-width: 100%;
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
     flex-direction: row;
      gap: 10px;
      height: 100px;
    }
    .divUser {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  }
`;
export const Main = styled.main`
  color: white;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
  width: 90%;
  .buttonAdd {
    display: flex;
    width: 90%;
    justify-content: space-between;
    text-align: center;
  }
  .buttonAdd button {
    border: none;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: var(--color-login-container);
    color: var(--color-button-text);
  }
  .buttonAdd h2 {
    font-weight: 600;
    font-size: 15px;
  }
  span {
    width: 80vw;
    font-size: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  p {
    width: 80vw;
    font-size: 12px;
    display: flex;
    font-weight: 800;
    align-items: center;
    justify-content: flex-end;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 10px;
  gap: 20px;

  @media (min-width: 728px) {
    color: white;
    background-color: #000;
    display: flex;
    min-height: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    span {
      width: 500px;
      align-items: center;
      display: flex;
      justify-content: center;
    }
    p {
      width: 500px;
      font-size: 23px;
      align-items: center;
      display: flex;
      justify-content: center;
    }
    .buttonAdd {
      display: flex;
      width: 55%;
      justify-content: space-between;
      text-align: center;
    }
  }
`;
