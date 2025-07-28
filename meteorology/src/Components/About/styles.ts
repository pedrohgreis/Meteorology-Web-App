import styled from "styled-components";
import {motion} from "framer-motion";


interface DeveloperWrapperProps {
    $alignright?: string;
    $background?: string;
}


export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.white};
    width: 100%;
    height: 6rem;
    background:rgba(35, 70, 134, 0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); /* Safari support */
    border-bottom: 1px solid rgba(250, 249, 246, 0.6);
    padding: 0 2rem; /* Adiciona padding nas laterais */
`;


export const ButtonLogin = styled.button`
    position: absolute;
    right: 2rem;
    width: 6rem;
    height: 3rem;
    background-color: black;
    color: ${({theme}) => theme.white};
    cursor: pointer;
    border-radius: 10px;
    border: none;
    background-color: ${({theme}) => theme["blue-500"]};
    transition: all 0.2s ease-in-out;
    

    &:hover{
        background-color:  ${({theme}) => theme["blue-400"]};
    }
`;

export const MainAbout = styled.main`
    background-color: ${({theme}) => theme.white}; 
    min-width: 100vw;
    min-height: 100vh;
    color: ${({theme}) => theme.white};
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.lineHeight};
    text-indent: 1rem;
    line-height: 1.7rem;
    
   
`;

export const PresentationSection = styled.section`
    
    background: linear-gradient(135deg, #0d1b2a, #1b263b, #415a77);
    width: 100%;
    min-height: 70vh;
    

    p{
        color: ${({theme}) => theme.white};
        font-size: 1.5rem;
        padding-top: 1rem;
    }

    
   
`;

export const DevelopersContainer = styled.div`
    width: 100%;
    padding: 1rem 0;
    margin-top: 1.5rem;
    
`;


export const DeveloperContent = styled.div<DeveloperWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  margin-top: 1rem;
  flex-direction: ${(props) => (props.$alignright === "true" ? "row-reverse" : "row")};
  //width: clamp(400px, 90%); // Controla a largura do card
  margin-bottom: 2.5rem; // Espaço entre os cards

  

`;



export const DevelopersInfo = styled.div<DeveloperWrapperProps>`
    display: flex;
    width: 7rem;
    height: 7rem;
    border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
    //overflow: hidden;
    background-color: white;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.$background});
    background-position: center;

    &:hover{
        box-shadow: 0 2px 6px 5px #8257E6;
    }

    &:hover + div{
        opacity: 1;
        visibility: visible;
        transform: translateX(0); /* dá um leve movimento */
    }
   
`;

export const PersonalInfo = styled.div`
    
    opacity: 0;
    visibility: hidden;
    color: #8257E6;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateX(-10px); /* começa levemente deslocado */

    
   

    p{
        color: #8257E6;
        margin: 0.5rem 0;
        font-size: 1rem;
        line-height: 1.4;
        text-indent: 0;
    }
`;


export const InfoSection = styled(motion.section)`
    background-color: ${({theme}) => theme.white};
    color: black;
    min-height: 70vh;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 3rem 2rem;
    flex-wrap: nowrap;
`;


export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 35%;
    align-items: center;
    margin-top: 3rem;

    img {
        width: 15rem;
        height: 15rem;
        margin-right: 1rem;
        object-fit: cover;
    }

    @media(min-width: 768px) {
        img{
            width: 20rem;
            height: 20rem;
        }
    }
`;

export const Info = styled.main`
    width: 50%;
    margin-top: 1rem;
    font-size: 1.3rem;
    line-height: 1.6;
    padding: 1rem;

    p{
        margin: 2rem 0;
    }
`;


export const CuriositySection = styled(motion.section)`
    background:linear-gradient(135deg, #0d1b2a, #1b263b, #415a77);
    color: ${({theme}) => theme.white};
    font-family: ${({theme}) => theme.font.family};
    min-height: 70vh;
    
    

    h3{
        text-align: center;
        padding-top: 2rem;
    }

    div{
        text-align: center;
        margin-top: 5rem;
        width: 90%;
        font-size : 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
        padding-bottom: 2rem;
        
        ul{
            list-style: none;

            li{
                margin-top: 1rem;;
            }
        }
    }

`;


export const Footer = styled(motion.footer)`
    width: 100%;
    height: 3rem;
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme["gray-600"]};
    font-family: ${({theme}) => theme.font.family};
    
    display: flex;
    align-items: center;
    justify-content: center;

`;


export const Lang = styled.div`
    position: absolute;
    background-color: transparent;
    padding-right: 60rem;
`;


