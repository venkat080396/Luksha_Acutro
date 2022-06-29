import React from 'react'
import Card from '../../../components/layout/Card/Card'
import { Grid, styled, Box } from '@mui/material';
import Device from '../DeviceList/Device'
import HVACChart from '../../Reports/HVACEfficiency/HVACChart/HVACChart';

const StyledGrid = styled("Grid")({
    overflowY: 'auto',
    overflowX: "hidden",
    width: '88vw',
    float: 'left',
    height: '45vh',
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
                    <Box mt={4}>
                        <HVACChart />
                    </Box>
                </StyledGrid>
            )}
        </>
    )
}

export default DeviceList