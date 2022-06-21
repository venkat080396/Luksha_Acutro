import React from 'react'
import { Grid, Box, Button } from '@mui/material'
import Datagrid from '../../../components/datagrid/Datagrid';
import { getColorBasedOnStatus } from '../../../common/Utils';
import LinearProgress from '../../../components/feedback/progress/linearProgress/LinearProgress';

const columns = [
    {
        field: 'building', headerName: 'Building', width: 150,
        renderCell: (cellValues) => {
            return (<Grid container>
                <Grid item>
                    {cellValues.value}
                </Grid>
            </Grid>)
        }
    },
    { field: 'floor', headerName: 'Floor', width: 130 },
    { field: 'deviceType', headerName: 'Device Type', width: 110 },
    { field: 'device', headerName: 'Device', width: 120 },
    { field: 'sensor', headerName: 'Sensor', width: 130 },
    { field: 'createdDate', headerName: 'Date Created', sortable: false, width: 130 },
    { field: 'alertDate', headerName: 'Alert last triggered', sortable: false, width: 150 },
    {
        field: 'currentStatus', headerName: 'Current Status', sortable: false, width: 130,
        renderCell: (cellValues) => {
            const value = cellValues.value;
            const bgcolor = getColorBasedOnStatus(value);
            return (<>
                <Button sx={{ fontSize: 11, backgroundColor: `${bgcolor}`, '&:hover': { backgroundColor: `${bgcolor}` } }} variant="contained" size="small">{value}</Button>
            </>)
        }
    },
    {
        field: 'triggersHistory', headerName: 'Triggers history (Last 6 months)', sortable: false, width: 234,
        renderCell: (cellValues) => {
            const value = cellValues.row.currentStatus === "Resolved" ? 100 : 50;
            return (<Box sx={{ width: "15em" }}>
                <LinearProgress value={value} />
            </Box>)
        }
    }
];

const rows = [
    { RecId: 1, building: "Grassmere House", floor: 'Floor 1', deviceType: 'AC Units', device: 'device 1', sensor: 'Sensor 1', createdDate: "8 March 2022", alertDate: "14 May 2022", currentStatus: 'Non-Resolved' },
    { RecId: 2, building: "Grassmere House", floor: 'Floor 2', deviceType: 'AC Units', device: 'device 2', sensor: 'Sensor 2', createdDate: "1 Jan 2022", alertDate: "19 Feb 2022", currentStatus: 'Non-Resolved' },
    { RecId: 3, building: "Grassmere House", floor: 'Floor 3', deviceType: 'AC Units', device: 'device 3', sensor: 'Sensor 3', createdDate: "17 Jan 2022", alertDate: "1 March 2022", currentStatus: 'Open' },
    { RecId: 4, building: "Haveswater House", floor: 'Floor 5', deviceType: 'FCU', device: 'device 4', sensor: 'Sensor 4', createdDate: "8 March 2022", alertDate: "17 April 2022", currentStatus: 'Escalate' },
    { RecId: 5, building: "Haveswater House", floor: 'Floor 6', deviceType: 'FCU', device: 'device 5', sensor: 'Sensor 5', createdDate: "8 March 2022", alertDate: "1 May 2022", currentStatus: 'Resolved' },
    { RecId: 6, building: "Haveswater House", floor: 'Floor 7', deviceType: 'FCU', device: 'device 6', sensor: 'Sensor 6', createdDate: "8 March 2022", alertDate: "20 May 2022", currentStatus: 'Escalate' }
];

const InstalledAlerts = () => {
    return (
        <Box
            sx={{ width: "89vw", height: "40vh", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "2rem" }}>
            <Datagrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </Box>
    )
}

export default InstalledAlerts
