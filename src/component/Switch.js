import { useContext } from "react";
import { Button, TextField, Grid, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ThemeModeContext } from "../context/ThemeModeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';

export default function Switch (){    
  const handleToggleMode = useContext(ThemeModeContext);
  const theme = useTheme();
  return <>
    <Grid container sx={{
      justifyContent: 'center',
      alignItems: 'center',
      my: 30,
    }}>      
      <Button variant="contained" size="large"  onClick={handleToggleMode.toggleThemeMode} startIcon={theme.palette.mode === 'dark'? <LightModeIcon/> : <DarkModeIcon/>}>
        Toggle {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </Grid>    
  </>
}