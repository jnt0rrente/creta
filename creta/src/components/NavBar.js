import { Typography, Toolbar, Box } from "@mui/material"
import AppBar from '@mui/material/AppBar'

function Title() {
	return (
		<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, textAlign: 'center', alignSelf: 'center' }}>Creta</Typography>
	)
}

export default function NavBar() {

    return (
        <AppBar position="absolute" elevation={2} sx={{justifyContent: "space-between", alignContent: "center"}}>
            <Toolbar
				sx={{
					pr: '24px', // keep right padding when drawer closed
				}}
            >
				<Box sx={{width: '20em', minWidth: '40%'}}>
					<Title/>
				</Box>
            </Toolbar>
		</AppBar>
    );
}


  