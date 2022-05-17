import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import { DevicesSummary } from '../Common/DeviceSummary/DevicesSummary'
import HVACDeviceList from './HVACDeviceList/HVACDeviceList'
// import { fetchAsyncEnergyConsumptionSummary } from '../../../features/Utilities/utilitiesSlice'
// import { getSelectedBuilding, getSelectedFloor } from '../../../features/Home/homeSlice'

const HVACEfficiency = () => {
    // const dispatch = useDispatch();
    // const selectedBuilding = useSelector(getSelectedBuilding);
    // const selectedFloor = useSelector(getSelectedFloor);

    // useEffect(() => {
    //     if (selectedBuilding?.RecId && selectedFloor?.RecId) {
    //         dispatch(fetchAsyncEnergyConsumptionSummary(["2022-04-20", "2022-05-29", 1, selectedBuilding.RecId, selectedFloor.RecId]));
    //     }
    // });

    return (
        <>
            <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item>
                    <Card headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="HVAC Device List" />} sx={{ width: "90vw", height: "70vh" }} content={<HVACDeviceList />} />
                </Grid>
                <Grid item>
                    <Card headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Devices working against each other  (by sector)" />} sx={{ width: "90vw", height: "50vh" }} content={<DevicesSummary />} />
                </Grid>
            </Grid>
        </>
    )
}

export default HVACEfficiency