import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../../components/layout/Card/Card'
import HVACChart from '../HVACChart/HVACChart'
import Label from "../../../../components/forms/Label/Label"

const HVACDeviceList = (props) => {
    const { chartSx } = props
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card headerContent={<Label sx={{ textAlign: "center", fontWeight: "bold" }} label="Under-achieving Devices" />} sx={chartSx} content={<HVACChart />} />
            </Grid>
            <Grid item>
                <Card headerContent={<Label sx={{ textAlign: "center", fontWeight: "bold" }} label="Over Working Devices" />} sx={chartSx} content={<HVACChart />} />
            </Grid>
            <Grid item>
                <Card headerContent={<Label sx={{ textAlign: "center", fontWeight: "bold" }} label="Under Working Devices" />} sx={chartSx} content={<HVACChart />} />
            </Grid>
        </Grid>
    )
}

export default HVACDeviceList