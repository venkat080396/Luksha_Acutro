import React from 'react'
import { Grid, Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { Datagrid } from '../../../components/DataDisplay/Datagrid';
import { getColorBasedOnStatus } from '../../../common/utils';
import { LinearProgress } from '../../../components/Feedback/Progress/LinearProgress';
import { Dialog } from '../../../components/Feedback/Dialog';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { INSTALLATION_ALERTS, ALERT_RULES } from '../constants';

const MenuComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpenDialog(false)
        setAnchorEl(null);
    };
    const handleEdit = (event) => {
        setOpenDialog(true);
        setAnchorEl(event.currentTarget);
    }
    const handleDelete = (event) => {
        setOpenDialog(true);
        setAnchorEl(event.currentTarget);
    }

    return (
        <>
            <Box>
                <IconButton onClick={handleClick}>
                    <MoreVertIcon style={{ color: '#fff' }} />
                </IconButton>
            </Box>
            <Menu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-button'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleEdit}>{ALERT_RULES.EDIT}</MenuItem>
                <MenuItem onClick={handleDelete}>{ALERT_RULES.DELETE}</MenuItem>
            </Menu>
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title={INSTALLATION_ALERTS.ALERTS_INSTALLED}
                content={<></>}
            />
        </>
    )
}

const columns = [
    {
        field: 'building', headerName: INSTALLATION_ALERTS.FIELDS.BUILDING, width: 150,
        renderCell: (cellValues) => {
            return (<Grid container>
                <Grid item>
                    {cellValues.value}
                </Grid>
            </Grid>)
        }
    },
    { field: 'floor', headerName: INSTALLATION_ALERTS.FIELDS.FLOOR, width: 130 },
    { field: 'deviceType', headerName: INSTALLATION_ALERTS.FIELDS.DEVICE_TYPE, width: 128 },
    { field: 'device', headerName: INSTALLATION_ALERTS.FIELDS.DEVICE, width: 108 },
    { field: 'sensor', headerName: INSTALLATION_ALERTS.FIELDS.SENSOR, width: 128 },
    { field: 'createdDate', headerName: INSTALLATION_ALERTS.FIELDS.DATE_CREATED, sortable: false, width: 120 },
    { field: 'alertDate', headerName: INSTALLATION_ALERTS.FIELDS.ALERT_LAST_TRIGGERED, sortable: false, width: 184 },
    {
        field: 'currentStatus', headerName: INSTALLATION_ALERTS.FIELDS.CURRENT_STATUS, sortable: false, width: 148,
        renderCell: (cellValues) => {
            const value = cellValues.value;
            const bgcolor = getColorBasedOnStatus(value);
            return (<>
                <Button sx={{ fontSize: 11, backgroundColor: `${bgcolor}`, '&:hover': { backgroundColor: `${bgcolor}` } }} variant='contained' size='small'>{value}</Button>
            </>)
        }
    },
    {
        field: 'triggersHistory', headerName: INSTALLATION_ALERTS.FIELDS.TRIGGERS_HISTORY, sortable: false, width: 300,
        renderCell: (cellValues) => {
            const value = cellValues.row.currentStatus === 'Resolved' ? 100 : 50;
            return (<Box sx={{ width: '15em' }}>
                <LinearProgress value={value} />
            </Box>)
        }
    },
    {
        field: 'Update', headerName: '____', sortable: false, width: 10,
        renderCell: (_) => {
            return (<MenuComponent />)
        }
    }
];

const rows = [
    { RecId: 1, building: 'Bunwell House', floor: 'Floor 1', deviceType: 'AC Units', device: 'Air Handling Unit 1', sensor: 'Sensor 1', createdDate: '8 March 2022', alertDate: '14 May 2022', currentStatus: 'Non-Resolved' },
    { RecId: 2, building: 'Bunwell House', floor: 'Floor 2', deviceType: 'AC Units', device: 'Swimming Pool Heating', sensor: 'Sensor 2', createdDate: '1 Jan 2022', alertDate: '19 Feb 2022', currentStatus: 'Non-Resolved' },
    { RecId: 3, building: 'Bunwell House', floor: 'Floor 3', deviceType: 'AC Units', device: 'Hot Water System 1', sensor: 'Sensor 3', createdDate: '17 Jan 2022', alertDate: '1 March 2022', currentStatus: 'Open' },
    { RecId: 4, building: 'Elizabeth House', floor: 'Floor 5', deviceType: 'FCU', device: 'Swimming Pool Filtration', sensor: 'Sensor 4', createdDate: '8 March 2022', alertDate: '17 April 2022', currentStatus: 'Escalate' },
    { RecId: 5, building: 'Elizabeth House', floor: 'Floor 6', deviceType: 'FCU', device: 'Swimming Pool Filtration', sensor: 'Sensor 5', createdDate: '8 March 2022', alertDate: '1 May 2022', currentStatus: 'Resolved' }
];

const InstalledAlerts = () => {
    const [openDialog, setOpenDialog] = React.useState(false);
    return (
        <>
            <Box
                sx={{ width: '90vw', height: '44vh', paddingLeft: '2rem', paddingRight: '2rem', paddingBottom: '1rem' }}>
                <Datagrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </Box>
            {/* <Box sx={{ width: '90vw', paddingLeft: '2rem', paddingRight: '2rem', paddingBottom: '2rem' }}>
                <Grid container flexDirection='row-reverse'>
                    <Grid item>
                        <Button variant='contained' size='medium' onClick={() => setOpenDialog(true)}>{'ADD'}</Button>
                    </Grid>
                </Grid>
            </Box> */}
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title={INSTALLATION_ALERTS.ALERTS_INSTALLED}
                content={<></>}
            />
        </>
    )
}

export { InstalledAlerts };