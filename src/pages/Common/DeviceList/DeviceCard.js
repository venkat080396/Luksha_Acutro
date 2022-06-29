import React, { useState } from 'react'
import { Grid } from '@mui/material';
import Sensors from './Sensors';
import Device from '../DeviceList/Device'
import Card from '../../../components/layout/Card/Card'

const DeviceCard = (props) => {
    const { device, deviceSx, isActiveDevice } = props;
    const [showSensor, setShowSensor] = useState(false);
    return (
        <>
            <Grid item sx={{ marginTop: "1em" }}>
                <Card key={device} sx={{ marginLeft: 5, borderRadius: "0.5em", ...deviceSx }} content={<Device isActiveDevice={isActiveDevice} onDeviceClick={() => setShowSensor(!showSensor)} device={device} />} />
            </Grid>
            {(showSensor & !isActiveDevice) ? (
                <Grid item>
                    <Sensors device={device} />
                </Grid>
            ) : null}
        </>
    )
}

export default DeviceCard