import NavBar from './components/NavBar'
import ViewPort from './components/ViewPort'
import mainTheme from './style/mainTheme'
import { CssBaseline, Box, Container, Toolbar } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

function App() {

	return (
		<>
			<ThemeProvider theme={mainTheme}>
					<Box sx={{display: 'flex'}}>
						<CssBaseline/>
							<NavBar/>
							<Box
							component="main"
							sx={{
								backgroundColor: (theme) =>
								theme.palette.mode === 'light'
									? theme.palette.grey[100]
									: theme.palette.grey[900],
								flexGrow: 1,
								height: '100vh',
								overflow: 'auto',
							}}
							>
								<Toolbar/>
								<Container maxWidth="lg" sx={{mt:4, mb: 4}}>
                    				<ViewPort/>
								</Container>
							</Box>
					</Box>
			</ThemeProvider>
		</>
	);
}

export default App;
