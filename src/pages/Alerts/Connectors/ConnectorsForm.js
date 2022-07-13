import React from "react";

import Dialog from "../../../components/dialog/Dialog";
import TextField from "../../../components/forms/TextField/TextField";

import {
    Grid,
    Box,
    Button
} from "@mui/material";


export default function ConnectorsFormComponents(props) {
    return (
        <Dialog
            open={props.openDialogForm}
            handleClose={() => props.setOpenDialogForm(false)}
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
                                        <Button variant='contained' onClick={() => props.setOpenDialogForm(false)}>Save</Button>
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
