import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
      } from "./styles";

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
  id:number,
  day: Date
  location:string;
  temperature:number;
  description:string;
  humidity:number;
  windSpeed:number;
  isNight: boolean;
  forecast?: []
};


export const Main: React.FC<MainProps> = ({children}) => {



  const [weather,setWeather] = useState<WeatherData | null>(null);


  //Consumindo a API 
  useEffect(() => {
    axios.get("http://localhost:3001/weather")
    .then(response => {

      const dayHour = new Date(response.data.day);
      
      //* convertendo dados, pois vem como string
      const dayConverter: WeatherData = {
        ...response.data,
        id: Number(response.data.id),
        day:  isNaN(dayHour.getTime()) ? new Date() : dayHour,
        temperature: Number(response.data.temperature),
        humidity: Number(response.data.humidity),
        windSpeed: Number(response.data.windSpeed),
        isNight: getHours(new Date()) >= 18 || getHours(new Date()) < 6
      };

      setWeather(dayConverter);
    })

    .catch(error => {
      console.log(error);
    });


  },[]);




  const date = format(weather?.day || new Date(), "dd 'de' MMMM 'de' yyyy", {locale:ptBR});
  
  // const isNight = () => {
  //   const hour = getHours(new Date());
  //   if(hour >= 18 || hour < 6)
  //     return true;
  // };

  //* Dados da API
  const weatherData = {
    id: weather?.id,
    day: date,
    location: weather?.location ,
    temperature: weather?.temperature,
    description: weather?.description,
    humidity: weather?.humidity,
    windSpeed: weather?.windSpeed,
    isNight: weather?.isNight
  };

  const wd = weatherData;

  
  console.log(wd.description);
  
  return (
    <MainContainer>
      <WeatherContainer $weatherCondition={wd.description || "Unknown"} >
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

        <WeatherIcons $weatherCondition={wd.description || "Unknown"} $isNight={wd.isNight}>

            {wd.description === "Clear" && wd.isNight === true ? <WiNightAltCloudy size={92} color="#FFF"/> : false}
            {wd.description === "Clear" && wd.isNight === false ? <WiDaySunny size={92} color="#FFF" /> : false}
            {wd.description === "Cloudy" && wd.isNight === false ? <WiDayCloudy size={92} color="#FFF" /> : false}
            {wd.description === "Rain" && (wd.isNight === true || wd.isNight === false ) ? <WiRain size={92} color="#FFF" /> : false}
        </WeatherIcons>

        <CurrentCondition>
          <span className="condition">{wd.description}</span>
        </CurrentCondition>
        
      </WeatherContainer>


      <ClimateStatsContainer>
        
        <ClimateStatsHeader>
          <h2>Condições térmicas de {wd.location}</h2>
        </ClimateStatsHeader>

        <ThermalSensation>
          {wd.temperature}&deg;C
        </ThermalSensation>

        <ClimateStates>
          Pression
        </ClimateStates>

        <ClimateStates>
          Wind
        </ClimateStates>

        <ClimateStates>
          Humidity
        </ClimateStates>
        
      </ClimateStatsContainer>


      {children}
    </MainContainer>
  );
};