import { Grid, styled } from '@mui/material'

export const StyledGrid = styled(Grid)(({ theme }) => ({
    width: theme.spacing(28.625),
    height: theme.spacing(6.875),
    marginTop: theme.spacing(1.25),
    marginRight: theme.spacing(1.25)
}));

export const StyledNotification = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: 'linear-gradient(130.77deg, rgba(255, 126, 126, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)',
    border: `${theme.spacing(0.125)} solid rgba(255, 255, 255, 0.33)`,
    boxShadow: `${theme.spacing(0.75)} ${theme.spacing(0.75)} ${theme.spacing(0.75)} rgba(0, 0, 0, 0.15)`,
    borderRadius: theme.spacing(1.25),
    lineHeight: '12px'
}));

export const StyledConfirmToDelete = styled(Grid)(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: 'rgba(233, 120, 120, 0.8)',
    boxShadow: `${theme.spacing(0.75)} ${theme.spacing(0.75)} ${theme.spacing(0.75)} rgba(0, 0, 0, 0.15)`,
    borderRadius: theme.spacing(1.25),
    marginTop: theme.spacing(0.3),
    cursor: 'pointer',
    marginLeft: 0
}))