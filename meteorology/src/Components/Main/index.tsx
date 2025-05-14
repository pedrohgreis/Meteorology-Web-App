import React from "react";


import { MainContainer, 
         
        ClimateStatsContainer, 
        ClimateStatsHeader,
        ThermalSensation,
        ClimateStates,
        TopRow
      } from "./styles";

import {getHours} from "date-fns";


 //Icons
 import { 
  WiHumidity,
  WiBarometer,
  WiDirectionUp
} from "react-icons/wi";

import { RiSpeedMiniFill } from "react-icons/ri";

//import { FaSun,FaArrowsAltH } from "react-icons/fa";

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
  id: number;
  day: Date;
  temperature?: number;
  description?: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  hour: Date;
  isNight: boolean;
  encoderDirection: string;
  encoderPressure: number;
  sunrise?: string;
  sunset?: string;
};


export const Main: React.FC<React.PropsWithChildren<{weather?:WeatherData}>> = ({children, weather}) => {

  const hour = weather ? weather.hour.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


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
    humidity: 0,
    pressure: 0,
    encoderDirection: "N/A",
    encoderPressure: 0
  };

  const currentWeather = weather ? {...weather, day: new Date(weather.day)} //* converte weather.day para Date
  : weatherDataDefault;

  const cw = currentWeather;



  
  
  return (
    
      <MainContainer>
        


        <ClimateStatsContainer>

          

          <ClimateStatsHeader>
            <h2>Condições térmicas - Cuiabá</h2>
          </ClimateStatsHeader>

          <h4>{hour}</h4>

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
            <WiBarometer size={25} /> {cw.pressure} hPa
          </ClimateStates>

          <ClimateStates>
            <WiDirectionUp size={25} /> {cw.encoderDirection}
          </ClimateStates>

          <ClimateStates>
            <RiSpeedMiniFill size={25} /> {cw.encoderPressure} km/h 
          </ClimateStates>
      </ClimateStatsContainer>

        {children}
      </MainContainer>
    
  );
};