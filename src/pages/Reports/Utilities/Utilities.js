import React from 'react'
import { Grid } from '@mui/material'

const Utilities = () => {
    return (
        <Grid direction="column" container justifyContent="center" alignItems="center">
            <Grid item>
                <h1> Energy Reports</h1>
            </Grid>
            <Grid item>
                <h1> Active Devices</h1>
            </Grid>
        </Grid>
    )
}

export default Utilities