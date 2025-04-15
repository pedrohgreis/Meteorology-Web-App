import React from "react";


import { NavLink } from "react-router-dom";

import {Head, FirstDiv, SecondDiv, ThirdDiv, SearchForm, InputForm, DivForm} from "./styles";

// icons
import {GlobeHemisphereWest} from "phosphor-react";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { BsArrowClockwise } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import { WeatherData } from "../Main";




export const Header: React.FC<{weather?: WeatherData}> = ({ weather }) => {
  const defaultWeather: WeatherData = {
    id: 0,
    isNight: false,
    day: new Date(),
    location: "Unknown",
    temperature: 0,
    description: "Unknown",
    humidity: 0,
    windSpeed: 0,
  };

  const currentWeather = weather || defaultWeather;
  const cw = currentWeather;
  
  return(
    <Head>
      <FirstDiv>
        <div className="infoWeather">
          <GlobeHemisphereWest size={34} />
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
          <span>{cw.temperature} &deg;C {cw.location}</span>
        </div>
        
        <div className="buttonContainer">
          <button type="submit" className="buttonHeader">
            <BsArrowClockwise size={24} color="#FFF" /> Update
          </button>
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

















