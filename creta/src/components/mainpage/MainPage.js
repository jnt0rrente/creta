import { Box } from "@mui/material";
import ImportButton from "./ImportButton";
import CreateCustomButton from "./CreateCustomButton";
import BackButton from "./BackButton";
import SolveButton from "./SolveButton";
import Table from "../custom/Table";
import {Main} from "../../engine/Main";
import { useState } from "react";

export default function MainPage() {
    const [matrix, setMatrix] = useState(null)
    const [isMatrixLoaded, setMatrixLoaded] = useState(false)
    const [isFilePicked, setIsFilePicked] = useState(false);

    const reset = () => {
        setMatrix(null)
        setMatrixLoaded(false)
        setIsFilePicked(false)
    }

    const loadFileFunction = (event) => {
		setIsFilePicked(true);

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            let initialParse = Main(reader.result);

            setMatrix(initialParse);
          });
        reader.readAsText(event.target.files[0]);

        setMatrixLoaded(true)
	};

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <Table matrix={matrix}/>
                {
                    isMatrixLoaded ?
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly" paddingTop="1em">
                        <BackButton reset={reset}/>
                        <SolveButton/>
                    </Box> :
                    <Box display="flex" flexDirection="column" justifyContent="space-evenly" paddingTop="1em" gap="1em" width="20em" maxWidth="20em" alignSelf="center">
                        <ImportButton isFilePicked={isFilePicked} loadFileFunction={loadFileFunction}/>
                        <CreateCustomButton/>
                    </Box>
                }
            </Box>
        </>
    );
}

