import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
a{
    text-decoration: none;
}
li{
    list-style-type: none;
}
button{
    transition: transform 0.3s ease;
    cursor: pointer;
    :hover{
        transform: scale(1.05)
    };
    :active{
        transform: scale(0.95);
    }
    
}

`



export default GlobalStyles;