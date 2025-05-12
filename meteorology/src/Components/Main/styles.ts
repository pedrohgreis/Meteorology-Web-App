import styled from "styled-components";

// imagens
import dayImage from "../../assets/img/day.jpg";
import nightImage from "../../assets/img/night.jpg";
import cloudyImage from "../../assets/img/cloudy.jpg";
import cloudyNightImage from "../../assets/img/cloudy_night.jpg";
import rain from "../../assets/img/rain.jpg";

export interface weatherContainerProps<T>{
    $weatherCondition: string;
    $isNight?: T;
}

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    background-color: ${({theme}) => theme["gray-200"]};

    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const WeatherContainer = styled.div<weatherContainerProps<boolean>>`
    position: relative;
    min-height: 24rem;
    width: 24rem;
    margin: 2rem auto 0 auto;
    border-radius: 8px;
    box-shadow: 0 0 8px ${({theme}) => theme["blue-100"]};
    background-color: ${({theme}) => theme.white};
    overflow: hidden;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-image: ${({$weatherCondition, $isNight}) => {
        if ($weatherCondition === "Clear" && !$isNight) return `url(${dayImage})`;
        if ($weatherCondition === "Clear" && $isNight) return `url(${nightImage})`;
        if ($weatherCondition === "Cloudy" && !$isNight) return `url(${cloudyImage})`;
        if ($weatherCondition === "Cloudy" && $isNight) return `url(${cloudyNightImage})`;
        if ($weatherCondition === "Rain") return `url(${rain})`;
        if ($weatherCondition === "Drizzle") return `url(${rain})`;
        return "none";
    }};


    //* Adapted screen
    @media (min-width: 1024px) {
        width: 58rem;
    }

`;

// Estilo para o vídeo de fundo
// export const RainVideo = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   z-index: -1;
// `;

export const WeatherDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6rem;
  

    background-color: ${({theme}) => theme["blue-500"]};
    opacity: 0.75;

    h2{
        font-size: 1rem;
        color: ${({theme}) => theme.white};
    }
`;

export const InfoWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-top: 5rem;
    font-family: ${({theme}) => theme.font.family};
    font-size: 4rem;

    .degrees{
       width: 100%;
       text-align: left;
       padding-left: 1rem;
       color: ${({theme}) => theme.white};
    }
`;

export const CurrentCondition = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 2rem;
    background-color: transparent;
    color: ${({theme}) => theme.white};
    font-family: ${({theme}) => theme.font.family};
    font-size: 2rem;

    .condition{
        width: 100%;
        padding-left: 1rem;
    }
`;

export const WeatherIcons = styled.div<weatherContainerProps<boolean>>`
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 50%;
    top: 42%;

    
    @media (min-width: 768px) {
         
         svg{
            width: 6rem;
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: 50%;
            top: 42%;

         }

    }

    @media (min-width: 1024px) {
        svg{
            width: 6rem;
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: 50%;
            top: 52%;

         }

    }
`;


export const ClimateStatsContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    min-height: 24rem;
    width: 25rem;
    margin: 2rem auto 0 auto;
    border-radius: 8px;
    box-shadow: 0 0 8px ${({theme}) => theme["blue-100"]};
    background-color: ${({theme}) => theme.white};

    @media (min-width: 1024px) {
        width: 58rem;
    }
    
`;

export const ClimateStatsHeader = styled.header`
    background-color: transparent;
    color:  ${({theme}) => theme["gray-400"]};
    font-family: ${({theme}) => theme.font.medium};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`;



export const ThermalSensation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme["gray-400"]};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 4rem;
  margin-right: 1rem;

  @media (min-width: 768px){
    margin-left: 3rem;
  }
    
`;

export const ClimateStates = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 17rem;
    width: 100%;
    font-family: ${({theme}) => theme.font.family};
    
    
    border-bottom: 1px solid ${({theme}) => theme["gray-200"]};
    height: 3rem;
    margin-left: 1rem;
    background-color: transparent;

    @media (min-width: 768px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 45rem;
    }

    svg {
    color: ${({theme}) => theme["gray-600"]}; /* Cor do ícone */
    stroke-width: 2.5; /* Aumenta a espessura dos traços */
    
    @media (min-width: 768px){
        margin-left: 3rem;
    }
  }
  
`;


