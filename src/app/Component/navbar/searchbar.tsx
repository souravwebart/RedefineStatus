/** @format */

import React from 'react';
import keyboardJS from 'keyboardjs';
import { useEffect, useRef } from 'react';
import { Box, Stack, StackProps, TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

function searchbar() {
	return (
		<Box>
			<SearchTextField />
		</Box>
	);
}

export default searchbar;

const SearchTextField = () => {
	const textFieldRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		keyboardJS.bind('ctrl + shift + k', () => {
			textFieldRef.current?.focus();
		});
		return () => {
			keyboardJS.unbind('ctrl + k');
		};
	}, []);

	return (
		<TextField
			inputRef={textFieldRef}
			InputProps={{
				endAdornment: <SearchRounded />,
				sx: {
					px: 2,
					'input::placeholder': {
						textAlign: 'center',
					},
					height: '41px !important',
				},
			}}
			sx={{
				maxWidth: '762px',
				borderRadius: '15px',
			}}
			fullWidth
			placeholder={'Search for Redefine Status.'}
		/>
	);
};
