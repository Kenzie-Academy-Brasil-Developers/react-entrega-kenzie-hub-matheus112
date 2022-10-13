import styled from 'styled-components'


export const Nav = styled.nav `
        font-family: 'Inter', sans-serif;
        width: 100%;
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
export const Container = styled.header `
    font-family: 'Inter', sans-serif;
    color: white;
    background-color: #000000;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

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
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    }
    .spanModule{
        color: var(--color-grey-text);
        font-size: 12px;
    }

    .divInfoUser{
    width: 100vw;
    margin-top: 50px;
    display: flex;

    justify-content: space-around;
    align-content: space-around;
    align-items: center;
}


    
    @media (min-width: 728px) {
    font-family: 'Inter', sans-serif;
    color: white;
    background-color: #000000;
    min-width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    
    
    .divUser{
    height: 150px;
    width: 100% ;
    background-color: #000000;
}
    .divInfoUser{
        min-width: 100%;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    }

`
export const Main = styled.main `
        color: white;
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 50px;


span{
    width: 80vw;
    font-size: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
}
p{
    width: 80vw;
    font-size: 15.0px;
    display: flex;
    font-weight: 800;
    align-items: center;
    justify-content: center;
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


    span{
    width: 500px;
    align-items: center;
    display: flex;
    justify-content: center;
}
 p{
    width: 500px;
    font-size: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
}
 }

`