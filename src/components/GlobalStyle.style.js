import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    
    body{
        background-color: rgb(97, 218, 249);
        margin: 0px;
        text-align: center;
    }
    
    .sunshine{
        box-shadow: 2px 2px 10px #666;
        height: 317px;
        border-radius: 5px;
    }

    .section-top{
        display: flex;
        justify-content: space-between;

        position: relative;
        width: 217px;
        height: 15px;
        left: 4px;
        top: 10px;
    }
    .section-top > h6 {
        position: relative;
        top: -18px;  
        left: 4px;
        font-size: 12px;
        color: #FFFFFF;
    }
    
    .section-top > div{
        position: relative;
        width: 28px;
        height: 9px;
        top: 14px;
        right: 2px;
        
        background-color: #D9D9D9;
        border-radius: 5px;
    }
    
    .on-off{
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #E02B0A;
        
        position: relative;
        left: 7.14%;
        right: 67.86%;
        top: 11.11%;
        bottom: 11.11%;
        
        
    }
    
    input{
        position: relative;
        left: 0px;
        top: 38px;

        width: 212px;
        height: 52px;
        
        color: whitesmoke;
        background-color: #181D34;
        font-size: 25px;

        border-radius: 5px;
        text-align: end;

        marker: none;
        
    }
    
    main{
        position: relative;
        top: 46px;
        width: 222px;
        height: 197px;
        
        background-color: #252B46;
        border-radius: 5px;
    }
    
    .grid-4x4{
        position: relative;
        width: 197px;
        height: 134px;
        left: 12px;
        top: 15px;
        
        background: #252B46;
        border-radius: 5px;

        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: space-between;
        align-content: space-between;

    }

    .grid-2x1{
        position: relative;
        width: 197px;
        height: 26px;
        left: 12px;
        top: 25px;

        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
    }

    .grid-3x4{
        position: relative;
        width: 145px;
        height: 134px;
        left: 12px;
        top: 15px;
        
        background: #252B46;
        border-radius: 5px;

        display: grid;
        grid-template-columns: auto auto auto;
       
        justify-content: space-between;
        align-content: space-between;
    }
`