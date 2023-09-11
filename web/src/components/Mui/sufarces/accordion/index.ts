import {
	AccordionDetails,
	AccordionSummary,
	Accordion as MuiAccordion,
	accordionClasses,
	accordionSummaryClasses,
	styled,
} from '@mui/material';

export const Accordion = styled(MuiAccordion)({
	padding: 0,
	boxShadow: 'none',

	[`&.${accordionClasses.expanded}`]: {
		margin: 0,
		padding: 0,
	},
});

export const Summary = styled(AccordionSummary)({
	padding: 0,
	height: '1rem',

	[`&.${accordionSummaryClasses.expanded}`]: {
		margin: 0,
		background: '#3B435C55',
		minHeight: '3rem',
	},
});

export const Detail = styled(AccordionDetails)({
	border: '2px solid #3B435C55',
});
