import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./styles/global.styles";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
