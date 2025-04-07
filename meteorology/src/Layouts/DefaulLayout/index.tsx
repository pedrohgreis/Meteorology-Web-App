import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LayoutContainer } from "./styles";
import { Main } from "../../Components/Main/index";
import { Aside } from "../../Components/Aside";
import { WeatherData } from "../../Components/Main/index";

export const DefaultLayout: React.FC<{weather:WeatherData}> = ({ weather }) =>{

    return(

        <LayoutContainer>
            <Header weather={weather} />
            <main>
                <Main>
                    <Outlet />
                </Main>

                <Aside>
                    <Outlet />
                </Aside>
            </main>
        </LayoutContainer>
    );
};