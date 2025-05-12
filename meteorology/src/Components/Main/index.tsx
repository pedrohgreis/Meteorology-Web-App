import React from "react";


import { MainContainer, 
        WeatherContainer, 
        WeatherDataContainer, 
        InfoWeatherContainer, 
        CurrentCondition, 
        WeatherIcons, 
        ClimateStatsContainer, 
        ClimateStatsHeader,
        ThermalSensation,
        ClimateStates,
        TopRow
      } from "./styles";

import {format, getHours} from "date-fns";
import {ptBR} from "date-fns/locale";

 //Icons
 import { 
  WiNightAltCloudy,
  WiDaySunny,
  WiDayCloudy, 
  WiRain,
  WiHumidity
} from "react-icons/wi";

import { FaSun,FaArrowsAltH } from "react-icons/fa";

import { FiWind } from "react-icons/fi";
import SunArc from "../SunArc";






//* Para que o Outlet funcione, o Main precisa ser um componente que retorna JSX,
// * e não uma função que retorna um elemento JSX. Isso é necessário porque o Outlet é
//* um componente React que precisa ser renderizado dentro de um componente React. 
//* Se o Main fosse uma função que retorna um elemento JSX, o Outlet não funcionaria
//*  corretamente. Portanto, o Main deve ser um componente React que retorna JSX.

// interface MainProps{
//   children: React.ReactNode;
//   weather?: WeatherData;
// };

export interface WeatherData {
  id:number,
  day: Date
  location:string;
  temperature:number;
  description:string;
  humidity:number;
  windSpeed:number;
  isNight: boolean;
  forecast?: [],
  sunrise?: string,
  sunset?: string
};


export const Main: React.FC<React.PropsWithChildren<{weather?:WeatherData}>> = ({children, weather}) => {


  
  
  // const isNight = () => {
  //   const hour = getHours(new Date());
  //   if(hour >= 18 || hour < 6)
  //     return true;
  // };

  //* Dados da API
  const weatherDataDefault = {
    id: 0,
    day: new Date(),
    location: "Unknown" ,
    temperature: 0,
    description: "Unknown",
    isNight: getHours(new Date()) >= 18 || getHours(new Date()) < 6,
    sunrise: "06:00",
    sunset: "18:00",
    windSpeed: 0,
    humidity: 0
  };

  const currentWeather = weather ? {...weather, day: new Date(weather.day)} //* converte weather.day para Date
  : weatherDataDefault;

  const cw = currentWeather;


  console.log(cw.description);
  
  
  return (
    
      <MainContainer>
        <WeatherContainer $weatherCondition={cw.description || "Unknown"} >
        {/* {cw.description === "Rain" && (
          <RainVideo
            src="/video/rain.mp4"
            autoPlay
            loop
            muted
            playsInline
            
          />
        )} */}
          <WeatherDataContainer>
            <h2>{cw.day ? format(cw.day, "dd 'de' MMMM 'de' yyyy", {locale: ptBR}) : "Invalid Date"}</h2>
          </WeatherDataContainer>

          <InfoWeatherContainer>
            <span className="degrees">{typeof cw.temperature === "number" ? cw.temperature : 0}&deg;C</span>
          </InfoWeatherContainer>

          <WeatherIcons $weatherCondition={cw.description || "Unknown"} $isNight={cw.isNight}>

              {cw.description === "Clear" && cw.isNight === true ? <WiNightAltCloudy size={92} color="#FFF"/> : false}
              {cw.description === "Clear" && cw.isNight === false ? <WiDaySunny size={92} color="#FFF" /> : false}
              {cw.description === "Cloudy" && cw.isNight === false ? <WiDayCloudy size={92} color="#FFF" /> : false}
              {cw.description === "Rain" && (cw.isNight === true || cw.isNight === false ) ? <WiRain size={92} color="#FFF" /> : false}
          </WeatherIcons>

          <CurrentCondition>
            <span className="condition">{cw.description}</span>
          </CurrentCondition>
          
        </WeatherContainer>


        <ClimateStatsContainer>

          <ClimateStatsHeader>
            <h2>Condições térmicas - {cw.location}</h2>
          </ClimateStatsHeader>

          <TopRow>
            <ThermalSensation>
              {typeof cw.temperature === "number" ? cw.temperature : 0}°C
            </ThermalSensation>
            <SunArc sunrise={cw.sunrise || "06:00"} sunset={cw.sunset || "18:00"} />
          </TopRow>

          <ClimateStates>
            <WiHumidity size={25} /> {cw.humidity || "--"}%
          </ClimateStates>

          <ClimateStates>
            <FiWind size={25} /> {cw.windSpeed} km/h
          </ClimateStates>

          <ClimateStates>
            <FaArrowsAltH size={25} /> {cw.description}
          </ClimateStates>

          <ClimateStates>
            <FaSun size={25} /> índice UV
          </ClimateStates>
      </ClimateStatsContainer>

        {children}
      </MainContainer>
    
  );
};