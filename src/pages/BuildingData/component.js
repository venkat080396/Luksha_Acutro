import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux';
import Card from '../../components/Layout/Card/Card'
import { MapView } from './MapView'
import { ListView } from './ListView';
import { Header } from './Header';
import { fetchAsyncAllDeviceTypes } from './slice';

const BuildingData = () => {
    const [isMapView, setIsMapView] = useState(false);
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
        <Grid container direction='column'>
            <Grid item>
                <Card
                    headerContent={<Header handleClick={onClick} />}
                    sx={{ width: '90vw', height: '90vh', marginTop: '-1.5em' }}
                    content={getContent()} />
            </Grid>
        </Grid>
    )
}

export { BuildingData };