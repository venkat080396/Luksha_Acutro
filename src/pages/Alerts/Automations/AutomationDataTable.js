import React from "react";

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import Datagrid from "../../../components/datagrid/Datagrid";

import {
    Grid,
    Box,
    Button,
} from "@mui/material";

import MenuComponent from "./MenuComponent";

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
        width: 290,
        renderCell: (item) => {
            return <>{item.value}</>;
        },
    },
    {
        field: "",
        headerName: "Last Trigger",
        renderHeader: (_) => {
            return <>
                <Box>
                    &nbsp;
                </Box>
            </>
        },
        width: 56,
        renderCell: (_) => {
            return <MenuComponent />;
        },
        sortable: false,
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

export default function AutomationsDataTable(props) {
    return (
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
                            sx={{ width: "78vw", height: "44vh", paddingBottom: "1rem" }}
                        >
                            <Datagrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />
                        </Box>
                        <Box sx={{ width: "78vw", paddingBottom: "2rem" }}>
                            <Grid container flexDirection="row-reverse">
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        size="medium"
                                        onClick={() => props.setOpenDialog(true)}
                                    >
                                        {"New Automation"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                }
            />
        </Grid>
    );
}
