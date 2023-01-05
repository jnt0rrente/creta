import { Button } from "@mui/material";

export default function CreateCustomButton({onClick}) {
    return (
        <Button variant="contained" component="label" onClick={onClick}>
            Custom maze
        </Button>
    )
}