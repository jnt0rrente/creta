import ImportButton from "./ImportButton";
import { Box } from "@mui/material";
import CreateCustomButton from "./CreateCustomButton";
import { useState } from "react";
import Table from "../custom/Table";

export default function ViewPort() {
    const [matrix, setMatrix] = useState()

    return (
        <>
            <Box direction="column" justifyContent="center" alignItems="left" alignSelf="left">
                <Table matrix={matrix}/>
                
                <ImportButton setMatrix={setMatrix}/>
                <CreateCustomButton/>                
            </Box>
        </>
    );
}

