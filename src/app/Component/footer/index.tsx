/** @format */

'use client';
import {
	Box,
	IconButton,
	Stack,
	StackProps,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';

const Footer = () => {
	return (
		<Box
			sx={{
				height: '250px',
				padding: '50px 0px',
				backgroundColor: '#000',
				textAlign: 'center',
				width: '100%',
			}}
		>
			<Box sx={{ mb: '30px' }}>
				<Typography sx={{ fontSize: '32px' }}>🌟</Typography>
				<Typography sx={{ fontSize: '20px', color: '#fff', fontWeight: 600 }}>
					Redefine Status
				</Typography>{' '}
			</Box>
			<Box>
				<Typography sx={{ fontSize: '18px', color: '#fff', fontWeight: 500 }}>
					Copyright 2023 | Redefine Status.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
