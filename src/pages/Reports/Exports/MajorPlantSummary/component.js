import React, { useState } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import Date from "../../../../components/Inputs/Date/Date"
import { exportData } from "../slice"
import { getSelectedBuilding, getSelectedFloor } from '../../../Home/slice'
import { EXPORTS } from '../../constants.js'

const MajorPlantSummary = () => {
    const dispatch = useDispatch();
    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);

    const onGenerate = () => {
        dispatch(exportData([fromDate, toDate, 1, selectedBuilding.RecId, selectedFloor.RecId]))
    }

    return (
        <Grid container
            direction="column"
            alignItems="flex-start"
            sx={{ marginLeft: 4, marginTop: 5 }}
        >
            <Grid item>
                {EXPORTS.MAJOR_PLANT_SUMMARY.DESCRIPTION}
            </Grid>
            <Grid item>
                <Grid container
                    sx={{ paddingTop: 2 }}
                    spacing={5}>
                    <Grid item>
                        <Date value={fromDate} onDateChange={value => setFromDate(value)} />
                    </Grid>
                    <Grid item>
                        <Date value={toDate} onDateChange={value => setToDate(value)} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={onGenerate}>
                            <Typography>
                                {EXPORTS.BUTTONS.GENERATE}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export { MajorPlantSummary };