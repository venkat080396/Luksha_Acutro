import React from 'react'
import Card from '../../../components/layout/Card/Card'
import { Grid, styled } from '@mui/material';
import Device from '../DeviceList/Device'

const StyledGrid = styled("Grid")({
    overflowY: 'auto',
    overflowX: "hidden",
    width: '88vw',
    float: 'left',
    height: '45vh',
    position: 'relative'
});

const DeviceList = (props) => {
    const { devices, deviceSx } = props;

    return (
        <>
            {devices && devices.length !== 0 && (
                <StyledGrid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    {devices.map((device) => (
                        <Grid item sx={{ marginTop: "1em" }}>
                            <Card key={device} sx={{ marginLeft: 5, borderRadius: "0.5em", ...deviceSx }} content={<Device device={device} />} />
                        </Grid>
                    ))}
                </StyledGrid>
            )}
        </>
    )
}

export default DeviceList