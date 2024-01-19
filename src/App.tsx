import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./styles/global.styles";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
