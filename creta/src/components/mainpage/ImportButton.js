import { Button } from "@mui/material";


export default function ImportButton({loadFileFunction, isFilePicked}) {
    return (
        <Button variant="contained" component="label" disabled={isFilePicked}>
            Import from file
            <input disabled={isFilePicked} hidden accept="text/*" type="file" onChange={loadFileFunction} />
        </Button>
    )
}