import styled from 'styled-components'


export const StyledInput = styled.input`
    height: 40px;
    background-color: var(--color-input);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 95%;
    margin-top:5px;
    padding-left: 10px;    
    border: none;
    border-radius: 3px;
    outline: none;
    border: 1px solid transparent;
    &:focus{
        border:1px solid white;
        
    }
    @media (min-width: 728px) {
    height: 40px;
    background-color: var(--color-input);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding-left: 10px;    
    border: none;
    border-radius: 3px;
    outline: none;
    border: 1px solid transparent;
    &:focus{
        border:1px solid white;
        
    }
    }
`
