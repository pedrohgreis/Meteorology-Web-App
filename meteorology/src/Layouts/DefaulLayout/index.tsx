
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";


export const DefaultLayout = () =>{

    


    return(

        <LayoutContainer>
            
            <main>
              
              <Outlet />
                

            </main>
        </LayoutContainer>
    );
};