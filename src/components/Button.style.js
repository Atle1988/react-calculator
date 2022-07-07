import styled from "styled-components";


/* Diffrent size Button's */
export const SmallBtn = styled.button`
    text-align: center;
    width: 41px;
    height: 26px;
    border-radius: 5px;
    font-weight: 900;

    background-color: ${ (props) => props.backgroundColor };
    color: ${ (props) => props.color };

    cursor: pointer;

    &:hover{
        transform: scale(95%);
    
    }
    &:active{
        background-color: #181D34;
        color: white;
    }
`
export const LargeBtn = styled.button`
    text-align: center;
    width: 93px;
    height: 26px;
    border-radius: 5px;
    background-color: ${ (props) => props.backgroundColor };
    color: ${ (props) => props.color };
    font-weight: 900;
  
    cursor: pointer;

    &:hover{
        transform: scale(95%);
    }
    &:active{
        background-color: #181D34;
    }
`

/* Text component */
export const BtnText = styled.label`
    /* color: #252525; */
    color: tomato;
`