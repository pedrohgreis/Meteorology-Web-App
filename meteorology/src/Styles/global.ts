import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,html{
       background-color: ${props => props.theme["gray-200"]};
    }

    main{
        display: grid;
        grid-template-columns: 4fr 1fr; 
        grid-template-areas: "cintent nav";
    }

`;