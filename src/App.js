import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Switch from './components/Switch';
import ThemeModeContext from './context/ThemeModeContext';

function App() {
  //State for the current mode [dark or light]
  const [mode, setMode] = useState('light');

  //Object for value of the ThemeModeContext 
  const themeMode = {
    toggleThemeMode: () => {
      setMode((prev) => prev === 'light'? 'dark': 'light')
    }
  }

  //Theme for MUI ThemeContext 
  const theme = createTheme({
    palette: {
      mode,
    },
  })

  return (<>
    <ThemeProvider theme={theme}>
      <ThemeModeContext.Provider value={themeMode}>       
        <Switch/>
      </ThemeModeContext.Provider>
    </ThemeProvider>
  </>);
  
}

export default App;
