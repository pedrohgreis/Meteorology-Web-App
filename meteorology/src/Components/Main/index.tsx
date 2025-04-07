import React from "react";
import { MainContainer, WeatherContainer, WeatherDataContainer, InfoWeatherContainer, CurrentCondition, WeatherIcons } from "./styles";

import {format, getHours} from "date-fns";
import {ptBR} from "date-fns/locale";

 //Icons
 import { WiNightAltCloudy, WiDaySunny, WiDayCloudy, WiRain  } from "react-icons/wi";


//* Para que o Outlet funcione, o Main precisa ser um componente que retorna JSX,
// * e não uma função que retorna um elemento JSX. Isso é necessário porque o Outlet é
//* um componente React que precisa ser renderizado dentro de um componente React. 
//* Se o Main fosse uma função que retorna um elemento JSX, o Outlet não funcionaria
//*  corretamente. Portanto, o Main deve ser um componente React que retorna JSX.

interface MainProps{
  children: React.ReactNode;
  weather?: WeatherData;
};

export interface WeatherData {
  day: Date
  location:string;
  temperature:number;
  description:string;
  humidity:number;
  windSpeed:number;
  forecast?: []
};


export const Main: React.FC<MainProps> = ({children, weather}) => {
  const date = format(weather?.day || new Date(), "dd 'de' MMMM 'de' yyyy", {locale:ptBR});
  
  const isNight = () => {
    const hour = getHours(new Date());
    if(hour >= 18 || hour < 6)
      return true;
  };

  //* Simulando dados que irão vir de uma API, para que o componente funcione corretamente
  const weatherData = {
    day: date,
    location: weather?.location || "São Paulo",
    temperature: weather?.temperature || 0,
    description: "Clear",
    humidity: weather?.humidity || 0,
    windSpeed: weather?.windSpeed || 0,
  };

  const wd = weatherData;

  
  console.log(wd.description);
  
  return (
    <MainContainer>
      <WeatherContainer $weatherCondition={wd.description} $isNight={true}>
      {/* {wd.description === "Rain" && (
        <RainVideo
          src="/video/rain.mp4"
          autoPlay
          loop
          muted
          playsInline
          
        />
      )} */}
        <WeatherDataContainer>
          <h2>{wd.day}</h2>
        </WeatherDataContainer>

        <InfoWeatherContainer>
          <span className="degrees">{wd.temperature}&deg;C</span>
        </InfoWeatherContainer>

        <WeatherIcons $weatherCondition={wd.description} $isNight={isNight() ? 1 : 0}>
            {wd.description === "Clear" && isNight() ? <WiNightAltCloudy size={92} color="#FFF"/> : false}
            {wd.description === "Clear" && !isNight() ? <WiDaySunny size={92} color="#FFF" /> : false}
            {wd.description === "Cloudy" && !isNight() ? <WiDayCloudy size={92} color="#FFF" /> : false}
            {wd.description === "Rain" && (!isNight() || isNight() ) ? <WiRain size={92} color="#FFF" /> : false}
        </WeatherIcons>

        <CurrentCondition>
          <span className="condition">{wd.description}</span>
        </CurrentCondition>
        
      </WeatherContainer>


      {children}
    </MainContainer>
  );
};