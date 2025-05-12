import {Routes, Route} from "react-router-dom";

//Pages
import {Home} from "./Pages/Home";
import { DefaultLayout } from "./Layouts/DefaulLayout";
import { AboutUs } from "./Pages/AboutUs";
import { LoginPage } from "./Components/Login";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index  element={<AboutUs/>}/>
                <Route path='/home' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
            </Route>
        </Routes>
        
    );
};