import styled from "styled-components";


export const AsideContainer = styled.aside`
    grid-area: nav;
    padding: 2rem;
    height: 10vh;
    background-color: ${({theme}) => theme["blue-400"]};
`;