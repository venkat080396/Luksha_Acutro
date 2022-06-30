import { Grid } from '@mui/material'
import React from 'react'
import Card from '../../../components/layout/Card/Card'
import ComfortChart from '../../Reports/Comfort/ComfortChart/ComfortChart'

const xAxisValues = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

const SensorChart = (props) => {
    const { deviceRecId, sensorRecId } = props;
    return (
        <Grid container>
            <Grid item sm={12} md={12} lg={12}>
                <ComfortChart deviceRecId={deviceRecId} sensorRecId={sensorRecId} xAxisValues={xAxisValues} aspetRatio={3} />
            </Grid>
        </Grid>
    )
}

export default SensorChart