import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '../../../../components/Layout/Card/Card'
import { HVACChart } from '../HVACChart'
import { ComfortChart } from "../../Comfort/ComfortChart"
import { HVAC_EFFICIENCY } from '../../constants.js'

const HVACDeviceList = (props) => {
    const { chartSx } = props
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card headerContent={
                    <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                        {HVAC_EFFICIENCY.UNDER_ACHIEVING_DEVICES}
                    </Typography>}
                    sx={chartSx}
                    content={<ComfortChart deviceRecId="1" sensorRecId="1" aspetRatio="1.4" />} />
            </Grid>
            <Grid item>
                <Card headerContent={
                    <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                        {HVAC_EFFICIENCY.OVER_WORKING_DEVICES}
                    </Typography>}
                    sx={chartSx}
                    content={<ComfortChart deviceRecId="1" sensorRecId="2" aspetRatio="1.4" />} />
            </Grid>
            <Grid item>
                <Card headerContent={
                    <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                        {HVAC_EFFICIENCY.UNDER_WORKING_DEVICES}
                    </Typography>}
                    sx={chartSx}
                    content={<ComfortChart deviceRecId="1" sensorRecId="5" aspetRatio="1.4" />} />
            </Grid>
        </Grid>
    )
}

export { HVACDeviceList }