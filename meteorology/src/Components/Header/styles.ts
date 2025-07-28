import styled from "styled-components";




export const Head = styled.header`
    width: 100vw;
    font-family: ${props => props.theme.font.family};
    
`;

export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    background-color: ${props => props.theme["blue-900"]};
    color: ${props => props.theme.white};
    border-bottom: 1px solid ${props => props.theme["blue-500"]};


    .infoWeather{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        
        
        h1{
            margin-left: 0.75rem;
        }

        @media (min-width: 768px) {
         
            h1{
                font-size: 2rem;
            }

            svg{
                width: 3rem;
                height: 3rem;
            }

        }

        @media (min-width: 1024px) {
            
            h1{
                font-size: 2.75rem;
            }

            svg{
                width: 3rem;
                height: 3rem;
            }
        }
       
    }

    .signUp{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-left: auto;

       
    }

    .signingUp{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.7rem 1rem;
        border: none;
        border-radius: 0.5rem;
        letter-spacing: 0.15rem;
        cursor: pointer;
        background-color: ${props => props.theme["blue-500"]};
        color: ${props => props.theme.white};
        transition: all 0.2s ease-in-out;


        &:hover{
            background-color: ${props => props.theme["blue-200"]};
            transform: scale3d(1.05,1.05,1);
            box-shadow: 0 0 10px ${props => props.theme["blue-900"]};
            transition: all 0.2s ease-in-out;
        }


        @media (min-width: 768px) {
            margin-right: 5rem;
            padding: 1.5rem;
            
        }

        @media (min-width: 1024px) {
            margin-right: 10rem;
            padding: 1.5rem;
            
        }
    }
`;


export const SecondDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    opacity: 0.92;
    background-color: ${props => props.theme["blue-500"]};
    color: ${props => props.theme.white};

   h2{
        margin-left: 0.75rem;
        text-shadow: 1px 1px 1px ${props => props.theme["blue-900"]};
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    span{
        margin-left: 0.75rem;
        font-size: 1.2rem;
        font-weight: 600;
        text-shadow: 1px 1px 1px ${props => props.theme["blue-900"]};
    }

    .buttonContainer {
        display: flex;
        align-items: center;

        // padrão (mobile)
        margin-left: 24rem;

        // tablets
        @media (min-width: 768px) {
            margin-left: 30rem;
        }

        // desktops
        @media (min-width: 1024px) {
            margin-left: 45rem;
        }

        // telas grandes (opcional)
        @media (min-width: 1440px) {
            margin-left: 50rem;
        }
    }

    
    .buttonHeader{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.7rem;
        gap: 0.5rem;
        padding: 0.5rem 1.2rem;
        border: none;
        border-radius: 0.5rem;
        letter-spacing: 0.15rem;
        background-color: ${props => props.theme["blue-900"]};
        color: ${props => props.theme.white};
        transition: all 0.1s ease-in-out;
        position: relative;
        overflow: hidden;
        z-index: 1;
        cursor: pointer;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${(props) => props.theme["blue-900"]};
            border-radius: 0.5rem;
            z-index: -2;
        }

        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: ${(props) => props.theme["blue-200"]};
            transition: all 0.3s;
            border-radius: 0.5rem;
            z-index: -1;
        }

        &:hover{
            background-color: ${props => props.theme["blue-200"]};
            transform: scale(1.05);
            box-shadow: 0 0 10px ${props => props.theme["blue-900"]};
            &:before{
                width: 100%;
            }
        }

        @media (min-width: 768px) {
            margin-right: 1rem;
        }

        @media (min-width: 1024px) {
            margin-right: 2rem;
        }
    }

   
`;

export const ThirdDiv = styled.div`
    padding: 1rem;
    background-color: ${props => props.theme["gray-200"]};
    color: ${props => props.theme["gray-600"]};
    border: ${props => props.theme["blue-300"]} 0.5 solid;
    box-shadow: 0 0 10px ${props => props.theme["gray-900"]};

    .nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1.75rem;
        height: 3rem;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20rem;
            height: 5rem;
            color: ${({theme}) => theme["gray-400"]};
            text-decoration: none;
            font-size: 1.2rem;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transition: all 0.1s ease-in-out;

            &:hover{
                color: ${({theme}) => theme.white};
                background-color: ${({theme}) => theme["blue-300"]};
                border-bottom: 3px solid ${({theme}) => theme["blue-200"]}};
            }
        };

    
`;



export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-left: auto;
    width: 40%;
    height: 3rem;
    padding: 2rem;
    text-align: center;
    background-color: transparent;
    border: none;
    
`;

export const DivForm = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${props => props.theme["blue-600"]};

    svg{
        width: 1rem;
        height: 3rem;
        margin-right: 1rem;
    }

    button{
        background-color: transparent;
        border: none;
        color: ${props => props.theme.white};

        &:hover{
            cursor: pointer;
        }
    }

`;



export const InputForm = styled.input`
    background-color: transparent;
    outline: 0;
    display: flex;
    padding: 1rem;
    width: 100%;
    border: none;
    color: ${props => props.theme.white};

    &::placeholder{
        font-family: ${props => props.theme.font};
        font-size: 1rem;
    }
`;

export const Lang = styled.div`
    position: absolute;
    background-color: transparent;
    padding-left: 70rem;
`;


