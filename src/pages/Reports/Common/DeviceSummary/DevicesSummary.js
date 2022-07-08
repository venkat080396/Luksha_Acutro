import React from 'react'
import { Grid } from '@mui/material';
import { COMMON } from '../../constants.js'

export const DevicesSummary = () => {
    return (
        <Grid container sx={{ marginLeft: 4 }}>
            <Grid item>
                {COMMON.DEVICE_SUMMARY.NO_DEVICES_MESSAGE}
            </Grid>
        </Grid>
    )
}
