import ImportButton from "./ImportButton";
import { Box } from "@mui/material";
import CreateCustomButton from "./CreateCustomButton";
import { useState } from "react";
import Table from "../custom/Table";

export default function ViewPort() {
    const [matrix, setMatrix] = useState()

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <Table matrix={matrix}/>
                
                <Box display="flex" flexDirection="row" justifyContent="space-evenly" paddingTop="1em">
                    <ImportButton setMatrix={setMatrix}/>
                    <CreateCustomButton/>  
                </Box>        
            </Box>
        </>
    );
}

