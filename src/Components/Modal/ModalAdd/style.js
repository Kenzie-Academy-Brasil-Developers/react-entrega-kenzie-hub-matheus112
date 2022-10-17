import styled from "styled-components";

export const FormAdd = styled.form `
background-color: #212529;
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
max-width: 369px;
height: 296px;
text-align: center;
justify-content: flex-start;
border-radius: 5px;
gap: 30px !important;
        h2{
            color: white;
            font-weight: 800;
            font-family: 'Inter', sans-serif;
            font-size: 15px;
            margin-left: 25px !important;
        }
        .divInput{
            display: flex;
            flex-direction: column;
            width: 90%;
            gap: 5px;
            align-items: flex-start;
        }
        .divH2{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            height: 50px;
            background-color: blue;
            width: 100%;
            background-color: var(--color-input);
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

        }
        .divH2 button{
            background: transparent;
            color: #868E96;
            border: none;
            margin-right:10px ;
        }
        select{
            width: 100%;
            height: 40px;
            background-color: var(--color-input);
            color: white;
            padding: 5px;
            border: none;
         
        }
        label{
            color: white;
            display: flex;
            justify-content: start;
            font-size: 12px;
            margin-right: 5px;

        }
        .buttoAdd{
            width: 90%;
            border: none;
            height: 40px;
            border-radius: 5px;
            background-color: var(--color-button-login);
            color: white;
            font-weight: 600;
        }
        .spanError{
            font-size: 8px;
            display: flex;
            color: red;
            align-items: center;
        }
        @media (min-width: 728px) {
            background-color: #212529;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 296px;
            text-align: center;
            justify-content: flex-start;
            border-radius: 5px;
            gap: 20px;
        }

`