import React from 'react'
import { Button, Grid } from '@mui/material';
import { SettingsList } from './SettingsList';
import { SETTINGS } from '../constants'

const Settings = (props) => {
    const { handleClose, handleSubmit } = props;

    return (
        <Grid container
            direction='column'
            alignItems='center'
            justifyContent='center'>
            <Grid item>
                <SettingsList />
            </Grid>
            <Grid item>
                <Grid container
                    spacing={2}
                    sx={{ marginTop: '0.5em' }}>
                    <Grid item>
                        <Button
                            variant='contained'
                            color='error'
                            onClick={handleClose}>
                            {SETTINGS.BUTTONS.CANCEL}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant='contained'
                            color='info'
                            onClick={handleSubmit}>
                            {SETTINGS.BUTTONS.SUBMIT}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export { Settings }