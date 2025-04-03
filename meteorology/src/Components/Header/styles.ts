import styled from "styled-components";



export const Head = styled.header`
    width: 100vw;
    font-family: ${props => props.theme.font.family};
`;

export const FirstDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: ${props => props.theme["blue-900"]};
    color: ${props => props.theme.white};

    h1{
        margin-left: 0.75rem;
    }

    .infoWeather{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
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
    }
`;


export const SecondDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .buttonCotainer{
        margin-right: auto;
    }

    
    .buttonHeader{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
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