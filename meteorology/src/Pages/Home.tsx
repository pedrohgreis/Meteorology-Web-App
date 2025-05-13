import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { Main, WeatherData } from "../Components/Main";
import { Header } from "../Components/Header";

export const Home: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/weather")
      .then((response: any) => {
        const weatherData = Array.isArray(response.data)
          ? response.data[0]
          : response.data;

        if (!weatherData || !weatherData.date) {
          console.warn("weatherData inválido:", weatherData);
          return;
        }

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
          isNight:
            weatherData.isNight === true || weatherData.isNight === "true",
        };

        console.log("weatherData", weatherData);

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
