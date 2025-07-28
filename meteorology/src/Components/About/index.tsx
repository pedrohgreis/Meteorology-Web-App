import { ButtonLogin, CuriositySection, DeveloperContent,
    DevelopersContainer,
    DevelopersInfo,  
    Footer, 
    Header, 
    Images, 
    Info, 
    InfoSection, 
    Lang, 
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
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";


export const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <Header>
          <Lang>
            <LanguageSwitcher />
          </Lang>
          <h1>{t("weather_app")}</h1>
          <ButtonLogin onClick={handleNavigate}>{t("login")}</ButtonLogin>
      </Header>
      <MainAbout >
        <PresentationSection>
          <div>
            <p>{t("project_description")}</p>

            <DevelopersContainer>
              {/* <DeveloperWrapper alignRight={false}> */}
                <DeveloperContent $alignright={true.toString()}>
                  <DevelopersInfo $background={brunoPhoto}/>
                    <PersonalInfo>
                      <h3>Bruno Lopes</h3>
                      <h4>{t("control_engineering")}</h4>
                      <p>{t("bruno_role")}</p>
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
                      <h4>{t("computer_engineering")}</h4>
                      <p>{t("gabriel_role")}</p>
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
                      <h4>{t("computer_engineering")}</h4>
                      <p>{t("kassio_role")}</p>
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
                      <h4>{t("computer_engineering")}</h4>
                      <p>{t("thiago_role")}</p>
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
                      <h4>{t("computer_engineering")}</h4>
                      <p>{t("maria_role")}</p>
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
                      <h4>{t("computer_engineering")}</h4>
                      <p>{t("pedro_role")}</p>
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
                  {t("embedded_systems")}
                </p>

                <p>
                  {t("temperature_focus")}
                </p>

                <p>{t("location_focus")}</p>
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
            <h3>{t("curiosities_title")}</h3>

            <div>
              <ul>
                <li>{t("curiosity_1")}</li>
                <li>{t("curiosity_2")}</li>
                <li>{t("curiosity_3")}</li>
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
            <em>{t("footer_text")}</em>
          </strong>
        </p>
      </Footer>
    </>
  );
};

