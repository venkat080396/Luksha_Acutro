import React from 'react'
import Card from '../../../../components/layout/Card/Card'
import { Grid } from '@mui/material';
import Device from './Device/Device'
import { useSelector } from "react-redux";
import { getAllDevices } from '../../../../features/Utilities/utilitiesSlice'

const ActiveDevices = () => {
    const devices = useSelector(getAllDevices);
    return (
        <Grid container spacing={2}>
            {devices && devices.count !== 0 && devices.map((device) => (
                <Grid item>
                    <Card key={device} sx={{ width: "1225px", height: "50px", marginLeft: 5 }} content={<Device device={device} />} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ActiveDevices