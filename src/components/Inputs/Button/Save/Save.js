import React from 'react'
import { Fab } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import { useSnackbar } from 'notistack';

const Save = (props) => {
    const { onSave, top, left } = props
    const { enqueueSnackbar } = useSnackbar();

    const handleSave = () => {
        onSave();
        enqueueSnackbar('Devices updated successfully', { variant: 'success' })
    }

    return (
        <Fab size='small'
            sx={{ position: 'absolute', top: `${top}em`, left: `${left}em` }}
            aria-label='save' onClick={handleSave}>
            <SaveIcon />
        </Fab>
    )
}

export default Save