import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../../components/layout/Card/Card'
import HVACChart from '../HVACChart/HVACChart'
import Label from "../../../../components/forms/Label/Label"
import ComfortChart from "../../Comfort/ComfortChart/ComfortChart"
import { HVAC_EFFICIENCY } from '../../constants.js'

const HVACDeviceList = (props) => {
    const { chartSx } = props
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card headerContent={
                    <Label
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                        label={HVAC_EFFICIENCY.UNDER_ACHIEVING_DEVICES} />}
                    sx={chartSx}
                    content={<ComfortChart deviceRecId="1" sensorRecId="1" aspetRatio="1.4" />} />
            </Grid>
            <Grid item>
                <Card headerContent={
                    <Label
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                        label={HVAC_EFFICIENCY.OVER_WORKING_DEVICES} />}
                    sx={chartSx}
                    content={<ComfortChart deviceRecId="1" sensorRecId="2" aspetRatio="1.4" />} />
            </Grid>
            <Grid item>
                <Card headerContent={
                    <Label
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                        label={HVAC_EFFICIENCY.UNDER_WORKING_DEVICES} />}
                    sx={chartSx}
                    content={<ComfortChart deviceRecId="1" sensorRecId="5" aspetRatio="1.4" />} />
            </Grid>
        </Grid>
    )
}

export default HVACDeviceList