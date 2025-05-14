import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { Main, WeatherData } from "../Components/Main";
import { Header } from "../Components/Header";

export const Home: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData[]>([]);
  

 useEffect(() => {
  axios
    .get("http://vps49762.publiccloud.com.br:7070/climas")
    .then((response: any) => {
      const weatherData = response.data;

      if (!Array.isArray(weatherData) || weatherData.length === 0) {
        console.warn("weatherData inválido:", weatherData);
        return;
      }

      const convertedWeatherData: WeatherData[] = weatherData.map((item: any) => {
        const dayHour = new Date(item.Data_coleta);

        return {
          id: Math.floor(Math.random() * 1000),
          day: isNaN(dayHour.getTime()) ? new Date() : dayHour,
          hour: isNaN(dayHour.getTime())
            ? new Date()
            : new Date(dayHour.getFullYear(), dayHour.getMonth(), dayHour.getDate(), dayHour.getHours()),
          temperature: Number(item.temperatura),
          humidity: Number(item.umidade),
          pressure: Number(item.pressao),
          windSpeed: Number(item.frequencia_vento),
          encoderDirection: item.direcao_encoder,
          encoderPressure: Number(item.posicao_encoder),
          description: item.description ?? "",
          isNight: item.isNight === true || item.isNight === "true",
        };
      });

      console.log("weatherData convertido:", convertedWeatherData);

     setWeather([convertedWeatherData[convertedWeatherData.length - 1]]);

    })
    .catch((error: unknown) => {
      console.log(error);
    });
}, []);


  return (
    <div>
      <Header weather={weather.length > 0 ? weather[weather.length - 1] : undefined} />
      <Outlet />
      <Main weather={weather.length > 0 ? weather[weather.length - 1] : undefined} />

    </div>
  );
};
