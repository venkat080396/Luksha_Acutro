import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@mui/material'
import EnergyReports from './Energy Reports/EnergyReports'
import ActiveDevices from './Active Devices/ActiveDevices'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import { fetchAsyncDevices } from '../../../features/Utilities/utilitiesSlice'
import { getSelectedBuilding, getSelectedFloor } from '../../../features/Home/homeSlice'

const Utilities = () => {
    const dispatch = useDispatch();
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);

    useEffect(() => {
        console.log(selectedFloor)
        if (selectedBuilding && selectedFloor) {
            console.log("Building", selectedBuilding.RecId)
            console.log("Floor", selectedFloor.RecId)
            dispatch(fetchAsyncDevices([selectedBuilding.RecId, selectedFloor.RecId]));
        }
    });

    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Energy Reports" />} sx={{ width: "1300px", height: "500px" }} content={<EnergyReports />} />
            </Grid>
            <Grid item>
                <Card headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Active Devices" />} sx={{ width: "1300px", height: "400px" }} content={<ActiveDevices />} />
            </Grid>
        </Grid>
    )
}

export default Utilities