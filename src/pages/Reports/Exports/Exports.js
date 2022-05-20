import React from 'react'
import { Grid } from '@mui/material'
import Card from '../../../components/layout/Card/Card'
import Label from "../../../components/forms/Label/Label"
import MajorPlantSummary from "./MajorPlantSummary/MajorPlantSummary"

const Exports = () => {
    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Major Plant Summary" />} sx={{ width: "90vw", height: "27vh" }} content={<MajorPlantSummary />} />
            </Grid>
        </Grid>
    )
}

export default Exports