import { Box } from "@mui/material";
import ImportButton from "./ImportButton";
import CreateCustomButton from "./CreateCustomButton";
import BackButton from "./BackButton";
import SolveButton from "./SolveButton";
import Table from "../custom/Table";

import { useState } from "react";

export default function MainPage() {
    const [matrix, setMatrix] = useState(null)
    const [isMatrixLoaded, setMatrixLoaded] = useState(false)
    const [isFilePicked, setIsFilePicked] = useState(false);

    const loadMaze = (mazeMatrix) => {
        setMatrix(mazeMatrix)
        setMatrixLoaded(true)
    }

    const reset = () => {
        setMatrix(null)
        setMatrixLoaded(false)
        setIsFilePicked(false)
    }

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
                        <ImportButton setMatrix={loadMaze} isFilePicked={isFilePicked} setIsFilePicked={setIsFilePicked}/>
                        <CreateCustomButton/>
                    </Box>
                }
            </Box>
        </>
    );
}

