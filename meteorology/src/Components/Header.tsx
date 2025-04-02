import {Head, FirstDiv, SecondDiv, ThirdDiv} from "./Header.styles";

// icons
import {GlobeHemisphereWest} from "phosphor-react";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { BsArrowClockwise } from "react-icons/bs";

export const Header = () => {
  return(
    <Head>
      <FirstDiv>
        <div className="infoWeather">
          <GlobeHemisphereWest size={34} />
          <h1>Weather App</h1>
        </div>

        <div className="signUp">
          <button type="button" className="signingUp">Sign Up</button>
        </div>
        
      </FirstDiv>

      <SecondDiv>
        <div className="content">
          <h2>Weather</h2> 
          <WiDaySunnyOvercast size={24} color="#FFD700" />
          <span>31 &deg;C Cuiabá, Mato Grosso</span>
        </div>
        
        <div className="buttonContainer">
          <button type="submit" className="buttonHeader">
            <BsArrowClockwise size={24} color="#FFF" /> Update
          </button>
        </div>
      </SecondDiv>

      <ThirdDiv>
        <nav className="nav">
          <ul className="navList">
            <li className="navItem"><a href="#">Home</a></li>
            <li className="navItem"><a href="#">Forecast</a></li>
            <li className="navItem"><a href="#">Pression</a></li>
            <li className="navItem"><a href="#">Wind</a></li>
          </ul>
        </nav>
      </ThirdDiv>
    </Head>
  );
};