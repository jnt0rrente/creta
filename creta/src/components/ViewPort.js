import CreateCustomButton from "./startpage/CreateCustomButton";
import ImportButton from "./startpage/ImportButton";

import { useState } from "react";
import { Typography } from "@mui/material";

export default function ViewPort() {
    const [fileContent, setFileContent] = useState('')

    return (
        <>
            <ImportButton setFileContent={setFileContent}/>
            <CreateCustomButton/>
            <Typography>{fileContent}</Typography>
        </>
    );
}

