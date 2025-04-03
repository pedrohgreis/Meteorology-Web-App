import {Routes, Route} from "react-router-dom";

//Pages
import {Home} from "./Pages/Home";
import { DefaultLayout } from "./Layouts/DefaulLayout";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
        
    );
};