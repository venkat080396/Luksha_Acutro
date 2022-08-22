import React, { useEffect, useState } from "react";
import Card from "../../../components/layout/Card/Card";
import Datagrid from "../../../components/datagrid/Datagrid";
import Dialog from "../../../components/dialog/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from 'notistack';
import { fetchAutomations, getAutomations, saveAutomation } from "../../../features/Alerts/AlertsSlice";
import { Grid, Box, Button, Typography } from "@mui/material";
import Menu from '../../../components/layout/Menu/Menu';
import Create from "./Create/Create";
import { ALERT_RULES } from "../constants";

const Container = () => {
    const [openDialogForm, setOpenDialogForm] = React.useState(false);
    const dispatch = useDispatch();
    const automations = useSelector(getAutomations);
    const [selectedAutomation, setSelectedAutomation] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        dispatch(fetchAutomations())
    }, [dispatch])

    const handleMenuClick = (type, selectedAutomation) => {

        switch (type) {
            case ALERT_RULES.EDIT:
                setSelectedAutomation(selectedAutomation);
                setOpenDialogForm(true);
                break;

            case ALERT_RULES.DELETE:
                const automation = {
                    automationRecId: String(selectedAutomation?.RecId), automationName: selectedAutomation?.Name, description: selectedAutomation?.Description,
                    assetOrDeviceId: String(selectedAutomation?.AssetOrDeviceRecId), metricOrDeviceSensorRecId: String(selectedAutomation?.MetricOrDeviceSensorRecId),
                    conditionOperator: selectedAutomation?.ConditionOperator, thresholdValue: selectedAutomation.ThresholdValue,
                    connectorRecId: String(1), connectorRecIds: selectedAutomation?.AlertConnectorRecIds,
                    alertMessage: " ", actionMessage: " ", isDelete: "1"
                };

                dispatch(saveAutomation(automation));
                refreshAutomations();
                enqueueSnackbar(ALERT_RULES.DELETE_SUCCESS_MESSAGE, { variant: 'success' })
                break;

            default:
                break;
        }
    }

    const menuItems = [
        { recId: 1, name: ALERT_RULES.EDIT },
        { recId: 2, name: ALERT_RULES.DELETE }
    ]

    const columns = [
        {
            field: "Name",
            headerName: ALERT_RULES.FIELDS.NAME,
            width: 400,
            renderCell: (cellValues) => {
                return (
                    <Grid container>
                        <Grid item>{cellValues.value}</Grid>
                    </Grid>
                );
            },
        },
        {
            field: "Description",
            headerName: ALERT_RULES.FIELDS.DESCRIPTION,
            width: 530,
        },
        {
            field: "type",
            headerName: ALERT_RULES.FIELDS.TYPE,
            width: 200,
            renderCell: (cellValues) => {
                return (
                    <Grid container>
                        <Grid item>Asset</Grid>
                    </Grid>
                );
            },
        },
        {
            field: "LastTriggered",
            headerName: ALERT_RULES.FIELDS.LAST_TRIGGERED,
            width: 450,
            renderCell: (item) => {
                return <>{item.value}</>;
            },
        },
        {
            field: "",
            headerName: "",
            renderHeader: (_) => {
                return <>
                    <Box>
                        &nbsp;
                    </Box>
                </>
            },
            width: 56,
            renderCell: (cellValues) => {
                return <Menu
                    onClick={(type) => handleMenuClick(type, cellValues.row)}
                    items={menuItems} />
            },
            sortable: false,
        },
    ];

    const refreshAutomations = () => {
        dispatch(fetchAutomations());
    }

    const handleNewAutomation = () => {
        setOpenDialogForm(true);
        setSelectedAutomation(null);
    }

    return (
        <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card
                    headerContent={
                        <Grid container
                            alignItems="center"
                            justifyContent="space-between">
                            <Grid item>
                                <Typography variant="header2">
                                    {ALERT_RULES.HEADER}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={handleNewAutomation}>
                                    <Typography variant="header3">
                                        {ALERT_RULES.NEW_ALERT_RULE}
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    }
                    sx={{ paddingX: 4, paddingY: 2 }}
                    content={
                        <>{automations && (
                            <Box
                                sx={{ width: "100%", height: "44vh", paddingBottom: "1rem" }}
                            >
                                <Datagrid
                                    rows={automations}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </Box>
                        )}
                            <Dialog
                                open={openDialogForm}
                                handleClose={() => setOpenDialogForm(false)}
                                title={<Typography variant="header2">
                                    {ALERT_RULES.CUSTOMISE_YOUR_ALERT_RULES}
                                </Typography>}
                                content={
                                    <Create
                                        selectedAutomation={selectedAutomation}
                                        refreshAutomations={refreshAutomations}
                                        handleClose={() => setOpenDialogForm(false)} />
                                }
                            />
                        </>
                    }
                />
            </Grid>
        </Grid>
    );
}

export default Container;