
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./Styles/Themes/default";
import { GlobalStyle } from "./Styles/global";


function App() {
  

  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
