import { Box, LinearProgress } from "@mui/material";
import ImportButton from "./ImportButton";
import CreateCustomButton from "./CreateCustomButton";
import BackButton from "./BackButton";
import SolveButton from "./SolveButton";
import Table from "../custom/Table";
import AlgorithmSelector from "./AlgorithmSelector";
import {Main} from "../../engine/Main";
import { useEffect, useState } from "react";
import StepSlider from "./StepSlider";

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
                    console.log("trigger dfs")
                    setDisplay(dfs.stack)
                }
                if (algorithm === "bfs") {
                    console.log("trigger bfs")
                    setDisplay(bfs.result)
                }
            }
        }
    }, [sliderSelection, steps, isSolved, isSeeingSteps, algorithm, bfs, dfs])

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center">
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
                        <CreateCustomButton/>
                    </Box>
                }
            </Box>
        </>
    );
}
