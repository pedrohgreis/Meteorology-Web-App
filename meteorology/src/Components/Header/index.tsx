import React from "react";


import { NavLink } from "react-router-dom";

import {Head, FirstDiv, SecondDiv, ThirdDiv, SearchForm, InputForm, DivForm} from "./styles";

// icons
import * as WeatherIcons from "react-icons/wi"; 

import { WeatherData } from "../Main";

import { DynamicIcons } from "../DynamicIcons";
import { FaSearch } from "react-icons/fa";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { BsArrowClockwise } from "react-icons/bs";







export const Header: React.FC<{weather?: WeatherData}> = ({ weather }) => {

  const handleNavigate = () => {
    window.location.href = "/home";
    console.log("Updating weather data...");
  };


  const defaultWeather: WeatherData = {
    id: 0,
    isNight: false,
    day: new Date(),
    temperature: 0,
    description: "Unknown",
    humidity: 0,
    windSpeed: 0,
    pressure: 0,
    encoderDirection: "",
    encoderPressure: 0,
  };



  const currentWeather = weather || defaultWeather;
  const cw = currentWeather;

  const weatherIconsMap: Record<string, keyof typeof WeatherIcons> = {
    "ClearDay": "WiDaySunnyOvercast",
    "ClearNight": "WiNightClear",
    "CloudyDay": "WiCloudy",
    "CloudyNight": "WiCloudy",
    "RainDay": "WiRain",
    "RainNight": "WiRain",
    "SnowDay": "WiSnow",
    "SnowNight": "WiSnow",
    "ThunderstormDay": "WiThunderstorm",
    "ThunderstormNight": "WiThunderstorm",
  };

  const iconKey = `${cw.description}${cw.isNight ? "Night" : "Day"}` as keyof typeof weatherIconsMap;
  const iconName = weatherIconsMap[iconKey] || "WiDaySunnyOvercast";

  
  return(
    <Head>
      <FirstDiv>
        <div className="infoWeather">
         <DynamicIcons name={iconName} size={32} className="icon" />
          <h1>Weather App</h1>
        </div>

        <SearchForm>
          <DivForm>
            <InputForm placeholder="Search" />
            <button><FaSearch /></button>
          </DivForm>
        </SearchForm>

        <div className="signUp">
          <button type="button" className="signingUp">Sign Up</button>
        </div>
        
      </FirstDiv>

      <SecondDiv>
        <div className="content">
          <h2>Weather</h2> 
          <WiDaySunnyOvercast size={24} color="#FFD700" />
          {/* <span>{cw.temperature} &deg;C {cw.location}</span> */}
          <span>{cw.temperature} &deg;C</span>
        
          <div className="buttonContainer">
            <button type="submit" className="buttonHeader" onClick={handleNavigate}>
              <BsArrowClockwise size={24} color="#FFF" /> Update
            </button>
          </div>
        </div>
      </SecondDiv>

      <ThirdDiv>
        <nav className="nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Forecast</NavLink>
          <NavLink to={"/"}>Pression</NavLink>
          <NavLink to={"/"}>Wind</NavLink>
        </nav>
      </ThirdDiv>
    </Head>
  );
};

















