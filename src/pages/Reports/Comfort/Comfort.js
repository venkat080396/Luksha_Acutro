import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import { DevicesSummary } from '../Common/DeviceSummary/DevicesSummary'
import ComfortLevels from './ComfortLevels/ComfortLevels'
import Header from './ComfortLevels/Header'

const Comfort = () => {

    return (
        <>
            <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item>
                    <Card headerContent={<Header />} sx={{ width: "90vw", height: "100vh" }} content={<ComfortLevels />} />
                </Grid>
                <Grid item>
                    <Card headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Devices working against each other  (by sector)" />} sx={{ width: "90vw", height: "50vh" }} content={<DevicesSummary />} />
                </Grid>
            </Grid>
        </>
    )
}

export default Comfort