import { Box,styled } from '@mui/material';

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    backgroundRepeat: 'no-repeat',
    objectFit: 'fill',
    width: '100vw',
    marginBottom: '3%',
    // background: 'linear-gradient(135deg, #1F1A3B, #344D5E)',
    color: 'white',
    display: 'flex',
    height: '100vh',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
        width: '0.05em',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'white',
        outline: '1px solid white',
    }
}));