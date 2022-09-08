import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '../../../components/Layout/Card/Card'
import { MajorPlantSummary } from "./MajorPlantSummary"
import { EXPORTS } from '../constants.js'

const Exports = () => {
    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card
                    headerContent={
                        <Typography sx={{ marginLeft: 4 }}>
                            {EXPORTS.MAJOR_PLANT_SUMMARY.HEADER}
                        </Typography>}
                    sx={{ width: "90vw", height: "27vh" }}
                    content={<MajorPlantSummary />} />
            </Grid>
        </Grid>
    )
}

export { Exports }