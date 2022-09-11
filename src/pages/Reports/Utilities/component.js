import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material'
import { EnergyReports } from './EnergyReports'
import { ActiveDevices } from './ActiveDevices'
import Card from '../../../components/Layout/Card/Card'
import { fetchAsyncDevices, fetchAsyncEnergyConsumptionSummary } from './slice'
import { getSelectedBuilding, getSelectedFloor, getFromDate, getToDate } from '../../Home/slice'
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
        <Grid direction='column' container justifyContent='center' alignItems='center' spacing={3}>
            <Grid item>
                <Card
                    headerContent={<Typography sx={{ marginLeft: 4 }}>
                        {UTILITIES.ENERGY_REPORTS.HEADER}
                    </Typography>}
                    sx={{ width: '90vw', height: '70vh' }}
                    content={<EnergyReports sx={{ width: '27vw', height: '55vh' }}
                        estimationSx={{ marginTop: 3 }} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={
                        <Typography sx={{ marginLeft: 4 }}>
                            {UTILITIES.ACTIVE_DEVICES.HEADER}
                        </Typography>}
                    sx={{ width: '90vw', height: '50vh' }}
                    content={<ActiveDevices />} />
            </Grid>
        </Grid>
    )
}

export { Utilities }