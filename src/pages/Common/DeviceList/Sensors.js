import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@mui/material';
import Sensor from './Sensor';
import Card from '../../../components/layout/Card/Card';
import { fetchAsyncDeviceSensorsForDeviceId, getDeviceSensors } from "../../../features/BuildingData/buildingDataSlice";

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
                <Grid item sx={{ marginTop: "1em" }}>
                    <Card key={sensor} sx={{ marginLeft: 11, height: "2.7em", width: "55vw", borderRadius: "0.5em" }} content={<Sensor deviceRecId={device?.RecId} sensorRecId={sensor.RecId} sensor={sensor} />} />
                </Grid>
            )) : null
            }
        </>
    )
}

export default Sensors