import styled from "styled-components";

export const Login = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to bottom, #141e30, #243b55);
    background-size: 200% 200%;
    animation: subtleNight 20s ease-in-out infinite alternate;
    
    @keyframes subtleNight {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 100%;
        }
    }
`;

export const LoginRegistered = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;


    width: 25rem;
    height: 35rem;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.85);
    border-radius: 8px;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;

    .form-grup{
        display: flex;
        flex-direction: column;
    }

    label{
        font-family: ${({theme}) => theme.font.family};
        color: ${({theme}) => theme.white};
    }

    input{
        width: 16rem;
        padding: 0.65rem 1rem;
        border-radius: 8px;
        border: none;
        box

        ::placeholder{
            font-family: ${({theme}) => theme.font.family};
            font-weight: ${({theme}) => theme.font.regular};
            font-size: ${({theme}) => theme.font.size};
        }

        &:focus{
            outline: none;
            border: 1px solid #00bcd4;
            box-shadow: 0 0 10px rgba(0, 188, 212, 0.5);
        }
    }
`;
