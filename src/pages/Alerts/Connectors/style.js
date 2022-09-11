
import { Grid, styled } from '@mui/material';

export const StyledGrid1 = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(2)
}));

export const StyledGrid2 = styled(Grid)(({ theme }) => ({
    background: 'rgba(255,255,255,0.05)',
    borderRadius: theme.spacing(1.875),
    border: '0.05em solid rgba(255,255,255,0.3)',
    padding: theme.spacing(2)
}));