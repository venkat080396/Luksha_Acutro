import { Grid } from '@mui/material'
import React from 'react'
import Estimation from './Estimation'
import { convertToFloat } from "../../../../../common/Utils"
import { UTILITIES, DATA } from '../../../constants'

const Container = (props) => {
    const { type, data, sx } = props
    const weekdaysData = data?.filter(data => data.WeekDayOrEnd === DATA.WEEKDAY)
    const weekendData = data?.filter(data => data.WeekDayOrEnd === DATA.WEEKEND)

    const weekDaysConsumedUnits = weekdaysData?.reduce((prev, current) => convertToFloat(prev.ConsumedUnits) + convertToFloat(current.ConsumedUnits), 0)
    const weekDaysCost = weekdaysData?.reduce((prev, current) => convertToFloat(prev.Cost) + convertToFloat(current.Cost), 0)
    const weekendConsumedUnits = weekendData?.reduce((prev, current) => convertToFloat(prev.ConsumedUnits) + convertToFloat(current.ConsumedUnits), 0)
    const weekendCost = weekendData?.reduce((prev, current) => convertToFloat(prev.Cost) + convertToFloat(current.Cost), 0)

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={sx}
            spacing={3}>
            <Grid item>
                <Estimation
                    type={type}
                    title={UTILITIES.ENERGY_REPORTS.ESTIMATION.ESTIMATED_USAGE}
                    weekdaysContent={weekDaysConsumedUnits}
                    weekendContent={weekendConsumedUnits}></Estimation>
            </Grid>
            <Grid item>
                <Estimation
                    type={type}
                    title={UTILITIES.ENERGY_REPORTS.ESTIMATION.ESTIMATED_COST}
                    weekdaysContent={weekDaysCost}
                    weekendContent={weekendCost}></Estimation>
            </Grid>
        </Grid>
    )
}

export default Container