import { useState } from "react";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";

function modelToWalls(selectedModel) {
    let retWalls = {
        top: false,
        right: false,
        bottom: false,
        left: false
    }

    switch(selectedModel) {
        case 1: 
            break
        case 2:
            retWalls.top = true
            break
        case 3:
            retWalls.right = true
            break
        case 4:
            retWalls.bottom = true
            break
        case 5:
            retWalls.left = true
            break
        case 6:
            retWalls.top = true
            retWalls.bottom = true
            break
        case 7:
            retWalls.right = true
            retWalls.left = true
            break
        case 8:
            retWalls.top = true
            retWalls.right = true
            break
        case 9:
            retWalls.right = true
            retWalls.bottom = true
            break
        case 10:
            retWalls.left = true
            retWalls.bottom = true
            break
        case 11:
            retWalls.left = true
            retWalls.top = true
            break
        case 12:
            retWalls.top = true
            retWalls.right = true
            retWalls.bottom = true
            break
        case 13:
            retWalls.left = true
            retWalls.right = true
            retWalls.bottom = true
            break
        case 14:
            retWalls.top = true
            retWalls.left = true
            retWalls.bottom = true
            break
        case 15:
            retWalls.top = true
            retWalls.right = true
            retWalls.left = true
            break
        case 16:
            retWalls.top = true
            retWalls.right = true
            retWalls.bottom = true
            retWalls.left = true
            break
        default:
            throw new Error("??")
    }

    return retWalls
}

function WallPickDialog({open, setOpen, i, j, creatingMatrix, setCreatingMatrix}) {
 

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (optionNumber) => {
        let newCreatingMatrix = creatingMatrix
        newCreatingMatrix[i][j].walls = modelToWalls(optionNumber)
        
        if (i === 0) newCreatingMatrix[i][j].walls.top = true
        if (i === 7) newCreatingMatrix[i][j].walls.bottom = true
        if (j === 0) newCreatingMatrix[i][j].walls.left = true
        if (j === 7) newCreatingMatrix[i][j].walls.right = true

        setCreatingMatrix(newCreatingMatrix)
        setOpen(false);
    };

    const handleDialogClick = e => {
        e.stopPropagation();
    };

    const optionClick = (optionNumber) => {
        handleSave(optionNumber)
    }
  
    return (
        <div>
            <Dialog open={open} onClose={handleClose} onClick={handleDialogClick}>
                <DialogTitle>Choose walls</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Pick the wall model for this cell.
                    </DialogContentText>
                    <Box display="flex" alignItems={"center"} justifyItems="center">
                        <table id="creatorModelTable">
                            <tbody>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement1" onClick={() => optionClick(1)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement2" onClick={() => optionClick(2)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement3" onClick={() => optionClick(3)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement4" onClick={() => optionClick(4)}></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement5" onClick={() => optionClick(5)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement6" onClick={() => optionClick(6)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement7" onClick={() => optionClick(7)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement8" onClick={() => optionClick(8)}></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement9" onClick={() => optionClick(9)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement10" onClick={() => optionClick(10)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement11" onClick={() => optionClick(11)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement12" onClick={() => optionClick(12)}></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement13" onClick={() => optionClick(13)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement14" onClick={() => optionClick(14)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement15" onClick={() => optionClick(15)}></td>
                                <td className="creatorModelTableFiller"></td>
                                <td id="creatorModelTableElement16" onClick={() => optionClick(16)}></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            <tr>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                                <td className="creatorModelTableFiller"></td>
                            </tr>
                            </tbody>
                        </table>   
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function CoordSelector({identifier, label, value, setter}) {
    return (
        <Box display="flex" flexDirection={"column"}>
            <InputLabel id={identifier+"-simple-select-label"}>{label}</InputLabel>
            <Select
                labelId={identifier+"-simple-select-label"}
                id={identifier+"-simple-select"}
                value={value}
                label={label}
                onChange={(event) => setter(event.target.value)}
                style={{width: "12em"}}
            >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
            </Select>
        </Box>
    )
}

function CustomCell({i, j, creatingMatrix, setCreatingMatrix, isStart, isEnd}) {

    const [dialogOpen, setDialogOpen] = useState(false)
    const cellClick = () => {
        setDialogOpen(true)
    }

    return (
        <td id="tablehoverable" key={""+i+""+j} style={cellToStyle(creatingMatrix[i][j], isStart, isEnd)} onClick={cellClick}>
            <WallPickDialog open={dialogOpen} setOpen={setDialogOpen} i={i} j={j} creatingMatrix={creatingMatrix} setCreatingMatrix={setCreatingMatrix}/>
        </td>
    )
}

export default function MazeCreator({creatingMatrix, setCreatingMatrix, startI, setStartI, startJ, setStartJ, endI, setEndI, endJ, setEndJ}) {

    return (
            <>
                {/* <p>Create your custom maze! The starting square is colored <div sx={{color: "lightGreen"}}>light green</div> and the goal is <div sx={{color: "lightBlue"}}>light blue</div>.</p> */}
                <table style={{border: "1px solid", borderCollapse: "collapse", width: "4vh", alignSelf: "center"}}>
                    <tbody>
                        {
                            (creatingMatrix.map((row, index) => (
                                <tr key={"row"+index}>
                                    {
                                        row.map((cell) => (
                                            <CustomCell key={cell.i + "" + cell.j} i={cell.i} j={cell.j} isStart={(startI === cell.i && startJ === cell.j)} isEnd={(endI === cell.i && endJ === cell.j)} creatingMatrix={creatingMatrix} setCreatingMatrix={setCreatingMatrix}/>
                                        ))
                                    }
                                </tr>
                            )))
                        }
                    </tbody>
                </table>
                <Box display="flex" gap="1em">
                    <Box display="flex" flexDirection="column">
                        <CoordSelector
                            identifier="startI"
                            label="Starting square I"
                            value={startI}
                            setter={setStartI}
                        />

                        <CoordSelector
                            identifier="endI"
                            label="Ending square I"
                            value={endI}
                            setter={setEndI}
                        />
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <CoordSelector
                            identifier="startJ"
                            label="Starting square J"
                            value={startJ}
                            setter={setStartJ}
                        />
                        
                        <CoordSelector
                            identifier="endJ"
                            label="Ending square J"
                            value={endJ}
                            setter={setEndJ}
                        />
                    </Box>
                </Box>
            </>
        )        
}

function cellToStyle(cell, isStart, isEnd) {
    let style = {padding: "1.5em"}

    const styleWall = "4px solid #222222"
    const styleNoWall = "1px solid #888888"

    if (cell.walls.top === true) {
        style.borderTop = styleWall
    } else {
        style.borderTop = styleNoWall
    }

    if (cell.walls.right === true) {
        style.borderRight = styleWall
    } else {
        style.borderRight = styleNoWall
    }

    if (cell.walls.bottom === true) {
        style.borderBottom = styleWall
    } else {
        style.borderBottom = styleNoWall
    }

    if (cell.walls.left === true) {
        style.borderLeft = styleWall
    } else {
        style.borderLeft = styleNoWall
    }

    if (isStart) {
        style.backgroundColor = "lightGreen"
    } else if (isEnd) {
        style.backgroundColor = "lightBlue"
    }

    return style
}