import { Grid } from '@mui/material'
import React from 'react'
import Estimation from './Estimation'
import { convertToFloat } from "../../../../../common/Utils"

const Container = (props) => {
    const { type, data } = props
    const weekdaysData = data?.filter(data => data.WeekDayOrEnd === "WeekDay")
    const weekendData = data?.filter(data => data.WeekDayOrEnd === "WeekEnd")

    const weekDaysConsumedUnits = weekdaysData?.reduce((prev, current) => convertToFloat(prev.ConsumedUnits) + convertToFloat(current.ConsumedUnits), 0)
    const weekDaysCost = weekdaysData?.reduce((prev, current) => convertToFloat(prev.Cost) + convertToFloat(current.Cost), 0)
    const weekendConsumedUnits = weekendData?.reduce((prev, current) => convertToFloat(prev.ConsumedUnits) + convertToFloat(current.ConsumedUnits), 0)
    const weekendCost = weekendData?.reduce((prev, current) => convertToFloat(prev.Cost) + convertToFloat(current.Cost), 0)

    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 3 }}
            spacing={3}>
            <Grid item>
                <Estimation
                    type={type}
                    title="Estimated Usage"
                    weekdaysContent={weekDaysConsumedUnits}
                    weekendContent={weekendConsumedUnits}></Estimation>
            </Grid>
            <Grid item>
                <Estimation
                    type={type}
                    title="Estimated Cost"
                    weekdaysContent={weekDaysCost}
                    weekendContent={weekendCost}></Estimation>
            </Grid>
        </Grid>
    )
}

export default Container