import styled from 'styled-components'


export const Nav = styled.nav`
        font-family: 'Inter', sans-serif;
        width: 100vw;
        min-width: 100vw;
    button{
        border: none;
        width: 50px;
        max-width:15vw;
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
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    overflow: hidden;

    p{
        font-weight: 700;
        font-size: 18px;
    }
    .pName{
    font-size:17px ;
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
    }
    .DivInfosDev{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: 10px;
        gap: 20px;
    }
    .divInfoUser{
    width: 100vw;
    height: 250px;
    margin-top: 50px;
    display: flex;

    justify-content: space-around;
    align-content: space-around;
    align-items: center;
}
.DivInfosDev span{
    width: 80vw;
    font-size: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.DivInfosDev p{
    width: 80vw;
    font-size: 12.0px;
    display: flex;
    font-weight: 800;
    align-items: center;
    justify-content: center;
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

    .DivInfosDev span{
    width: 500px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.DivInfosDev p{
    width: 500px;
    font-size: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
}
    }

`