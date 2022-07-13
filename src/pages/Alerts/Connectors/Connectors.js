import React from "react";

import {
    Grid,
} from "@mui/material";

import ConnectorsListComponents from "./ConnectorsList";
import ConnectorsFormComponents from "./ConnectorsForm";
import ConnectorsDataTableComponents from "./ConnectorsDataTable";

export default function Connectors() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openDialogForm, setOpenDialogForm] = React.useState(false);
    return (
        <Grid container direction="column">
            <ConnectorsDataTableComponents setOpenDialog={setOpenDialog} />
            <ConnectorsListComponents openDialog={openDialog} setOpenDialog={setOpenDialog} setOpenDialogForm={setOpenDialogForm} />
            <ConnectorsFormComponents openDialogForm={openDialogForm} setOpenDialogForm={setOpenDialogForm} />
        </Grid>
    );
}
