import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";

export default function AlgorithmSelector(props) {
    const handleChange = (event) => {
        props.setAlgorithm(event.target.value)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.algorithm}
                label="Algorithm"
                onChange={handleChange}
            >
                <MenuItem value={"dfs"}>Depth-first search</MenuItem>
                <MenuItem value={"bfs"}>Breadth-first search</MenuItem>
            </Select>
        </FormControl>
    )
}