import ImportButton from "./ImportButton";
import { Typography, Box } from "@mui/material";
import CreateCustomButton from "./CreateCustomButton";
import { useState } from "react";

export default function ViewPort() {
    const [fileContent, setFileContent] = useState('')
    return (
        <>
            <Box direction="column" justifyContent="center" alignItems="left" alignSelf="left">
                <ImportButton setFileContent={setFileContent}/>
                <CreateCustomButton/>
                <Typography>{fileContent}</Typography>
            </Box>
        </>
    );
}

