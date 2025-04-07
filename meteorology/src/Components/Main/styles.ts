import styled from "styled-components";

// imagens
import dayImage from "../../assets/img/day.jpg";
import nightImage from "../../assets/img/night.jpg";
import cloudyImage from "../../assets/img/cloudy.jpg";
import cloudyNightImage from "../../assets/img/cloudy_night.jpg";
import rain from "../../assets/img/rain.jpg";

interface weatherContainerProps<T>{
    $weatherCondition: string;
    $isNight: T;
}

export const MainContainer = styled.main`
    position: relative;
    grid-area: cintent;
    height: calc(100vh - 16rem);
    background-color: ${({theme}) => theme["gray-200"]};
`;


export const WeatherContainer = styled.div<weatherContainerProps<boolean>>`
    position: relative;
    height: 25rem;
    width: 25rem;
    margin-top: 6rem;
    margin-left: 3rem;
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

export const WeatherIcons = styled.div<weatherContainerProps<number>>`
    position: absolute;
    left: 42%;
    right: 50%;
    bottom: 50%;
    top: 42%;
`;


