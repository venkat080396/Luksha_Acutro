import React from 'react'
import { Grid, styled } from '@mui/material';
import DeviceCard from './DeviceCard';

const StyledGrid = styled("Grid")({
    overflowY: 'auto',
    overflowX: "hidden",
    width: '88vw',
    float: 'left',
    height: '65vh',
    position: 'relative',
    scrollBehavior: "smooth",
    '&::-webkit-scrollbar': {
        width: '0.05em',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'white',
        outline: '1px solid white',
    }
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
                    {devices.map((device) => (
                        <DeviceCard device={device} deviceSx={deviceSx} isActiveDevice={isActiveDevice} />
                    ))}
                </StyledGrid>
            )}
        </>
    )
}

export default DeviceList