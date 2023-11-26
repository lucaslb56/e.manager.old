import {
	Table,
	styled,
	tableBodyClasses,
	tableRowClasses,
} from '@mui/material';

export const Container = styled(Table)({
	[`& .${tableBodyClasses.root}`]: {
		[`& .${tableRowClasses.root}`]: {
			cursor: 'pointer',
			':hover': {
				background: '#4256D009',
			},
		},
	},
});
