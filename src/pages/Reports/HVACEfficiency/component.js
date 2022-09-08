import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '../../../components/Layout/Card/Card'
import { DevicesSummary } from '../Common/DeviceSummary/component';
import { HVACDeviceList } from './HVACDeviceList'
import { COMMON, HVAC_EFFICIENCY } from '../constants'

const HVACEfficiency = () => {

    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card
                    headerContent={<Typography sx={{ marginLeft: 4 }}>
                        {HVAC_EFFICIENCY.HEADER}
                    </Typography>}
                    sx={{ width: "90vw", height: "70vh" }}
                    content={<HVACDeviceList chartSx={{ width: "27vw", height: "55vh" }} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={
                        <Typography sx={{ marginLeft: 4 }}>
                            {COMMON.DEVICE_SUMMARY.HEADER}
                        </Typography>}
                    sx={{ width: "90vw", height: "50vh" }}
                    content={<DevicesSummary />} />
            </Grid>
        </Grid>
    )
}

export { HVACEfficiency };