import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Card from '../../../../components/Layout/Card/Card';
import { fetchAsyncDeviceSensorsForDeviceId, getDeviceSensors } from '../../../BuildingData/slice';
import { Dialog } from '../../../../components/Feedback/Dialog';
import { LinearProgress } from '../../../../components/Feedback/Progress/LinearProgress';
import { SensorChart } from './SensorsChart';

const xAxisValues = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

const SensorChartCard = (props) => {
    const { deviceRecId, sensorRecId } = props;
    return (
        <Grid container>
            <Grid item sm={12} md={12} lg={12}>
                <SensorChart deviceRecId={deviceRecId} sensorRecId={sensorRecId} xAxisValues={xAxisValues} aspetRatio={3} />
            </Grid>
        </Grid>
    )
}

const Sensor = (props) => {
    const { sensor, deviceRecId, sensorRecId } = props;
    const [openDialog, setOpenDialog] = useState(false);

    return (<>
        <Grid container
            direction='row'
            alignItems='center'
            justifyContent='flex-end'
            sx={{ paddingLeft: 3, paddingTop: '0.5em' }}
            onClick={() => setOpenDialog(true)}>
            <Grid item xs={4}>
                {sensor.Name}
            </Grid>
            <Grid xs={8} sx={{ width: '30em', paddingRight: '0.5em' }}>
                <LinearProgress value={sensor.Name === 'Pump 1 Vibration Sensor' ? 99.99 : 100} />
            </Grid>
        </Grid>
        <Dialog
            height={500}
            width={1200}
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            title={`Sensor Information - ${sensor.Name}`}
            content={<SensorChartCard deviceRecId={deviceRecId} sensorRecId={sensorRecId} />} />
    </>
    )
}

const Sensors = (props) => {
    const { device } = props;
    const sensors = useSelector(getDeviceSensors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncDeviceSensorsForDeviceId(device?.RecId))
    }, [device?.RecId])

    return (
        <>
            {sensors ? sensors.map((sensor) => (
                <Grid item sx={{ marginTop: '1em' }}>
                    <Card key={sensor}
                        sx={{ marginLeft: 5, height: '2.7em', width: '48.3vw', borderRadius: '0.5em', cursor: 'pointer' }}
                        content={<Sensor deviceRecId={device?.RecId} sensorRecId={sensor.RecId} sensor={sensor} />} />
                </Grid>
            )) : null
            }
        </>
    )
}

export { Sensors };