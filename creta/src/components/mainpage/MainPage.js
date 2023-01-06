import { Box, LinearProgress, Typography } from "@mui/material";
import ImportButton from "./ImportButton";
import CreateCustomButton from "./CreateCustomButton";
import BackButton from "./BackButton";
import SaveButton from "./SaveButton";
import SolveButton from "./SolveButton";
import Table from "../custom/Table";
import MazeCreator from "../custom/MazeCreator";
import AlgorithmSelector from "./AlgorithmSelector";
import {Main} from "../../engine/Main";
import { useEffect, useState } from "react";
import StepSlider from "./StepSlider";
import {mazeTranspile} from "../../engine/Export"

export default function MainPage() {
    const [matrix, setMatrix] = useState(null);
    const [dfs, setDfs] = useState(null);
    const [bfs, setBfs] = useState(null);

    const [isMatrixLoaded, setMatrixLoaded] = useState(false);
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [algorithm, setAlgorithm] = useState("dfs");

    const [display, setDisplay] = useState(null);
    const [steps, setSteps] = useState(null)
    const [sliderSelection, setSliderSelection] = useState(null)

    const [isSeeingSteps, setIsSeeingSteps] = useState(false)
    const [isSolving, setIsSolving] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const [creatingCustom, setCreatingCustom] = useState(false)
    const [creatingMatrix, setCreatingMatrix] = useState(getEmptyMatrix())
    
    const [startI, setStartI] = useState(0)
    const [startJ, setStartJ] = useState(0)
    const [endI, setEndI] = useState(7)
    const [endJ, setEndJ] = useState(7)

    const creatingCustomClicked = () => {
        setCreatingCustom(true)
    }

    const reset = () => {
        setMatrix(null)
        setDfs(null)
        setBfs(null)

        setMatrixLoaded(false)
        setIsFilePicked(false)
        setAlgorithm("dfs")

        setDisplay(null)
        setSteps(null)
        setSliderSelection(null)

        setIsSeeingSteps(false)
        setIsSolving(false)
        setIsSolved(false)

        setCreatingCustom(false)
    }

    const loadFileFunction = (event) => {
		setIsFilePicked(true);

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            let results = Main(reader.result);
            setMatrix(results.matrix);
            setDfs(results.dfs)
            setBfs(results.bfs)
          });
        reader.readAsText(event.target.files[0]);

        setMatrixLoaded(true)
	};

    const onSaveCreatedMaze = () => {
        let results = Main(mazeTranspile(
            creatingMatrix,
            startI,
            startJ,
            endI,
            endJ
        ));

        setMatrix(results.matrix);
        setDfs(results.dfs)
        setBfs(results.bfs)

        setIsFilePicked(true)
        setMatrixLoaded(true)
        setCreatingCustom(false)
    }

    const onSolveClick = () => {
        setIsSolved(false)
        setIsSolving(true)
        setTimeout(() => {
            setIsSolving(false)
            setIsSolved(true)
        }, 500);
    }

    useEffect(() => {
        if (bfs !== null && dfs !== null && isSolved) {
            if (isSeeingSteps) {
                if (algorithm === "dfs") {
                    setSteps(dfs.step)
                }
                if (algorithm === "bfs") {
                    setSteps(bfs.step)
                }
                setDisplay(steps ? steps[sliderSelection] : null)
            } else {
                if (algorithm === "dfs") {
                    setDisplay(dfs.stack)
                }
                if (algorithm === "bfs") {
                    setDisplay(bfs.result)
                }
            }
        }
    }, [sliderSelection, steps, isSolved, isSeeingSteps, algorithm, bfs, dfs])

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center">
                {
                    creatingCustom ? 
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems={"center"} gap="1em">
                            <Typography>Custom maze</Typography>
                            <MazeCreator 
                                creatingMatrix={creatingMatrix}
                                setCreatingMatrix={setCreatingMatrix}

                                startI={startI} 
                                setStartI={setStartI} 
                                startJ={startJ} 
                                setStartJ={setStartJ}

                                endI={endI} 
                                setEndI={setEndI} 
                                endJ={endJ} 
                                setEndJ={setEndJ}
                            />
                            <Box display="flex" flexDirection="row" justifyContent="space-between" width="12em">
                                <SaveButton onClick={onSaveCreatedMaze}/>
                                <BackButton reset={reset}/>
                            </Box>
                        </Box> :
                        <>
                            <Table matrix={matrix} display={display}/>
                            {
                                isSolving ? 
                                    <Box sx={{ width: '100%' }} paddingTop="0.5em">
                                        <LinearProgress color="secondary"/>
                                    </Box> : <></>
                            }

                            {
                                isMatrixLoaded ?
                                    <>
                                        {
                                            isSolved ? 
                                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems={"center"} paddingTop="1em">
                                                <Box display="flex" flexDirection="column" justifyContent="space-evenly" paddingTop="1em">
                                                    <AlgorithmSelector algorithm={algorithm} setAlgorithm={setAlgorithm}/>
                                                    <StepSlider isSolved={isSolved} steps={steps} sliderSelection={sliderSelection} setSliderSelection={setSliderSelection} isSeeingSteps={isSeeingSteps} setIsSeeingSteps={setIsSeeingSteps}/>
                                                </Box>

                                                <Box display="flex" flexDirection="row" justifyContent="center" paddingTop="3em">
                                                    <BackButton reset={reset}/>
                                                </Box>
                                            </Box> : 
                                            <Box display="flex" flexDirection="column" alignItems="center" paddingTop="1em">
                                                <Box display="flex" flexDirection="row" justifyContent="space-between" width="12em">
                                                    <SolveButton onClick={onSolveClick}/>
                                                    <BackButton reset={reset}/>
                                                </Box>
                                            </Box> 
                                        }
                                    </>                    
                                : <Box display="flex" flexDirection="column" justifyContent="space-evenly" paddingTop="1em" gap="1em" width="20em" maxWidth="20em" alignSelf="center">
                                    <ImportButton isFilePicked={isFilePicked} loadFileFunction={loadFileFunction}/>
                                    <CreateCustomButton onClick={creatingCustomClicked}/>
                                </Box>
                            }
                        </>
                }
            </Box>
        </>
    );
}



function getEmptyMatrix() {
    let newMatrix = []
    for (let i = 0; i < 8; i++) {
        let row = []
        for (let j = 0; j < 8; j++) {
            row.push(
                {
                    i,
                    j,
                    walls: {
                        top: i===0,
                        right: j===7,
                        bottom: i===7,
                        left: j===0
                    }}) //walls: top right bottom left (clockwise). true hay pared, false no hay pared
        }
        newMatrix.push(row)
    }

    return newMatrix
}