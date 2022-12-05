import { Box, LinearProgress, Typography } from "@mui/material";
import ImportButton from "./ImportButton";
import CreateCustomButton from "./CreateCustomButton";
import BackButton from "./BackButton";
import SolveButton from "./SolveButton";
import Table from "../custom/Table";
import AlgorithmSelector from "./AlgorithmSelector";
import {Main} from "../../engine/Main";
import { useState } from "react";

export default function MainPage() {
    const [matrix, setMatrix] = useState(null);
    const [isMatrixLoaded, setMatrixLoaded] = useState(false);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [algorithm, setAlgorithm] = useState("dfs");
    const [solution, setSolution] = useState(null);
    const [isSolving, setIsSolving] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const reset = () => {
        setMatrix(null)
        setMatrixLoaded(false)
        setIsFilePicked(false)
        setIsSolved(false)
        setIsSolving(false)
        setSolution(null)
    }

    const loadFileFunction = (event) => {
		setIsFilePicked(true);

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            let results = Main(reader.result);
            setSolution(results)
            setMatrix(results.matrix);
          });
        reader.readAsText(event.target.files[0]);

        setMatrixLoaded(true)
	};

    const onSolveClick = () => {
        setIsSolved(false)
        setIsSolving(true)
        setTimeout(() => {
            setIsSolving(false)
            setIsSolved(true)
          }, 1500);
        
    }

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center">
                {
                    isSolved ?
                        <Typography>
                            Solved!:
                            {
                                solution.dfs.stack.map((step) => step.value)
                            }
                        </Typography>
                        : <></>
                }
                <Table matrix={matrix}/>
                {
                    isSolving ? 
                        <Box sx={{ width: '100%' }} paddingTop="0.5em">
                            <LinearProgress color="secondary"/>
                        </Box> : <></>
                }
                {
                    isMatrixLoaded ?
                    <Box display="flex" flexDirection="row" justifyContent="space-evenly" paddingTop="1em">
                        <BackButton reset={reset}/>
                        <Box display="flex" flexDirection="row">
                            <AlgorithmSelector algorithm={algorithm} setAlgorithm={setAlgorithm}/>
                            <SolveButton onClick={onSolveClick}/>
                        </Box>
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