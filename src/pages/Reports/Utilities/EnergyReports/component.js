import React from 'react'
import Card from '../../../../components/Layout/Card/Card'
import { Grid } from '@mui/material'
import IconLabel from '../../../../components/Inputs/IconLabel/IconLabel'
import { Container as EstimationContainer } from './Estimation'
import { useSelector } from 'react-redux';
import { ReactComponent as ElectricityIcon } from '../../../../assets/icons/Electricity.svg'
import { ReactComponent as WaterIcon } from '../../../../assets/icons/Water.svg'
import { ReactComponent as GasIcon } from '../../../../assets/icons/Gas.svg'
import { getEnergyConsumptionSummary } from '../slice'
import { UTILITIES } from '../../constants'

const EnergyReports = (props) => {
    const { sx, estimationSx } = props;
    const electricityIconLabel = <IconLabel icon={<ElectricityIcon height='2.5em' width='2.5em' />} label={UTILITIES.ENERGY_REPORTS.ELECTRICITY} />
    const waterIconLabel = <IconLabel icon={<WaterIcon height='2.5em' width='2.5em' />} label={UTILITIES.ENERGY_REPORTS.WATER} />
    const gasIconLabel = <IconLabel icon={<GasIcon height='2.5em' width='2.5em' />} label={UTILITIES.ENERGY_REPORTS.GAS} />
    const energyConsumptionSummary = useSelector(getEnergyConsumptionSummary);

    const electricityData = energyConsumptionSummary.filter((data) => data.EnergyType === UTILITIES.ENERGY_REPORTS.ELECTRICITY)
    const waterData = energyConsumptionSummary.filter((data) => data.EnergyType === UTILITIES.ENERGY_REPORTS.WATER)
    const gasData = energyConsumptionSummary.filter((data) => data.EnergyType === UTILITIES.ENERGY_REPORTS.GAS)

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={4}>
            <Grid item>
                <Card
                    headerContent={electricityIconLabel}
                    sx={sx}
                    content={<EstimationContainer sx={estimationSx} type={UTILITIES.ENERGY_REPORTS.ELECTRICITY}
                        data={electricityData} />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={waterIconLabel}
                    sx={sx}
                    content={<EstimationContainer sx={estimationSx} type={UTILITIES.ENERGY_REPORTS.WATER} />}
                    data={waterData} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={gasIconLabel}
                    sx={sx}
                    content={<EstimationContainer sx={estimationSx} type={UTILITIES.ENERGY_REPORTS.GAS} />}
                    data={gasData} />
            </Grid>
        </Grid>
    )
}

export { EnergyReports }