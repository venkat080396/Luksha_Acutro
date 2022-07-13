import React from "react";

import {
    Grid,
} from "@mui/material";
import AutomationsList from "./AutomationList";
import AutomationsFormComponents from "./AutomationForm";
import AutomationsDataTable from "./AutomationDataTable";


export default function Automations() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openDialogForm, setOpenDialogForm] = React.useState(false);
    return (
        <Grid container direction="column">
            <AutomationsDataTable setOpenDialog={setOpenDialog} />
            <AutomationsList openDialog={openDialog} setOpenDialog={setOpenDialog} setOpenDialogForm={setOpenDialogForm} />
            <AutomationsFormComponents openDialogForm={openDialogForm} setOpenDialogForm={setOpenDialogForm} />
        </Grid>
    );
}
