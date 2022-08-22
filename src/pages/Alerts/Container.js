import React from 'react'
import { Grid, Stack, Box, Typography } from '@mui/material'
import Card from '../../components/layout/Card/Card'
import Label from "../../components/forms/Label/Label"
import InstalledAlerts from "./Installed Alerts/InstalledAlerts"
import EscalationSettings from './Escalation Settings/EscalationSettings'
import LevelInformation from './Level Information/LevelInformation'

const items = [{ RecId: 0, Name: "All Sites" }, { RecId: 1, Name: "Site 1" }]
const Header = () => {
    return (
        <Grid container
            alignItems="center"
            sx={{ marginLeft: 4 }}>
            <Grid item xs={3}>
                <Typography variant="header2">
                    Alert Escalation Settings
                </Typography>
            </Grid>
            {/* <Grid item xs={3}>
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
            <Grid item xs={3}>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}>
                    <div>Building:</div>
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
            <Grid item xs={3}>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}>
                    <div>Floor:</div>
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
            </Grid> */}
        </Grid>
    )
}

const Container = () => {
    return (
        <Grid direction="column" container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Card
                    headerContent={<Typography variant="header2" sx={{ marginLeft: 4 }} >Installed Alerts</Typography>}
                    content={<InstalledAlerts />} />
            </Grid>
            <Grid item>
                <Card
                    headerContent={<Header />}
                    sx={{ width: "90vw" }}
                    content={<EscalationSettings />} />
            </Grid>
            <Grid item>
                <Card
                    sx={{ width: "90vw" }}
                    content={<LevelInformation />} />
            </Grid>
        </Grid>
    )
}

export default Container;
