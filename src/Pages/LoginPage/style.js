import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #000000;

    form{
        display: flex;
        flex-direction: column;
        background-color: var(--color-login-container);
        align-items: center;
        justify-content: center;
        height: 400px;
        width:80vw;
        gap:20px;
        border-radius: 4px;
        color: white;
        transition: 2s;
    }
    .spanError{
        color: red;
        font-size: 12px;
    }
    .buttonEntrar{
        border: none;
        width: 74vw;
        min-width:10vw;
        height: 40px;
        background-color: var(--color-button-login);
        border-radius: 4px;
        color: white;
    }
    .buttonCadastre{
        background-color: var(--color-button-cadastrar);
        border: none;
        width: 74vw;
        min-width:20vw;
        height: 40px;
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
    label{
        font-family: 'Inter', sans-serif;
        font-size: 9px;
    }
    @media(min-width:728px){
        form{
        display: flex;
        flex-direction: column;
        background-color: var(--color-login-container);
        align-items: center;
        justify-content: center;
        height: 400px;
        width:22vw;
        gap:20px;
        border-radius: 4px;
        color: white;
        transition: 2s;
    }
    .buttonEntrar{
        border: none;
        width: 20.5vw;
        min-width:10vw;
        height: 40px;
        background-color: var(--color-button-login);
        border-radius: 4px;
        color: white;
    }
    .buttonCadastre{
        background-color: var(--color-button-cadastrar);
        border: none;
        width: 20.5vw;
        min-width: 10vw;
        height: 40px;
        border-radius: 4px;
        color: white;
    }
    }
`
