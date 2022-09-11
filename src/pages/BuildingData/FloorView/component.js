import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '../../../components/Layout/Card/Card'
import FloorView from './FloorView/component'
import { useSelector } from 'react-redux';
import { getSelectedFloor } from '../../Home/slice'
import { FLOORVIEW } from '../constants';

const FloorViewDetails = () => {
    return (
        <></>
    )
}

const Container = () => {
    const selectedFloor = useSelector(getSelectedFloor);
    return (
        <>
            <Grid container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={3}>
                <Grid item>
                    <Card
                        sx={{ width: '90vw', height: '80vh' }}
                        content={<FloorView floor={selectedFloor} />} />
                </Grid>
                <Grid item>
                    <Card
                        headerContent={
                            <Typography sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }}>
                                {FLOORVIEW.DETAILS}
                            </Typography>}
                        sx={{ width: '90vw', height: '50vh' }}
                        content={<FloorViewDetails />} />
                </Grid>
            </Grid>
        </>
    )
}

export { Container };