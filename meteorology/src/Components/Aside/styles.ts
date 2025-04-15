import styled from "styled-components";


export const AsideContainer = styled.aside`
    grid-area: nav;
    height: 100vh;
    padding-left: 2rem;
    background-color: ${({theme}) => theme["blue-400"]};
`;