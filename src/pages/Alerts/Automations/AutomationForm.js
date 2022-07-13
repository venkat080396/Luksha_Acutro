import React from "react";

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import Dialog from "../../../components/dialog/Dialog";
import TextField from "../../../components/forms/TextField/TextField";

import {
    Grid,
    Box,
    Button,
    CardHeader,
    Typography,
} from "@mui/material";
import Select from "../../../components/forms/Select/Select";

export default function AutomationsFormComponents(props) {
    return (
        <Dialog
            open={props.openDialogForm}
            handleClose={() => props.setOpenDialogForm(false)}
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
                                                                Name: "Metric Threshold",
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
                                                    <TextField name="Asset Type *" size="small" fullWidth />
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
                                                            { RecId: 1, Name: "Greater Than" },
                                                            { RecId: 2, Name: "Less Than" },
                                                            { RecId: 3, Name: "Less or Equal" },
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
                                        <Button variant='contained' onClick={() => props.setOpenDialogForm(false)}>Create Automation</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="error" onClick={() => props.setOpenDialogForm(false)}>Cancel</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            }
        />
    );
}
