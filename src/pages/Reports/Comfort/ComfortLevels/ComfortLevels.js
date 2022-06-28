import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../../components/layout/Card/Card'
import ComfortChart from '../ComfortChart/ComfortChart'
import Slider from '../../../../components/layout/Slider/Slider'

const ComfortLevels = (props) => {
    const { chartSx, sliderSx, chartWidth, chartHeight, isSliderVisible, aspetRatio } = props
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}>
            <Grid item>
                <Card sx={chartSx} content={<ComfortChart width={chartWidth} height={chartHeight} aspetRatio={aspetRatio} />} />
            </Grid>
            {isSliderVisible && (
                <Grid item>
                    <Card sx={sliderSx} content={<Slider />} />
                </Grid>)
            }
        </Grid>
    )
}

export default ComfortLevels