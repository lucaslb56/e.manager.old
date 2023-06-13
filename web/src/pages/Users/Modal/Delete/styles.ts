import { styled as MuiStyled } from '@mui/material/styles';

import { Button, Grid } from '~/components/Mui';
import { defaultTheme } from '~/styles/themes/default';

export const GridButton = MuiStyled(Grid)`
  flex: 1;  
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

export const CancelButton = MuiStyled(Button)`
  border: 1px solid ${defaultTheme['red-600']};
  color: ${defaultTheme['red-600']};

  &:hover {
  color: ${defaultTheme['white']};

    background: ${defaultTheme['red-600']};
    opacity: 0.9;
  }
`;

export const ConfirmButton = MuiStyled(Button)`
  background: ${defaultTheme['indigo-600']};
  color: ${defaultTheme['white']};
  
  &:hover {
    background: ${defaultTheme['indigo-700']};
    opacity: 0.9;
  }
`;
