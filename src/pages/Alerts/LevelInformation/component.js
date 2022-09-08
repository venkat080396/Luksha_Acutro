import React from 'react'
import { Box } from '@mui/material'
import { Table } from "../../../components/DataDisplay/Table"
import { ESCALATION_SETTINGS, LEVEL_INFORMATION } from "../constants";

const columns = [
    { field: 'type', headerName: '', width: 200 },
    { field: 'levelOne', headerName: ESCALATION_SETTINGS.LEVEL1, width: 350 },
    { field: 'levelTwo', headerName: ESCALATION_SETTINGS.LEVEL2, width: 350 },
    { field: 'levelThree', headerName: ESCALATION_SETTINGS.LEVEL3, width: 350 }]

const rows = [
    {
        id: 1, type: LEVEL_INFORMATION.RECORD1.TYPE, levelOne: LEVEL_INFORMATION.RECORD1.LEVEL1,
        levelTwo: LEVEL_INFORMATION.RECORD1.LEVEL2, levelThree: LEVEL_INFORMATION.RECORD1.LEVEL3
    },
    {
        id: 2, type: LEVEL_INFORMATION.RECORD2.TYPE, levelOne: LEVEL_INFORMATION.RECORD2.LEVEL2,
        levelTwo: LEVEL_INFORMATION.RECORD2.LEVEL2, levelThree: LEVEL_INFORMATION.RECORD2.LEVEL2
    },
    {
        id: 3, type: LEVEL_INFORMATION.RECORD3.TYPE, levelOne: LEVEL_INFORMATION.RECORD3.LEVEL1,
        levelTwo: LEVEL_INFORMATION.RECORD3.LEVEL2, levelThree: LEVEL_INFORMATION.RECORD3.LEVEL3
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

export { LevelInformation }