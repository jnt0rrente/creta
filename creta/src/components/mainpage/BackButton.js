import { Button } from "@mui/material";

export default function BackButton({reset}) {
    return (
        <Button variant="contained" component="label" onClick={reset}>
            Back
        </Button>
    )
}