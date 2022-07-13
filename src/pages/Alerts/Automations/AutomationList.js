import React from "react";

import Dialog from "../../../components/dialog/Dialog";

import {
    Grid,
    Box,
    Button,
    CardHeader,
    Typography,
} from "@mui/material";

export default function AutomationsList(props) {
    return (
        <Dialog
            open={props.openDialog}
            handleClose={() => props.setOpenDialog(false)}
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
                                        <Box pt={2}>
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    props.setOpenDialog(false);
                                                    props.setOpenDialogForm(true);
                                                }}
                                            >
                                                Select
                                            </Button>
                                        </Box>
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
                                        < Box pt={2}>
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    props.setOpenDialog(false);
                                                    props.setOpenDialogForm(true);
                                                }}
                                            >
                                                Select
                                            </Button>
                                        </Box>
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </>
            }
        />

    );
}
