import { useContext } from "react";
import { Button, Container, Box, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ThemeModeContext } from "../context/ThemeModeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Switch (){    
  const handleToggleMode = useContext(ThemeModeContext);
  const theme = useTheme();

  return <>
    <Container maxWidth="sm">
      <Button variant="outlined" onClick={handleToggleMode.toggleThemeMode}>
        {theme.palette.mode === 'light'? <LightModeIcon/> : <DarkModeIcon/>}
      </Button>
    </Container>    
  </>
}