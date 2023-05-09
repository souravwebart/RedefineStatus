/** @format */

'use client';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import SinglePage from './singlePage';
import Wrapper from './customComponent/wrapper';
import Navbar from './Component/navbar';
import { poppins } from './font';
import Footer from './Component/footer';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Wrapper py={{ xs: '6px' }} mb={'100px'}>
			<Box width='100%'>
				<Navbar colorMode={colorMode.toggleColorMode} />
			</Box>

			<SinglePage />
		</Wrapper>
	);
}

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
				breakpoints: {
					values: {
						xs: 0,
						xs_sm: 288,
						sm: 576,
						sm_md: 672,
						md: 768,
						md_lg: 880,
						lg: 992,
						lg_xl: 1136,
						xl: 1280,
						xl_xxl: 1360,
						xxl: 1440,
						xxl_xxxl: 1600,
					},
				},
				typography: {
					allVariants: {
						fontSmooth: 'always',
						textRendering: 'optimizeSpeed',
						lineHeight: 'normal',
						letterSpacing: 'normal',
						fontStretch: 'normal',
						position: 'relative',
						color: 'inherit',
						fontSize: 'inherit',
						...poppins.style,
					},
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						bgcolor: 'background.default',
						color: 'text.primary',
						width: '100%',
						minHeight: '100vh',
					}}
				>
					<MyApp />
					<Footer />
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
