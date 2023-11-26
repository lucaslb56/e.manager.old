import {
	buttonBaseClasses,
	inputAdornmentClasses,
	inputBaseClasses,
	styled,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const Datepicker = styled(DatePicker)({
	[`& .${inputBaseClasses.root}`]: {
		[`& .${inputAdornmentClasses.positionEnd}`]: {
			[`& .${buttonBaseClasses.root}`]: {
				color: '#f4f4f4',
			},
		},
	},
});
