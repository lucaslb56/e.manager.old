import { Rating as RatingMui, ratingClasses, styled } from '@mui/material';

export const Rating = styled(RatingMui)({
	[`& .${ratingClasses.iconEmpty}`]: {
		color: '#f4f4f499',
	},
});
