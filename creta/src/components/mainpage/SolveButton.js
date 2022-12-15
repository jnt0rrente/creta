import { Button } from "@mui/material";

export default function SolveButton({onClick}) {
    return (
        <Button variant="contained" component="label" onClick={onClick}>
            Solve
        </Button>
    )
}