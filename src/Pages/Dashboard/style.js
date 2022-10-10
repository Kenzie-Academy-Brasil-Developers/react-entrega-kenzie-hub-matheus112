import styled from 'styled-components'


export const Nav = styled.nav`
        font-family: 'Inter', sans-serif;
        width: 100vw;
    button{
        border: none;
        width: 5vw;
        min-width: 5vw;
        height: 30px;
        border-radius:4px;
        background-color: var(--color-login-container);
        color:var(--color-button-text);
    }
    .divheader{
        
    background-color: var(--color-header);
    display: flex;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    justify-content: space-around;
    }

`
export const Container = styled.header`
    font-family: 'Inter', sans-serif;
    color: white;
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    p{
        margin-top: 20px;
        font-weight: 700;
        font-size: 18px;
    }
    .line{
        width: 100vw;
        height: 1px;
        background-color: #212529;
    }
    .divUser{
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    margin-left: 5px;
    }
    .spanModule{
        color: var(--color-grey-text);
        font-size: 12px;
        margin-left: 300px;
    }
    @media (min-width: 728px) {
        font-family: 'Inter', sans-serif;
    color: white;
    background-color: #000000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    
    
    .divUser{
    height: 150px;
    width: 100% ;
}
    .divInfoUser{
        width: 100vw;
        height: 250px;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .DivInfosDev{
        width: 100vw;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .DivInfosDev{   
        width   : 100vw ;
        display: flex;
        gap: 20px;
}
    }
`