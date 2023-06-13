import '@mui/material/styles';
import 'styled-components';

import type { ThemeType } from '~/models/Theme';
declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
