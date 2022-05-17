import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../../components/layout/Card/Card'
import HVACChart from '../HVACChart/HVACChart'
import Label from "../../../../components/forms/Label/Label"

const HVACDeviceList = () => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card headerContent={<Label sx={{ textAlign: "center", marginTop: 2, fontWeight: "bold" }} label="Under-achieving Devices" />} sx={{ width: "27vw", height: "55vh" }} content={<HVACChart />} />
            </Grid>
            <Grid item>
                <Card headerContent={<Label sx={{ textAlign: "center", marginTop: 2, fontWeight: "bold" }} label="Over Working Devices" />} sx={{ width: "27vw", height: "55vh" }} content={<HVACChart />} />
            </Grid>
            <Grid item>
                <Card headerContent={<Label sx={{ textAlign: "center", marginTop: 2, fontWeight: "bold" }} label="Under Working Devices" />} sx={{ width: "27vw", height: "55vh" }} content={<HVACChart />} />
            </Grid>
        </Grid>
    )
}

export default HVACDeviceList