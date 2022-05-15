import { Grid } from '@mui/material'
import React from 'react'
import Estimation from './Estimation'

const Container = (props) => {
    const { type } = props

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 3 }}
            spacing={3}>
            <Grid item>
                <Estimation
                    type={type}
                    title="Estimated Usage"
                    weekdaysContent="31,219"
                    weekendContent="11,889"></Estimation>
            </Grid>
            <Grid item>
                <Estimation
                    type={type}
                    title="Estimated Cost"
                    weekdaysContent="4,111"
                    weekendContent="1,480"></Estimation>
            </Grid>
        </Grid>
    )
}

export default Container