import { Grid } from '@mui/material'
import React from 'react'
import ComfortChart from '../../Reports/Comfort/ComfortChart/ComfortChart'

const SensorChart = () => {
    return (
        <Grid container sx={{overflow:'hidden'}}>
            <Grid item sm={12} md={12} lg={12}>
                <ComfortChart width={200} aspetRatio="2.1" />
            </Grid>
        </Grid>
    )
}

export default SensorChart