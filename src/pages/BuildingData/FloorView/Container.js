import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import FloorView from './FloorView'
import FloorViewDetails from './FloorViewDetails'
import { useSelector } from "react-redux";
import { getSelectedFloor } from '../../../features/Home/homeSlice'
import { FLOORVIEW } from "../constants";

const Container = () => {
    const selectedFloor = useSelector(getSelectedFloor);
    return (
        <>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Grid item>
                    <Card
                        sx={{ width: "90vw", height: "80vh" }}
                        content={<FloorView floor={selectedFloor} />} />
                </Grid>
                <Grid item>
                    <Card
                        headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }}
                            label={FLOORVIEW.DETAILS} />}
                        sx={{ width: "90vw", height: "50vh" }}
                        content={<FloorViewDetails />} />
                </Grid>
            </Grid>
        </>
    )
}

export default Container