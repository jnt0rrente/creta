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

function WallPickDialog({open, setOpen, i, j, creatingMatrix, setCreatingMatrix}) {
 
    const [selection, setSelection] = useState('')
    const handleSelectChange = (event) => {
        setSelection(event.target.value)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
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
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function CustomCell({i, j, creatingMatrix, setCreatingMatrix}) {

    const [dialogOpen, setDialogOpen] = useState(false)
    const cellClick = () => {
        setDialogOpen(true)
    }

    return (
        <td id="tablehoverable" key={""+i+""+j} style={cellToStyle(creatingMatrix[i][j])} onClick={cellClick}>
            <WallPickDialog open={dialogOpen} setOpen={setDialogOpen} i={i} j={j} creatingMatrix={creatingMatrix} setCreatingMatrix={setCreatingMatrix}/>
        </td>
    )
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

export default function MazeCreator({setOutput}) {

    const [creatingMatrix, setCreatingMatrix] = useState(getEmptyMatrix())
   
    return (
            <>
                <table style={{border: "1px solid", borderCollapse: "collapse", width: "4vh", alignSelf: "center"}}>
                    <tbody>
                        {
                            (creatingMatrix.map((row, index) => (
                                <tr key={"row"+index}>
                                    {
                                        row.map((cell) => (
                                            <CustomCell key={cell.i + "" + cell.j} i={cell.i} j={cell.j} creatingMatrix={creatingMatrix} setCreatingMatrix={setCreatingMatrix}/>
                                        ))
                                    }
                                </tr>
                            )))
                        }
                    </tbody>
                </table>
            </>
        )        
}

function cellToStyle(cell) {
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

    return style
}