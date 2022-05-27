import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import Date from "../../../../components/forms/Date/Date"
import Button from "../../../../components/forms/Button/Button"
import { exportData } from "../../../../features/Exports/exportsSlice"
import { getSelectedBuilding, getSelectedFloor } from '../../../../features/Home/homeSlice'


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
                Generate a summary report of Major Plant Devices for the selected period:
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
                        <Button value="Generate" onClick={onGenerate} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MajorPlantSummary