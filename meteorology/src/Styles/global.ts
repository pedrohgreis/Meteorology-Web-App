import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        background-color: ${props => props.theme["gray-200"]};
        -webkit-font-smoothing: antialiased;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden; /* Evita overflow horizontal */
    }

    /* body {
        background-color: ${props => props.theme["gray-200"]};
        -webkit-font-smoothing: antialiased; 
    } */
`;