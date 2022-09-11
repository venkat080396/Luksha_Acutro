import React from 'react'
import { Typography, ListItemText as MuiListItemText } from '@mui/material';

const ListItemText = ({ text, open }) => {
    return (
        <MuiListItemText sx={{ opacity: open ? 1 : 0 }} >
            <Typography variant='header4'>
                {text}
            </Typography>
        </MuiListItemText>
    )
}

export default ListItemText