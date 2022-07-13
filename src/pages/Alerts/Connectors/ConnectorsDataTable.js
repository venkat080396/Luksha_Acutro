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
        renderHeader: (_) => {
            return <>
                <Box>
                    &nbsp;
                </Box>
            </>
        },
        sortable: false,
        width: 116,
        renderCell: (_) => {
            return <MenuComponent />;
        },
    },
];

const rows = [
    { RecId: 1, Name: "Grassmere", type: "Microsoft Team" },
    { RecId: 2, Name: "Secound", type: "SMS List" },
];

export default function ConnectorsDataTableComponents(props) {
    return (
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
                                sx={{ width: "68vw", height: "44vh", paddingBottom: "1rem" }}
                            >
                                <Datagrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                            <Box sx={{ width: "68vw", paddingBottom: "2rem" }}>
                                <Grid container flexDirection="row-reverse">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            onClick={() => props.setOpenDialog(true)}
                                        >
                                            {"New Connectors"}
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
