import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../../components/layout/Card/Card'
import ComfortChart from '../ComfortChart/ComfortChart'

const ComfortLevels = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5}>
            <Grid item>
                <Card sx={{ width: "85vw", height: "55vh" }} content={<ComfortChart />} />
            </Grid>
            <Grid item>
                <Card sx={{ width: "85vw", height: "20vh" }} />
            </Grid>
        </Grid>
    )
}

export default ComfortLevels