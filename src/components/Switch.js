import { Checkbox } from "@mui/material"
import { Box } from "@mui/system"

export default function Switch (){
    return <Box>
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox />
      <Checkbox checked />
    </Box>
}