import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '../../../components/Layout/Card/Card'
import { DevicesSummary } from '../Common/DeviceSummary/component'
import { ComfortLevels, Header } from './ComfortLevels'
import { COMMON } from '../constants.js'

const Comfort = () => {

    return (
        <>
            <Grid container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={3}>
                <Grid item>
                    <Card
                        headerContent={<Header spacing={126} />}
                        sx={{ width: '90vw', height: '88vh' }}
                        content={<ComfortLevels
                            chartSx={{ width: '85vw', height: '75vh' }}
                            sliderSx={{ width: '85vw', height: '20vh' }}
                            chartWidth={900}
                            chartHeight={700}
                            isSliderVisible={false}
                            aspectRatio='2.7' />} />
                </Grid>
                <Grid item>
                    <Card
                        headerContent={
                            <Typography sx={{ marginLeft: 4 }}>
                                {COMMON.DEVICE_SUMMARY.HEADER}
                            </Typography>}
                        sx={{ width: '90vw', height: '50vh' }}
                        content={<DevicesSummary />} />
                </Grid>
            </Grid>
        </>
    )
}

export { Comfort };