


import { ButtonLogin, CuriositySection, DeveloperContent,
    DevelopersContainer,
    DevelopersInfo,  
    Footer, 
    Header, 
    Images, 
    Info, 
    InfoSection, 
    MainAbout, 
    PersonalInfo, 
    PresentationSection
  } from "./styles";


//img
import brunoPhoto from "../../assets/imgStudents/foto_Bruno.jpg";
import nodariPhoto from "../../assets/imgStudents/foto_Nodari.jpg";
import kassioPhoto from "../../assets/imgStudents/foto_Kassio.jpg";
import Mariaphoto from "../../assets/imgStudents/foto_Maria.jpg";
import Pedrophoto from "../../assets/imgStudents/photo_Pedro.jpg";
import Thiagophoto from "../../assets/imgStudents/foto_Thiago.jpg";
import meteorologyStation from "../../assets/estacao_meteorologica/estacao_meteorologica.jpg";
import meteorologyStationHardware from "../../assets/estacao_meteorologica/estacao_meteorologica-hardware.jpg";

import { useNavigate } from "react-router-dom";


export const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <Header>
          <h1>Weather App</h1>
    
          <ButtonLogin onClick={handleNavigate}>Login</ButtonLogin>
      </Header>
      <MainAbout >
        <PresentationSection>
          <div>
            <p>This project was developed by 6 students from UFMT</p>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo $background={brunoPhoto}/>
                    <PersonalInfo>
                      <h3>Bruno Lopes</h3>
                      <h4>Engenharia de Controle e Automação</h4>
                      <p>Trabalhou com o Hardware</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={true}> */}
                <DeveloperContent $alignright={false.toString()}>
                  <DevelopersInfo $background={nodariPhoto}/>
                    <PersonalInfo>
                      <h3>Gabriel Nodari</h3>
                      <h4>Engenharia de Computação</h4>
                      <p>Trabalhou com o Hardware</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo $background={kassioPhoto} />
                    <PersonalInfo>
                      <h3>Kassio</h3>
                      <h4>Engenharia de Computação</h4>
                      <p>Trabalhou no back-end</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={true}> */}
                <DeveloperContent $alignright={false.toString()}>
                  <DevelopersInfo $background={Thiagophoto}/>
                    <PersonalInfo>
                      <h3>Thiago Vinícius</h3>
                      <h4>Engenharia de Computação</h4>
                      <p>Trabalhou no back-end</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo $background={Mariaphoto}/>
                    <PersonalInfo>
                      <h3>Maria Vittória</h3>
                      <h4>Engenharia de Computação</h4>
                      <p>Trabalhou no front-end</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>


            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={true}> */}
                <DeveloperContent $alignright={false.toString()}>
                <DevelopersInfo $background={Pedrophoto}/>
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Engenharia de Computação</h4>
                      <p>Trabalhou no front-end</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            
          </div>
        </PresentationSection>


        <InfoSection
          initial={{opacity: 0, y:40}}
          whileInView={{opacity: 1, y: 0}} // aparece suavemente
          viewport={{once: true, amount: 0.3}} // só anima uma vez, quando 20% estiver visível.
          transition={{duration: 0.9, ease: "easeInOut"}} //tempo e suavidade
        >

              <Info>
                <p>
                  This project was made for the subject of embedded systems. The project was divided into multiple workstreams, including
                  frontend development, User Experience, backend development and Hardware development. The purpose was creating a meteorology station.
                </p>

                <p>
                  At first we are not focusing on showing the prediction, just the temperature itself. Actually more than that
                  like pressure, wind speed, UV radiations and some more.
                </p>

                <p>For now we'll be messuring only in our city, Cuiabá - Mato Grosso</p>
            </Info>

            <Images>
              <img src={meteorologyStation} alt="Meteorology Station" />
              <img src={meteorologyStationHardware} alt="Meteorology Station Hardware" />
            </Images>

          </InfoSection>

          <CuriositySection 
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.3, ease: "easeOut"}}
          >
            <h3>Curiosities about the weather in Cuiabá</h3>

            <div>
              <ul>
                <li>🌡️ In 2020, Cuiabá reached 44.5°C — with a heat index over 50°C!</li>
                <li>💨 Winds over 50 km/h are common during cold fronts.</li>
                <li>🌞 UV radiation here is usually extremely high.</li>
              </ul>


              <iframe 
                width="100%" 
                height="450" 
                src="https://embed.windy.com/embed2.html?lat=-15.601&lon=-56.0979&detailLat=-15.601&detailLon=-56.0979&zoom=10&level=surface&overlay=temperature&menu=false&message=false&marker=true&calendar=now&pressure=false&type=map&location=coordinates&detail=false&metricWind=default&metricTemp=default&radarRange=-1" 
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>

          </CuriositySection>
      </MainAbout>
      <Footer 
        initial={{opacity: 0, y:40}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.4}}
        transition={{duration: 0.4, ease: "easeOut"}}
      >
        <p>
          <strong>
            <em>Academic Project — Weather Station | Embedded Systems - UFMT</em>
          </strong>
        </p>
      </Footer>
    </>
  );
};

