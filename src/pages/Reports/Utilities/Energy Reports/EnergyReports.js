import React from 'react'
import Card from '../../../../components/layout/Card/Card'
import { Grid } from '@mui/material'
import IconLabel from "../../../../components/forms/IconLabel/IconLabel"
import EstimationContainer from "./Estimation/Container"
import { ReactComponent as ElectricityIcon } from "../../../../assets/icons/Electricity.svg"
import { ReactComponent as WaterIcon } from "../../../../assets/icons/Water.svg"
import { ReactComponent as GasIcon } from "../../../../assets/icons/Gas.svg"


const EnergyReports = () => {
    const electricityIconLabel = <IconLabel icon={<ElectricityIcon height="40px" width="40px" />} label="Electricity" />
    const waterIconLabel = <IconLabel icon={<WaterIcon height="40px" width="40px" />} label="Water" />
    const gasIconLabel = <IconLabel icon={<GasIcon height="40px" width="40px" />} label="Gas" />

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card headerContent={electricityIconLabel} sx={{ width: "385px", height: "400px" }} content={<EstimationContainer type="Electricity" />} />
            </Grid>
            <Grid item>
                <Card headerContent={waterIconLabel} sx={{ width: "385px", height: "400px" }} content={<EstimationContainer type="Water" />} />
            </Grid>
            <Grid item>
                <Card headerContent={gasIconLabel} sx={{ width: "385px", height: "400px" }} content={<EstimationContainer type="Gas" />} />
            </Grid>
        </Grid>
    )
}

export default EnergyReports