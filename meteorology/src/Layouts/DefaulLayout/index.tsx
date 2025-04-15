import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";
import { Main } from "../../Components/Main/index";
import { Aside } from "../../Components/Aside";
import { WeatherData } from "../../Components/Main/index";
import { useState, useEffect } from "react";
import axios from "axios";

export const DefaultLayout: React.FC<{weather:WeatherData}> = () =>{

    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
      axios
        .get("http://localhost:3001/weather")
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
  
          setWeather(dayConverter);
        })
        .catch((error: unknown) => {
          console.log(error);
        });
    }, []);


    return(

        <LayoutContainer>
            <Header weather={weather ?? undefined} />
            <main>
                <Main weather={weather ?? undefined}>
                    <Outlet />
                </Main>

                <Aside>
                    <Outlet />
                </Aside>
            </main>
        </LayoutContainer>
    );
};