import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@mui/material'
import EnergyReports from './Energy Reports/EnergyReports'
import ActiveDevices from './Active Devices/ActiveDevices'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import { fetchAsyncDevices, fetchAsyncEnergyConsumptionSummary } from '../../../features/Utilities/utilitiesSlice'
import { getSelectedBuilding, getSelectedFloor, getFromDate, getToDate } from '../../../features/Home/homeSlice'
import { UTILITIES } from '../constants'

const Utilities = () => {
    const dispatch = useDispatch();
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const fromDate = useSelector(getFromDate);
    const toDate = useSelector(getToDate);

    useEffect(() => {
        if (selectedBuilding?.RecId && selectedFloor?.RecId) {
            dispatch(fetchAsyncDevices([selectedBuilding.RecId, selectedFloor.RecId]));
        }
    });

    useEffect(() => {
        dispatch(fetchAsyncEnergyConsumptionSummary([fromDate, toDate, 1, selectedBuilding.RecId, selectedFloor.RecId]));
    }, [dispatch, fromDate, toDate, selectedBuilding, selectedFloor])

    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card
                    headerContent={<Label sx={{ marginLeft: 4 }}
                        label={UTILITIES.ENERGY_REPORTS.HEADER} />}
                    sx={{ width: "90vw", height: "70vh" }}
                    content={<EnergyReports sx={{ width: "27vw", height: "55vh" }}
                        estimationSx={{ marginTop: 3 }} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={<Label sx={{ marginLeft: 4 }}
                        label={UTILITIES.ACTIVE_DEVICES.HEADER} />}
                    sx={{ width: "90vw", height: "50vh" }}
                    content={<ActiveDevices />} />
            </Grid>
        </Grid>
    )
}

export default Utilities