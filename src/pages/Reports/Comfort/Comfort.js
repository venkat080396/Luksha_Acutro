import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import { DevicesSummary } from '../Common/DeviceSummary/DevicesSummary'
import ComfortLevels from './ComfortLevels/ComfortLevels'
import Header from './ComfortLevels/Header'
import { COMMON } from '../constants.js'

const Comfort = () => {

    return (
        <>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Grid item>
                    <Card
                        headerContent={<Header spacing={126} />}
                        sx={{ width: "90vw", height: "100vh" }}
                        content={<ComfortLevels
                            chartSx={{ width: "85vw", height: "55vh" }}
                            sliderSx={{ width: "85vw", height: "20vh" }}
                            chartWidth={900}
                            chartHeight={700}
                            isSliderVisible={true}
                            aspetRatio="4" />} />
                </Grid>
                <Grid item>
                    <Card
                        headerContent={<Label sx={{ marginLeft: 4 }} label={COMMON.DEVICE_SUMMARY.HEADER} />}
                        sx={{ width: "90vw", height: "50vh" }}
                        content={<DevicesSummary />} />
                </Grid>
            </Grid>
        </>
    )
}

export default Comfort