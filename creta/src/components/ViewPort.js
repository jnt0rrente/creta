import { Box } from "@mui/material";
import MainPage from "./mainpage/MainPage"

export default function ViewPort() {

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', width: "50%", justifyContent: "center", mt: '4em'}}>
                <MainPage/>
            </Box>
        </Box>
    );
}

