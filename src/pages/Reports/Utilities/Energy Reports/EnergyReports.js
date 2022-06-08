import React from 'react'
import Card from '../../../../components/layout/Card/Card'
import { Grid } from '@mui/material'
import IconLabel from "../../../../components/forms/IconLabel/IconLabel"
import EstimationContainer from "./Estimation/Container"
import { useSelector } from "react-redux";
import { ReactComponent as ElectricityIcon } from "../../../../assets/icons/Electricity.svg"
import { ReactComponent as WaterIcon } from "../../../../assets/icons/Water.svg"
import { ReactComponent as GasIcon } from "../../../../assets/icons/Gas.svg"
import { getEnergyConsumptionSummary } from '../../../../features/Utilities/utilitiesSlice'

const EnergyReports = (props) => {
    const { sx, estimationSx } = props;
    const electricityIconLabel = <IconLabel icon={<ElectricityIcon height="2.5em" width="2.5em" />} label="Electricity" />
    const waterIconLabel = <IconLabel icon={<WaterIcon height="2.5em" width="2.5em" />} label="Water" />
    const gasIconLabel = <IconLabel icon={<GasIcon height="2.5em" width="2.5em" />} label="Gas" />
    const energyConsumptionSummary = useSelector(getEnergyConsumptionSummary);

    const electricityData = energyConsumptionSummary.filter((data) => data.EnergyType === "Electricity")
    const waterData = energyConsumptionSummary.filter((data) => data.EnergyType === "Water")
    const gasData = energyConsumptionSummary.filter((data) => data.EnergyType === "Gas")

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
                <Card
                    headerContent={electricityIconLabel}
                    sx={sx}
                    content={<EstimationContainer sx={estimationSx} type="Electricity"
                        data={electricityData} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={waterIconLabel}
                    sx={sx}
                    content={<EstimationContainer sx={estimationSx} type="Water" />}
                    data={waterData} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={gasIconLabel}
                    sx={sx}
                    content={<EstimationContainer sx={estimationSx} type="Gas" />}
                    data={gasData} />
            </Grid>
        </Grid>
    )
}

export default EnergyReports