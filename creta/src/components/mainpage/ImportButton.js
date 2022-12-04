import { Button } from "@mui/material";
import {Main} from "../../engine/Main";

export default function ImportButton({setMatrix, isFilePicked, setIsFilePicked}) {
    const changeHandler = (event) => {
		setIsFilePicked(true);

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            let initialParse = Main(reader.result);

            setMatrix(initialParse);
          });
        reader.readAsText(event.target.files[0]);
	};

    return (
        <Button variant="contained" component="label" disabled={isFilePicked}>
            Import from file
            <input disabled={isFilePicked} hidden accept="text/*" type="file" onChange={changeHandler} />
        </Button>
    )
}