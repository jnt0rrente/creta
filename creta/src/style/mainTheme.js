import {
    createTheme
} from "@mui/material"

import {
    red,
    grey
} from "@mui/material/colors"

const mainTheme = createTheme({
    palette: {
        primary: {
            main: grey[300]
        },
        disabled: {
            main: red[100]
        }
    }
})

export default mainTheme