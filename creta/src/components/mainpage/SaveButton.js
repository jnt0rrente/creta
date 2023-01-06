import { Button } from "@mui/material";

export default function SaveButton({onClick}) {
    return (
        <Button variant="contained" component="label" onClick={onClick}>
            Save
        </Button>
    )
}