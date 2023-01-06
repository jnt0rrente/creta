import {
    createTheme
} from "@mui/material"

import {
    red,
    grey,
    blue
} from "@mui/material/colors"

const mainTheme = createTheme({
    palette: {
        primary: {
            main: grey[400]
        },
        secondary: {
            main: blue[600]
        },
        disabled: {
            main: red[100]
        }
    }
})

export default mainTheme