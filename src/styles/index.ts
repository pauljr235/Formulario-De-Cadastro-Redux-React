import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        padding: 0 40px;
        

    body {
    background-color: #f7f7f7;
    margin: 0;
    padding: 20px;
    }

    
    h1{
        font-size: 50px;
        text-align: center;
    
    }
    
    }  
`

export default EstiloGlobal;
