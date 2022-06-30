import React from "react";

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import Datagrid from "../../../components/datagrid/Datagrid";
import Dialog from "../../../components/dialog/Dialog";
import TextField from "../../../components/forms/TextField/TextField";

import {
    Grid,
    Box,
    Button,
    IconButton,
    CardHeader,
    Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const MenuComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpenDialog(false);
        setAnchorEl(null);
    };
    const handleEdit = (event) => {
        setOpenDialog(true);
        setAnchorEl(event.currentTarget);
    };
    const handleDelete = (event) => {
        setOpenDialog(true);
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <Box>
                <IconButton onClick={handleClick}>
                    <MoreVertIcon style={{ color: "#fff" }} />
                </IconButton>
            </Box>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
            <Dialog
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title={"Update Connector"}
                content={
                    <>
                        <Box width={600}>
                            <Grid container spacing={2}>
                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField name="Name" fullWidth />
                                </Grid>
                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField name="Web Address" fullWidth />
                                </Grid>
                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                    <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
                                        <Grid item>
                                            <Button variant='contained' onClick={() => setOpenDialog(false)}>Save</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="error" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                }
            />
        </>
    );
};

const columns = [
    {
        field: "Name",
        headerName: "Name",
        width: 370,
        renderCell: (cellValues) => {
            return (
                <Grid container>
                    <Grid item>{cellValues.value}</Grid>
                </Grid>
            );
        },
    },
    {
        field: "type",
        headerName: "Type",
        width: 600,
    },
    {
        field: "Update",
        headerName: "",
        sortable: false,
        width: 100,
        renderCell: (_) => {
            return <MenuComponent />;
        },
    },
];

const rows = [
    { RecId: 1, Name: "Grassmere", type: "Microsoft Team" },
    { RecId: 2, Name: "Secound", type: "SMS List" },
];

export default function Connectors() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openDialogForm, setOpenDialogForm] = React.useState(false);
    return (
        <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card
                    headerContent={
                        <Label
                            sx={{ marginBottom: 2 }}
                            style={{ fontWeight: "bold", fontSize: 32, color: "white" }}
                            label="Connectors"
                        />
                    }
                    sx={{ paddingX: 4, paddingY: 2 }}
                    content={
                        <>
                            <Box
                                sx={{ width: "70vw", height: "44vh", paddingBottom: "1rem" }}
                            >
                                <Datagrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                            <Box sx={{ width: "70vw", paddingBottom: "2rem" }}>
                                <Grid container flexDirection="row-reverse">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            onClick={() => setOpenDialog(true)}
                                        >
                                            {"New Connectors"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Dialog
                                open={openDialog}
                                handleClose={() => setOpenDialog(false)}
                                title={""}
                                content={
                                    <>
                                        <Box maxWidth={400}>
                                            <Grid container spacing={2}>
                                                {[{ title: 'Azur Event Hub', subtitle: '  Use this Connect to send messages' },
                                                { title: 'Azur Service Bus', subtitle: '  Use this Connect to send messages' },
                                                { title: 'Email List', subtitle: '  Use this Connect to send messages' },
                                                { title: 'Microsoft Team', subtitle: '  Use this Connect to send messages' },
                                                { title: 'Service Now', subtitle: '  Use this Connect to send messages' },
                                                { title: 'SMS List', subtitle: '  Use this Connect to send messages' },
                                                { title: 'Text To Speech', subtitle: '  Use this Connect to send messages' },
                                                { title: 'Webhook', subtitle: '  Use this Connect to send messages' },
                                                ].map((item) => (
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <CardHeader
                                                            title={
                                                                <Typography
                                                                    sx={{
                                                                        color: "white",
                                                                        fontWeight: "900",
                                                                    }}
                                                                    variant="body1"
                                                                >
                                                                    {item.title}
                                                                </Typography>
                                                            }
                                                            subheader={
                                                                <Typography sx={{ color: "white" }} variant="body2">
                                                                    {item.subtitle}
                                                                </Typography>
                                                            }
                                                            action={
                                                                <Button variant="contained" onClick={() => {
                                                                    setOpenDialog(false);
                                                                    setOpenDialogForm(true);
                                                                }}>Select</Button>
                                                            }
                                                        />
                                                    </Grid>
                                                ))}

                                            </Grid>
                                        </Box>
                                    </>
                                }
                            />
                            <Dialog
                                open={openDialogForm}
                                handleClose={() => setOpenDialogForm(false)}
                                title={"Create Connector"}
                                content={
                                    <>
                                        <Box width={600}>
                                            <Grid container spacing={2}>
                                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                    <TextField name="Name" fullWidth />
                                                </Grid>
                                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                    <TextField name="Web Address" fullWidth />
                                                </Grid>
                                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
                                                        <Grid item>
                                                            <Button variant='contained' onClick={() => setOpenDialogForm(false)}>Save</Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button variant="contained" color="error" onClick={() => setOpenDialogForm(false)}>Cancel</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </>
                                }
                            />
                        </>
                    }
                />
            </Grid>
        </Grid>
    );
}
