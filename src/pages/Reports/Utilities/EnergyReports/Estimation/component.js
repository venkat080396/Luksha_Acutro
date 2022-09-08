import React from 'react'
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { Grid, styled } from '@mui/material'
import { convertToFloat } from "../../../../../common/utils"
import { UTILITIES, DATA, COMMON } from '../../../constants'

const GridItemHeader = styled('Grid')({
    color: '#999999',
    fontSize: 13
});

const GreenGridItemContent = styled('Grid')({
    color: '#50ff40'
});

const RedGridItemContent = styled('Grid')({
    color: '#ff0000'
});

const RedGridItemSubContent = styled('Grid')({
    color: '#9b0000',
    fontSize: 10
});

const GreenGridItemSubContent = styled('Grid')({
    color: '#76BA1B',
    fontSize: 10
});

const Estimation = (props) => {
    const { title, weekdaysContent, weekendContent, type } = props
    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}>
            <Grid item>
                {title}
            </Grid>
            <Grid item>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-evenly"
                    sx={{ width: "25vw" }}>
                    <Grid item>
                        <Grid container
                            direction="column"
                            alignItems="center">
                            <GridItemHeader item>
                                {UTILITIES.ENERGY_REPORTS.ESTIMATION.WEEKDAYS}
                            </GridItemHeader>
                            <RedGridItemContent item>
                                <Grid container
                                    direction="row"
                                    alignItems="flex-start">
                                    <Grid item>{title && title === UTILITIES.ENERGY_REPORTS.ESTIMATION.ESTIMATED_COST && (<CurrencyPoundIcon fontSize="10px" />)}</Grid>
                                    <Grid item>{weekdaysContent}</Grid>
                                </Grid>
                            </RedGridItemContent>
                            {title && title === UTILITIES.ENERGY_REPORTS.ESTIMATION.ESTIMATED_USAGE && (
                                <RedGridItemSubContent item>
                                    {type && type === UTILITIES.ENERGY_REPORTS.WATER ? COMMON.UNITS.LITRES : COMMON.UNITS.KILOWATT_HOUR}
                                </RedGridItemSubContent>)
                            }
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="column"
                            alignItems="center">
                            <GridItemHeader item>
                                {UTILITIES.ENERGY_REPORTS.ESTIMATION.WEEKEND}
                            </GridItemHeader>
                            <GreenGridItemContent item>
                                <Grid container
                                    direction="row"
                                    alignItems="flex-start">
                                    <Grid item>{title && title === UTILITIES.ENERGY_REPORTS.ESTIMATION.ESTIMATED_COST && (<CurrencyPoundIcon fontSize="10px" />)}</Grid>
                                    <Grid item>{weekendContent}</Grid>
                                </Grid>
                            </GreenGridItemContent>
                            {title && title === UTILITIES.ENERGY_REPORTS.ESTIMATION.ESTIMATED_USAGE && (
                                <GreenGridItemSubContent item>
                                    {type && type === UTILITIES.ENERGY_REPORTS.WATER ? COMMON.UNITS.LITRES : COMMON.UNITS.KILOWATT_HOUR}
                                </GreenGridItemSubContent>)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

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

export { Container };