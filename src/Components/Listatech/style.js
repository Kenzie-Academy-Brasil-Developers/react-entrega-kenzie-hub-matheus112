import styled from 'styled-components'


export const SectionTech = styled.section `
    width: 90%;
    max-width: 90%;
    display: flex !important;
    align-items: center !important;
    height: 450px;
    padding: 2rem;
    margin: 5px 5px;
    overflow-y: auto  !important;
    flex-direction: column;
    background-color: var(--color-login-container);
    border-radius: 5px;
  div {
    height: 40px;
    width: 97%;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-header);
    align-items: center;
    margin: 5px 0px !important ;
    cursor: pointer;
    border-radius: 5px;
   
  }
  div span{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .divHover:hover{
    background-color: #343B41;

  }
  .divHover{
    max-width: 97%;
    
  }
  
  .divTrash{
    display: flex;
    justify-content: flex-end;
  }
  p{
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }
span{
    display: flex;
    justify-content: flex-start;
    margin-left: 15px !important;
   

  }
    button{
        border: none;
        background: transparent;
        color: rgba(255, 255, 255, 0.8);
        margin-left: 5px;
        margin-right: 5px;

    }
    button:hover{
        border: none;
        background: transparent;
        color: red;
        margin-left: 5px;
        margin-right: 5px;

    }
   
    @media (min-width: 728px) {
        width: 55%;
        max-width: 780px;
        min-height: 10%;
        display: flex !important;
        align-items: center !important;
        height: 450px;
        padding: 2rem;
        margin: 5px 5px;
        flex-direction: column;
        background-color: var(--color-login-container);
    }
`
 