import { Button } from "@mui/material";

export default function SolveButton() {
    return (
        <Button variant="contained" component="label" onClick={() => alert("no")}>
            Solve
        </Button>
    )
}