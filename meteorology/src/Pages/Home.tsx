import React from "react";

import { Outlet } from "react-router-dom";
import { Main, WeatherData } from "../Components/Main";
import { Header } from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home: React.FC<{weather:WeatherData}> = () => {

    const [weather, setWeather] = useState<WeatherData | null>(null);
    
        useEffect(() => {
          axios
            .get("")
            .then((response:any) => {
              const weatherData = response.data[3];
      
              const [day, month, year] = weatherData.date.split("-");
              const dayHour = new Date(`${year}-${month}-${day}`);
      
              const dayConverter: WeatherData = {
                ...response.data,
                id: Number(weatherData.id),
                day: isNaN(dayHour.getTime()) ? new Date() : dayHour,
                temperature: Number(weatherData.temperature),
                description: weatherData.description,
                humidity: Number(weatherData.humidity),
                windSpeed: Number(weatherData.windSpeed),
                location: weatherData.location,
                isNight: weatherData.isNight === true || weatherData.isNight === "true",
              };

              console.log(dayConverter);
      
              setWeather(dayConverter);
            })
            .catch((error: unknown) => {
              console.log(error);
            });
        }, []);







    return (
      <div>
        <Header weather={weather ?? undefined} />
        <Outlet />
        <Main weather={weather ?? undefined} />
        
      </div>
    );
  };
  