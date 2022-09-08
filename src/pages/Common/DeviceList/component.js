import React, { useState } from 'react'
import { Grid, styled } from '@mui/material';
import { Sensors } from './Sensors';
import { Device } from './Device';
import Card from '../../../components/Layout/Card/Card';

const StyledGrid = styled(Grid)({
    overflowY: 'auto',
    overflowX: "hidden",
    width: '55vw',
    '&::-webkit-scrollbar': {
        width: '3px',
        backgroundColor: '#C4C4C4',
        borderRadius: "20px"
    },
    '&::-webkit-scrollbar-track': {
        width: '3px',
        background: "rgba(196, 196, 196, 0.1)",
        borderRadius: "20px"
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'white',
        outline: '1px solid white',
    },
    height: '65vh'
});

const DeviceCard = (props) => {
    const { device, deviceSx, isActiveDevice } = props;
    const [showSensor, setShowSensor] = useState(false);
    return (
        <Grid container direction="column">
            <Grid item sx={{ marginTop: "1em" }}>
                <Card
                    key={device}
                    sx={{ marginLeft: 2, borderRadius: "0.5em", ...deviceSx }}
                    content={<Device isActiveDevice={isActiveDevice}
                        onDeviceClick={() => setShowSensor(!showSensor)}
                        device={device} />} />
            </Grid>
            {(showSensor & !isActiveDevice) ? (
                <Grid item>
                    <Sensors device={device} />
                </Grid>
            ) : null}
        </Grid>
    )
}

const DeviceList = (props) => {
    const { devices, deviceSx, isActiveDevice } = props;

    return (
        <>
            {devices && devices.length !== 0 && (
                <StyledGrid container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">
                    <Grid item>
                        {devices.map((device) => (
                            <DeviceCard
                                device={device}
                                deviceSx={deviceSx}
                                isActiveDevice={isActiveDevice} />
                        ))}
                    </Grid>
                </StyledGrid>
            )}
        </>
    )
}

export { DeviceList };