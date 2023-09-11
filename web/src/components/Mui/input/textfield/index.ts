import {
	TextField as MuiTextField,
	inputAdornmentClasses,
	styled,
} from '@mui/material';

export const TextField = styled(MuiTextField)(({ theme, error }) => ({
	// backgroundColor: '#F4F4F4',
	borderRadius: '8px',

	[`& .MuiInputBase-input`]: {
		color: error ? theme.palette.error.main : theme.palette.text.primary,
	},

	[`& .${inputAdornmentClasses.root}`]: {
		color: error ? theme.palette.error.main : theme.palette.text.primary,
	},

	[`& .MuiSelect-icon`]: {
		color: '#5C73DB',
		outline: 'none',
	},
}));
