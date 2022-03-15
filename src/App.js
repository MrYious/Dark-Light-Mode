import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { ThemeModeContext } from './context/ThemeModeContext';
import Switch from './component/Switch';

function App() {
  //State for the current mode [dark or light]
  const [mode, setMode] = useState('light');

  //Object for value of the ThemeModeContext 
  const themeMode = {
    toggleThemeMode: () => {
      setMode((prev) => prev === 'light'? 'dark': 'light')
    }
  };

  //Theme for MUI ThemeContext 
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (<>
    <ThemeModeContext.Provider value={themeMode}>    
      <ThemeProvider theme={theme}>  
          <Switch/>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  </>);
  
}

export default App;
