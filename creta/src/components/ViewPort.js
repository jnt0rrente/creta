import { Box } from "@mui/material";
import StartPage from "./startpage/StartPage"

export default function ViewPort() {

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: "50%", justifyContent: "center", mt: '4em'}}>
                <StartPage/>
            </Box>
        </Box>
    );
}

