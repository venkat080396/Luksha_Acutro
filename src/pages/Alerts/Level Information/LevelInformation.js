import React from 'react'
import { Box } from '@mui/material'
import Table from "../../../components/table/Table"

const columns = [
    { field: 'type', headerName: '', width: 200 },
    { field: 'levelOne', headerName: 'Level 1', width: 350 },
    { field: 'levelTwo', headerName: 'Level 2', width: 350 },
    { field: 'levelThree', headerName: 'Level 3', width: 350 }]

const rows = [
    { id: 1, type: "Communication Method", levelOne: "Email", levelTwo: "Email/SMS", levelThree: "Email/SMS" },
    { id: 2, type: "Alerting Frequency", levelOne: "Every 6 hours until resolved", levelTwo: "Every 4 hours until resolved (can only SMS during hours of 0600-2200)", levelThree: "Every 2 hours until resolved (can only SMS during hours of 0600-2200)" },
    {
        id: 3, type: "Auto-Escalation Condition", levelOne: "No user responds to alert within 24 hours from initial level 1 alert\nOR\nA user manually escalates to the next level as they are not able to take action or investigate alert",
        levelTwo: "No user responds to alert within 24 hours from initial level 2 alert\nOR\nA user manually escalates to the next level as they are not able to take action or investigate alert",
        levelThree: "If no-one responds within 24 hours, Acutro will close the alert and mark as Not Resolved"
    }
]

const LevelInformation = () => {
    return (
        <Box
            sx={{ padding: "2rem" }}>
            <Table
                rows={rows}
                columns={columns}
            />
        </Box>
    )
}

export default LevelInformation