import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: #000;
    form{
        display: flex;
        flex-direction: column;
        background-color: var(--color-login-container);
        align-items: center;
        justify-content: center;
        height: 750px;
        width:80%;
        gap:20px;
        border-radius: 4px;
        color: white;
    }
    .buttonEntrar{
        border: none;
        width: 75vw;
        height: 40px;
        background-color: var(--color-button-login);
        border-radius: 4px;
        color: white;
    }
    .buttonEntrar:hover{
        border: none;
        width: 75vw;
        height: 40px;
        background-color: var(--button-hover);
        border-radius: 4px;
        color: white;
    }
  
    .spanContar{
        font-size: 12px;
        font-weight: 400;
        color: var(--color-font-grey);
        font-family: 'Inter', sans-serif;
}
    .h1Login{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }
    .h1Register{
        font-weight: 700;
    }
    .h1Button button{
        font-family: 'Inter', sans-serif;
        height: 35px;
        width: 70px;
        border: none;
        background-color: var(--color-login-container);
        color: var(--color-button-text);
    }
    .slogan{
        color: var(--color-font-grey);
        font-size: 10px;
    }
    label{
        font-family: 'Inter', sans-serif;
        font-size: 9px;
    }
    span{
        color: red;
    }
    .h1Button{
        display: flex;
        justify-content: space-between;
        width: 300px;
        padding-top: 15px;
        padding-bottom: 15px;

    }
    select{
        width: 75vw;
        height: 40px;
        background-color: var(--color-input);
        color: #868E96;
        border: none;
        margin-top: 5px;
    }
input{
    border: 1px solid transparent;

}
    input:focus{
        border: 1px solid white;
    }
    .errorSpan{
        color: red;
        font-size: 8px;
    }
    @media (min-width: 728px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    background-color: #000;
        form{
        display: flex;
        flex-direction: column;
        background-color: var(--color-login-container);
        align-items: center;
        justify-content: center;
        height: 750px;
        width:30%;
        max-width: 30%;
        min-height: 30%;
        gap:20px;
        border-radius: 4px;
        color: white;
    }
    .h1Button{
        display: flex;
        justify-content: space-between;
        width: 30vw;
        padding-top: 15px;
        padding-bottom: 15px;

    }
    select{
        width: 21vw;
        height: 40px;
        background-color: var(--color-input);
        color: #868E96;
        border: none;
        margin-top: 5px;
    }
    .buttonEntrar{
        border: none;
        width: 21vw;
        height: 40px;
        background-color: var(--color-button-login);
        border-radius: 4px;
        color: white;
    }
    .buttonEntrar:hover{
        border: none;
        width: 21vw;
        height: 40px;
        background-color: var(--button-hover);
        border-radius: 4px;
        color: white;
    }
    
    }
`