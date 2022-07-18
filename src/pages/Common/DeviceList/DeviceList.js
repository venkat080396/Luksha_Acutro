import React from 'react'
import { Grid, styled } from '@mui/material';
import DeviceCard from './DeviceCard';

const StyledGrid = styled(Grid)({
    overflowY: 'auto',
    overflowX: "hidden",
    width: '88vw',
    maxHeight: '40vh'
});

const DeviceList = (props) => {
    const { devices, deviceSx, isActiveDevice } = props;

    return (
        <>
            {devices && devices.length !== 0 && (
                <StyledGrid container
                    direction="column"
                    justifyContent="center"
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

export default DeviceList