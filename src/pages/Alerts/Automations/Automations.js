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

const MenuComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleEdit = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDelete = (event) => {
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
        </>
    );
};

const columns = [
    {
        field: "Name",
        headerName: "Name",
        width: 300,
        renderCell: (cellValues) => {
            return (
                <Grid container>
                    <Grid item>{cellValues.value}</Grid>
                </Grid>
            );
        },
    },
    {
        field: "description",
        headerName: "Description",
        width: 300,
    },
    {
        field: "type",
        headerName: "Type",
        width: 100,
    },
    {
        field: "event",
        headerName: "Event",
        width: 200,
    },
    {
        field: "lasttrigger",
        headerName: "Last Trigger",
        width: 300,
    },
    {
        field: "Update",
        headerName: "",
        sortable: false,
        width: 56,
        renderCell: (_) => {
            return <MenuComponent />;
        },
    },
];

const rows = [
    {
        RecId: 1,
        Name: "Grassmere",
        description: "Microsoft Team",
        type: "Asset",
        event: "Message Received",
        lasttrigger: "06/29/2022 6:41 PM",
    },
    {
        RecId: 2,
        Name: "Grassmere",
        description: "Microsoft Team",
        type: "Asset",
        event: "Message Received",
        lasttrigger: "06/29/2022 6:41 PM",
    },
];

export default function Automations() {
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
                            label="Automations"
                        />
                    }
                    sx={{ paddingX: 4, paddingY: 2 }}
                    content={
                        <>
                            <Box
                                sx={{ width: "82vw", height: "44vh", paddingBottom: "1rem" }}
                            >
                                <Datagrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                            <Box sx={{ width: "82vw", paddingBottom: "2rem" }}>
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
                                title={"What type of Automation would you like to create?"}
                                content={
                                    <>
                                        <Box width={600}>
                                            <Grid container spacing={2}>
                                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                    <CardHeader
                                                        title={
                                                            <Typography
                                                                sx={{
                                                                    color: "white",
                                                                    fontWeight: "900",
                                                                }}
                                                                variant="h6"
                                                            >
                                                                Asset
                                                            </Typography>
                                                        }
                                                        subheader={
                                                            <Typography sx={{ color: "white" }} variant="body2">
                                                                Create Automation that allow you to report to events that apply to asset
                                                            </Typography>
                                                        }
                                                        action={
                                                            <Button variant="contained" onClick={() => {
                                                                setOpenDialog(false);
                                                                // setOpenDialogForm(true);
                                                            }}>Select</Button>
                                                        }
                                                    />
                                                    <CardHeader
                                                        title={
                                                            <Typography
                                                                sx={{
                                                                    color: "white",
                                                                    fontWeight: "900",
                                                                }}
                                                                variant="h6"
                                                            >
                                                                Dates
                                                            </Typography>
                                                        }
                                                        subheader={
                                                            <Typography sx={{ color: "white" }} variant="body2">
                                                                Create recurring automation based on scheduled dates
                                                            </Typography>
                                                        }
                                                        action={
                                                            <Button variant="contained" onClick={() => {
                                                                setOpenDialog(false);
                                                                // setOpenDialogForm(true);
                                                            }}>Select</Button>
                                                        }
                                                    />
                                                </Grid>
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
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        flexDirection="row-reverse"
                                                        spacing={2}
                                                    >
                                                        <Grid item>
                                                            <Button
                                                                variant="contained"
                                                                onClick={() => setOpenDialogForm(false)}
                                                            >
                                                                Save
                                                            </Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button
                                                                variant="contained"
                                                                color="error"
                                                                onClick={() => setOpenDialogForm(false)}
                                                            >
                                                                Cancel
                                                            </Button>
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
