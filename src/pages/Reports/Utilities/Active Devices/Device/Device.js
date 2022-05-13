import React from 'react'
import { Grid } from '@mui/material'
import { ReactComponent as SettingsIcon } from "../../../../../assets/icons/Settings.svg"
import { ReactComponent as TemperatureIcon } from "../../../../../assets/icons/Temperature.svg"

const Device = ({ device }) => {
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={10} sx={{ paddingLeft: 3 }}>
                {device.Name}
            </Grid>
            <Grid item xs={1}>
                <Grid container sx={{ color: "green", marginLeft: 8 }}>
                    <Grid item sx={{ marginTop: 1 }}>
                        <TemperatureIcon height="30px" width="30px" />
                    </Grid>
                    <Grid item sx={{ marginTop: 1.5, marginLeft: -0.5 }}>
                        <div> 21 &deg;C</div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: 1, paddingLeft: 7 }}>
                <SettingsIcon height="30px" width="30px" />
            </Grid>
        </Grid>
    )
}

export default Device