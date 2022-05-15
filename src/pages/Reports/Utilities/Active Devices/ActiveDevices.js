import React from 'react'
import Card from '../../../../components/layout/Card/Card'
import { Grid, styled } from '@mui/material';
import Device from './Device/Device'
import { useSelector } from "react-redux";
import { getAllDevices } from '../../../../features/Utilities/utilitiesSlice'

const StyledGrid = styled("Grid")({
    overflowY: 'auto',
    overflowX: "hidden",
    width: '83vw',
    float: 'left',
    height: '45vh',
    position: 'relative'
});

const ActiveDevices = () => {
    const devices = useSelector(getAllDevices);

    return (
        <>
            {devices && devices.length !== 0 && (
                <StyledGrid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    {devices.map((device) => (
                        <Grid item sx={{ marginBottom: 2 }}>
                            <Card key={device} sx={{ marginLeft: 5 }} content={<Device device={device} />} />
                        </Grid>
                    ))}
                </StyledGrid>
            )}
        </>
    )
}

export default ActiveDevices