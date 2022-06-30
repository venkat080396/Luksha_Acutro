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
import Select from "../../../components/forms/Select/Select";

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
        type: "Assert",
        event: "Message Received",
        lasttrigger: "06/29/2022 6:41 PM",
    },
    {
        RecId: 2,
        Name: "Grassmere",
        description: "Microsoft Team",
        type: "Assert",
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
                                            {"New Automation"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Dialog
                                open={openDialog}
                                handleClose={() => setOpenDialog(false)}
                                title={"What Type of Automation would you like to create?"}
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
                                                                Assert
                                                            </Typography>
                                                        }
                                                        subheader={
                                                            <Typography
                                                                sx={{ color: "white" }}
                                                                variant="body2"
                                                            >
                                                                Create Automation that allow you to report to
                                                                events that apply to assert
                                                            </Typography>
                                                        }
                                                        action={
                                                            <Button
                                                                variant="contained"
                                                                onClick={() => {
                                                                    setOpenDialog(false);
                                                                    setOpenDialogForm(true);
                                                                }}
                                                            >
                                                                Select
                                                            </Button>
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
                                                            <Typography
                                                                sx={{ color: "white" }}
                                                                variant="body2"
                                                            >
                                                                Create recurring automation based on scheduled
                                                                dates
                                                            </Typography>
                                                        }
                                                        action={
                                                            <Button
                                                                variant="contained"
                                                                onClick={() => {
                                                                    setOpenDialog(false);
                                                                    // setOpenDialogForm(true);
                                                                }}
                                                            >
                                                                Select
                                                            </Button>
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
                                title={"Customise your Automations"}
                                content={
                                    <>
                                        <Box width={1200}>
                                            <Grid container>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Card
                                                        headerContent={
                                                            <Label
                                                                sx={{ marginBottom: 2 }}
                                                                style={{
                                                                    fontWeight: "bold",
                                                                    fontSize: 16,
                                                                    color: "white",
                                                                }}
                                                                label="Enter a name for your automation"
                                                            />
                                                        }
                                                        sx={{ paddingX: 4, paddingY: 2, margin: 4 }}
                                                        content={
                                                            <Box>
                                                                <Grid container spacing={2}>
                                                                    <Grid
                                                                        item
                                                                        sx={12}
                                                                        sm={12}
                                                                        md={12}
                                                                        lg={12}
                                                                        xl={12}
                                                                    >
                                                                        <Typography sx={{ marginBottom: 1 }}>Name</Typography>
                                                                        <TextField name="Enter Name" size="small" fullWidth />
                                                                    </Grid>
                                                                    <Grid
                                                                        item
                                                                        sx={12}
                                                                        sm={12}
                                                                        md={12}
                                                                        lg={12}
                                                                        xl={12}
                                                                    >
                                                                        <Typography sx={{ marginBottom: 1 }}>Description</Typography>
                                                                        <TextField name="Enter Description" size="small" fullWidth />
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        }
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Card
                                                        headerContent={
                                                            <CardHeader
                                                                title="Event"
                                                                subheader={
                                                                    <Typography sx={{ color: "white" }}>
                                                                        {
                                                                            "select the event that you want to trigger this automation"
                                                                        }
                                                                    </Typography>
                                                                }
                                                            />
                                                        }
                                                        sx={{ paddingX: 4, paddingY: 2, margin: 4 }}
                                                        content={
                                                            <Box>
                                                                <Grid container spacing={2}>
                                                                    <Grid
                                                                        item
                                                                        sx={12}
                                                                        sm={12}
                                                                        md={12}
                                                                        lg={12}
                                                                        xl={12}
                                                                    >
                                                                        <Select
                                                                            placeholder="Select Building"
                                                                            props={{
                                                                                size: "small",
                                                                                placeholder: "Select Building",
                                                                            }}
                                                                            items={[
                                                                                {
                                                                                    RecId: 1,
                                                                                    Name: "Metric Thresold",
                                                                                    sub: "select the event that you want to trigger this automation",
                                                                                },
                                                                            ]}
                                                                            fullWidth={true}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        }
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Card
                                                        headerContent={
                                                            <CardHeader
                                                                title="Configure conditions"
                                                                subheader={
                                                                    <Typography sx={{ color: "white" }}>
                                                                        {
                                                                            "select the conditions that the event must meet for the automation to run"
                                                                        }
                                                                    </Typography>
                                                                }
                                                            />
                                                        }
                                                        sx={{ paddingX: 4, paddingY: 2, margin: 4 }}
                                                        content={
                                                            <Box>
                                                                <Grid container spacing={2}>
                                                                    <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Assert Type</Typography>
                                                                        <TextField name="Assert Type *" size="small" fullWidth />
                                                                    </Grid>
                                                                    <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Operator</Typography>
                                                                        <Select
                                                                            placeholder="Select Building"
                                                                            props={{
                                                                                size: "small",
                                                                                placeholder: "Select Building",
                                                                            }}
                                                                            items={[
                                                                                { RecId: 1, Name: "Greter Then" },
                                                                                { RecId: 2, Name: "Less Then" },
                                                                                { RecId: 3, Name: "Less or Equale" },
                                                                            ]}
                                                                            fullWidth={true}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Value</Typography>
                                                                        <TextField name="Value" type="number" size="small" fullWidth />
                                                                    </Grid>
                                                                    <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Violations Count</Typography>
                                                                        <TextField name="Violations Count *" type="number" size="small" fullWidth />
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        }
                                                    />
                                                </Grid>
                                                <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
                                                        <Grid item>
                                                            <Button variant='contained' onClick={() => setOpenDialogForm(false)}>Create Automation</Button>
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
