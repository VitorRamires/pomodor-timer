import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from "./styles/global"
import { Router } from './pages/Router';
import { BrowserRouter } from 'react-router-dom';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App