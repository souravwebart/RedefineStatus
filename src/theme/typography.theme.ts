/** @format */

import { Components, Theme, ThemeOptions } from '@mui/material';
import { poppins } from '../app/font';
/**
 * @ThemeOptions['typography']
 * Here we can define the typography theme
 *
 * @see https://material-ui.com/customization/typography
 */
export const TypographyTheme: ThemeOptions['typography'] = {
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
};

/**
 * @ComponentsVariants['MuiTypography']
 *
 * Here we can define the typography Variants
 *
 * @see https://material-ui.com/customization/typography
 */
export const TypographyVariants: Components<
	Omit<Theme, 'components'>
>['MuiTypography'] = {
	styleOverrides: {
		h1: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '24px', lg: '30px', xl: '48px', xxl_xxxl: '64px' },
				fontWeight: 500,
			});
		},
		h2: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '16px', sm: '20px', lg: '28px', xxl_xxxl: '35px' },
				fontWeight: 500,
			});
		},
		h3: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '12px', lg: '32px' },
				fontWeight: 500,
			});
		},
		h4: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { lg: '28px' },
				fontWeight: 500,
			});
		},
		h5: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '16px', lg: '20px', xxl: '26px' },
				fontWeight: 500,
			});
		},
		h6: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '12px', md: '16px', xxl_xxxl: '22px' },
				fontWeight: 500,
			});
		},
		overline: ({ theme, ownerState }) => {
			const { paragraph } = ownerState;
			return theme.unstable_sx({
				fontSize: { xs: '12px', sm: '16px', xxl_xxxl: '20px' },
				textTransform: paragraph ? 'none' : 'uppercase',
			});
		},
		body1: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '15px', lg: '18px' },
			});
		},
		body2: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '12px', lg: '16px' },
			});
		},
		subtitle1: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '10px', lg: '12px', xxl_xxxl: '14px' },
			});
		},
		subtitle2: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '10px', lg: '12px' },
			});
		},
		caption: ({ theme }) => {
			return theme.unstable_sx({
				fontSize: { xs: '10px', lg: '10px' },
			});
		},
		gutterBottom: ({ theme }) => {
			return theme.unstable_sx({
				mb: { xs: 1, lg: 2.5 },
			});
		},
	},
};
