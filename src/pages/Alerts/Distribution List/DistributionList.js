import React from "react";

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import Datagrid from '../../../components/datagrid/Datagrid';
import DistributionForm from "./DistributionForm";
import Dialog from '../../../components/dialog/Dialog';

import { Grid, Box, Button, IconButton } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


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
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
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
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title={"Distribution"}
                content={<>
                    <DistributionForm />
                </>}
            />
        </>
    )
}

const columns = [
    {
        field: 'DistributionName', headerName: 'Distribution Name', width: 180,
        renderCell: (cellValues) => {
            return (<Grid container>
                <Grid item>
                    {cellValues.value}
                </Grid>
            </Grid>)
        }
    },
    {
        field: 'email', headerName: 'Email', width: 440, renderCell: (cellValues) => {
            return (
                <Box>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {cellValues.value.split(",").map((item) => (
                            <Chip label={item} variant="outlined" sx={{ color: 'white' }} />
                        ))}
                    </Stack>
                </Box>
            )
        }
    },
    {
        field: 'call', headerName: 'Call', width: 440, renderCell: (cellValues) => {
            return (<Grid container>
                <Grid item>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {cellValues.value.split(",").map((item) => (
                            <Chip label={item} variant="outlined" sx={{ color: 'white' }} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>)
        }
    },
    {
        field: 'Update', headerName: null, sortable: false, width: 100,
        renderHeader: (_) => {
            return <>
                <Box>
                    &nbsp;
                </Box>
            </>
        },
        renderCell: (_) => {
            return (<MenuComponent />)
        }
    }
];

const rows = [
    { RecId: 1, DistributionName: "Grassmere House", email: 'abc@gmail.com,abc1@gmail.com', call: '1234567890,1234567891' },
    { RecId: 2, DistributionName: "Secound House", email: 'abc@gmail.com,abc1@gmail.com', call: '1234567890,1234567891' },
    { RecId: 3, DistributionName: "Third House", email: 'abc@gmail.com,abc1@gmail.com', call: '1234567890,1234567891' },
    { RecId: 4, DistributionName: "Forth House", email: 'abc@gmail.com,abc1@gmail.com', call: '1234567890,1234567891' },
];


export default function DistributionList() {
    const [openDialog, setOpenDialog] = React.useState(false);
    return (
        <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card
                    headerContent={<Label sx={{ marginBottom: 2 }} style={{ fontWeight: 'bold', fontSize: 32, color: "white" }} label="Distribution List" />}
                    sx={{ paddingX: 4, paddingY: 2 }}
                    content={
                        <>
                            <Box
                                sx={{ width: "78vw", height: "44vh", paddingBottom: "1rem" }}>
                                <Datagrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                            <Box sx={{ width: "78vw", paddingBottom: "2rem" }}>
                                <Grid container flexDirection='row-reverse'>
                                    <Grid item>
                                        <Button variant="contained" size="medium" onClick={() => setOpenDialog(true)}>{"ADD"}</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Dialog
                                open={openDialog}
                                handleClose={() => setOpenDialog(false)}
                                title={"Alerts Installed"}
                                content={<DistributionForm />}
                            />
                        </>
                    }
                />
            </Grid>
        </Grid>
    )
};
