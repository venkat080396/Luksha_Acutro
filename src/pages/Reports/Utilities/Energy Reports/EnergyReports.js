import React from 'react'
import Card from '../../../../components/layout/Card/Card'
import { Grid } from '@mui/material'
import IconLabel from "../../../../components/forms/IconLabel/IconLabel"
import EstimationContainer from "./Estimation/Container"
import { ReactComponent as ElectricityIcon } from "../../../../assets/icons/Electricity.svg"
import { ReactComponent as WaterIcon } from "../../../../assets/icons/Water.svg"
import { ReactComponent as GasIcon } from "../../../../assets/icons/Gas.svg"


const EnergyReports = () => {
    const electricityIconLabel = <IconLabel icon={<ElectricityIcon height="2.5em" width="2.5em" />} label="Electricity" />
    const waterIconLabel = <IconLabel icon={<WaterIcon height="2.5em" width="2.5em" />} label="Water" />
    const gasIconLabel = <IconLabel icon={<GasIcon height="2.5em" width="2.5em" />} label="Gas" />

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card headerContent={electricityIconLabel} sx={{ width: "27vw", height: "55vh" }} content={<EstimationContainer type="Electricity" />} />
            </Grid>
            <Grid item>
                <Card headerContent={waterIconLabel} sx={{ width: "27vw", height: "55vh" }} content={<EstimationContainer type="Water" />} />
            </Grid>
            <Grid item>
                <Card headerContent={gasIconLabel} sx={{ width: "27vw", height: "55vh" }} content={<EstimationContainer type="Gas" />} />
            </Grid>
        </Grid>
    )
}

export default EnergyReports