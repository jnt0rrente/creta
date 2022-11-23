import { Button } from "@mui/material";

import { useState } from "react";

export default function ImportButton({setFileContent}) {
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setIsFilePicked(true);

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setFileContent(reader.result);
          });
        reader.readAsText(event.target.files[0]);
	};

    return (
        <Button variant="contained" component="label">
            Import from file
            <input disabled={isFilePicked} hidden accept="text/*" type="file" onChange={changeHandler} />
        </Button>
    )
}