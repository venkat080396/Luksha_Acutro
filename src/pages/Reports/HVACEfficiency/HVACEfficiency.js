import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import { DevicesSummary } from '../Common/DeviceSummary/DevicesSummary'
import HVACDeviceList from './HVACDeviceList/HVACDeviceList'
import { COMMON, HVAC_EFFICIENCY } from '../constants.js'

const HVACEfficiency = () => {

    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card
                    headerContent={<Label sx={{ marginLeft: 4 }} label={HVAC_EFFICIENCY.HEADER} />}
                    sx={{ width: "90vw", height: "70vh" }}
                    content={<HVACDeviceList chartSx={{ width: "27vw", height: "55vh" }} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={<Label sx={{ marginLeft: 4 }} label={COMMON.DEVICE_SUMMARY.HEADER} />}
                    sx={{ width: "90vw", height: "50vh" }}
                    content={<DevicesSummary />} />
            </Grid>
        </Grid>
    )
}

export default HVACEfficiency