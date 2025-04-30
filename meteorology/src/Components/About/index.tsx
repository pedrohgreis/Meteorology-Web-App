


import { ButtonLogin, CuriositySection, DeveloperContent,
    DevelopersContainer,
    DevelopersInfo, 
    DivHeader, 
    Footer, 
    Header, 
    Info, 
    InfoSection, 
    MainAbout, 
    PersonalInfo, 
    PresentationSection
  } from "./styles";


export const About = () => {

  return (
    <>
      <Header>
          <h1>Weather App</h1>
    
          <ButtonLogin>Login</ButtonLogin>
      </Header>
      <MainAbout >
        <PresentationSection>
          <div>
            <p>This project was developed by 6 students from UFMT</p>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo />
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Student at UFMT</h4>
                      <p>Worked on this project as a frontend developer</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={true}> */}
                <DeveloperContent $alignright={false.toString()}>
                  <DevelopersInfo />
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Student at UFMT</h4>
                      <p>Worked on this project as a frontend developer</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo />
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Student at UFMT</h4>
                      <p>Worked on this project as a frontend developer</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={true}> */}
                <DeveloperContent $alignright={false.toString()}>
                  <DevelopersInfo />
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Student at UFMT</h4>
                      <p>Worked on this project as a frontend developer</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo />
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Student at UFMT</h4>
                      <p>Worked on this project as a frontend developer</p>
                    </PersonalInfo>
                </DeveloperContent>
              {/* </DeveloperWrapper> */}
            </DevelopersContainer>


            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={true}> */}
                <DeveloperContent $alignright={false.toString()}>
                <DevelopersInfo />
                    <PersonalInfo>
                      <h3>Pedro Reis</h3>
                      <h4>Student at UFMT</h4>
                      <p>Worked on this project as a frontend developer</p>
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
                src="https://embed.windy.com/embed2.html?lat=-15.601&lon=-56.0979&detailLat=-15.601&detailLon=-56.0979&zoom=10&level=surface&overlay=temperature&menu=false&message=false&marker=true&calendar=now&pressure=false&type=map&location=coordinates&detail=false&metricWind=default&metricTemp=default&radarRange=-1" >
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

