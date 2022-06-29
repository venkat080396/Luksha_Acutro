import React from 'react'
import { Box, Grid } from '@mui/material'
import Table from "../../../components/table/Table"
import HVACChart from '../../Reports/HVACEfficiency/HVACChart/HVACChart'

const columns = [
    { field: 'manufacturer', headerName: 'Manufacturer', width: 350 },
    { field: 'modelType', headerName: 'Model Type', width: 350 },
    { field: 'serialNumber', headerName: 'Serial Number', width: 350 }]

const rows = [
    { manufacturer: "Manufacturer 1", modelType: "Test Model Type 1", serialNumber: "12345" }
]

const DeviceInformation = ({ device }) => {
    return (
        <Box>
            <Table
                rows={rows}
                columns={columns}
            />
        </Box>
    )
}

export default DeviceInformation