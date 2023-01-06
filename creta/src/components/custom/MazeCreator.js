import { useEffect, useState } from "react";
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
 
    const [selection, setSelection] = useState(1)
    const handleSelectChange = (event) => {
        setSelection(event.target.value)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        let newCreatingMatrix = creatingMatrix
        newCreatingMatrix[i][j].walls = modelToWalls(selection)
        
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
  
    return (
        <div>
            <Dialog open={open} onClose={handleClose} onClick={handleDialogClick}>
                <DialogTitle>Choose walls</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Pick the wall model for this cell.
                    </DialogContentText>
                    <img src="/table_numbers.png" alt="legend" width="300"/>
                    <InputLabel id="demo-simple-select-label">Select one</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selection}
                        label="Option"
                        onChange={handleSelectChange}
                        style={{width: "12em"}}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
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