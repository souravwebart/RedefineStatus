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
import { SearchRounded } from '@mui/icons-material';
import Searchbar from './searchbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface NavbarProps extends Omit<StackProps, 'children'> {
	colorMode: any;
}

const Navbar = (props: NavbarProps) => {
	const { colorMode, ...rest } = props;
	const theme = useTheme();
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};
	return (
		<>
			<Box
				justifyContent={'space-between'}
				display={'flex'}
				alignItems={'center'}
				height={'70px'}
			>
				<Box>
					<Typography
						sx={{ fontSize: { xs: '18', lg_xl: '24px' }, fontWeight: 600 }}
					>
						🌟 Redefine Status
					</Typography>{' '}
				</Box>
				<Box sx={{ width: '60%' }} display={{ xs: 'none', lg_xl: 'block' }}>
					<Searchbar />
				</Box>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Box display={{ xs: 'block', lg_xl: 'none' }} marginRight='10px'>
						<SearchIcon fontSize='small' onClick={handleShow} />
					</Box>
					<Typography fontSize={{ xs: '14px', lg_xl: '18px' }}>
						{theme.palette.mode === 'light' ? 'Day' : 'Night'} Mode{' '}
						<IconButton sx={{ ml: '5px' }} onClick={colorMode} color='inherit'>
							{theme.palette.mode === 'dark' ? (
								<Brightness7Icon />
							) : (
								<Brightness4Icon />
							)}
						</IconButton>
					</Typography>
				</Box>
			</Box>
			{show && (
				<Box>
					<Box
						sx={{ width: '100%', mb: '15px' }}
						display={{ xs: 'block', lg_xl: 'none' }}
					>
						<Searchbar />
					</Box>
				</Box>
			)}
		</>
	);
};

export default Navbar;
