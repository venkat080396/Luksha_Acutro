import React from 'react'
import { Grid, Stack, Box } from '@mui/material'
import Card from '../../components/layout/Card/Card'
import Label from "../../components/forms/Label/Label"
import InstalledAlerts from "./Installed Alerts/InstalledAlerts"
import EscalationSettings from './Escalation Settings/EscalationSettings'
import Select from '../../components/forms/Select/Select'
import LevelInformation from './LevelInformation/LevelInformation'
import TooltipIcon from '../../components/tooltipIcon/TooltipIcon'

const items = [{ RecId: 0, Name: "All Sites" }, { RecId: 1, Name: "Site 1" }]
const Header = () => {
    return (
        <Grid container
            alignItems="center"
            sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }}>
            <Grid item xs={4}>
                <Label label="Alert Escalation Settings" />
            </Grid>
            <Grid item xs={4}>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}>
                    <div>Site:</div>
                    <div>
                        <Select
                            sx={{
                                width: 100,
                                height: 20
                            }}
                            items={items}
                            defaultValue={0} />
                    </div>
                </Stack>
            </Grid>
        </Grid>
    )
}

const Container = () => {
    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card
                    informationContnet="List of all alerts installed across this site"
                    headerContent={<Label sx={{ marginLeft: 4, marginBottom: 2, marginTop: 2 }} label="Installed Alerts" />}
                    content={<InstalledAlerts />} />
            </Grid>
            <Grid item>
                <Card
                    informationContnet="Escalation hierarchy for the entire user base across this site"
                    headerContent={<Header />}
                    sx={{ width: "90vw", height: "50vh" }}
                    content={<EscalationSettings />} />
            </Grid>
            <Grid item>
                <Card
                    informationContnet="Escalation Help Guide"
                    sx={{ width: "90vw" }}
                    content={<LevelInformation />} />
            </Grid>
        </Grid>
    )
}

export default Container