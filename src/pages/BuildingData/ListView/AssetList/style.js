import { ImageList, styled } from '@mui/material';

export const StyledImageList = styled(ImageList)({
    '&::-webkit-scrollbar': {
        width: '3px',
        backgroundColor: '#C4C4C4',
        borderRadius: '20px'
    },
    '&::-webkit-scrollbar-track': {
        width: '3px',
        background: 'rgba(196, 196, 196, 0.1)',
        borderRadius: '20px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'white',
        outline: '1px solid white',
    },
    height: '62vh',
    marginTop: '0.2em'
});