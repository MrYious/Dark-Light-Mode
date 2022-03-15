import { useContext } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { ThemeModeContext } from "../context/ThemeModeContext";

export default function Switch (){    
  const handleToggleMode = useContext(ThemeModeContext);
  const theme = useTheme();
  
  return <Box>    
    <Button variant="text" onClick={handleToggleMode.toggleThemeMode}>Toggle Color</Button>
    {theme.palette.mode} mode
  </Box>
}