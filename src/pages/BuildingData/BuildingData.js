import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import Card from '../../components/layout/Card/Card'
import MapView from "./MapView/MapView"
import ListView from './ListView/ListView';
import Header from './Header/Header';
import { fetchAsyncAllDeviceTypes } from "../../features/BuildingData/buildingDataSlice";

const BuildingData = () => {
    const [isMapView, setIsMapView] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncAllDeviceTypes(null))
    })

    const getContent = () => {
        return (isMapView ? <MapView /> : <ListView />);
    }

    const onClick = (value) => {
        setIsMapView(value)
    }

    return (
        <Grid container direction="column">
            <Grid item>
                <Card
                    headerContent={<Header handleClick={onClick} />}
                    sx={{ width: "90vw", height: "80vh", marginTop: "-1.5em" }}
                    content={getContent()} />
            </Grid>
        </Grid>
    )
}

export default BuildingData