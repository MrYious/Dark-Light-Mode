import { useContext } from "react";
import { Button, Container, Box, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { ThemeModeContext } from "../context/ThemeModeContext";
import SimpleAccordion from "./Accordion";

export default function Switch (){    
  const handleToggleMode = useContext(ThemeModeContext);
  const theme = useTheme();

  console.log(theme);

  return <>
    <Container maxWidth={"sm"}>
      <Button variant="contained" onClick={handleToggleMode.toggleThemeMode}>Toggle Color</Button>
      <SimpleAccordion/>
      <Box >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </Container>    
  </>
}