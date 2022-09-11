import { Grid, styled } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
    background: 'linear-gradient(-30.77deg, #767f82, #596a75, #425569, #323f5b, #2a294b)',
    borderRadius: theme.spacing(1.875),
    padding: theme.spacing(2.5)
}));