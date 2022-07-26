import React, { useEffect, useState } from "react";

import Label from "../../../components/forms/Label/Label";
import Card from "../../../components/layout/Card/Card";
import Datagrid from "../../../components/datagrid/Datagrid";
import Dialog from "../../../components/dialog/Dialog";
import TextField from "../../../components/forms/TextField/TextField";
import SelectBox from "../../../components/forms/SelectBox/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from 'notistack';
import {
    fetchAsyncAllDeviceTypes, getAllDeviceTypes, fetchAsyncDevicesWithStatus,
    getAllDevicesWithStatus, fetchAsyncDeviceSensorsForDeviceId, getDeviceSensors,
    getSelectedAssetType, getSelectedDevice, getSelectedSensor, setSelectedAssetType, setSelectedDevice, setSelectedSensor
} from "../../../features/BuildingData/buildingDataSlice";
import { saveAutomation, fetchAutomations, getAutomations } from "../../../features/Alerts/AlertsSlice";
import { getSelectedBuilding, getSelectedFloor } from '../../../features/Home/homeSlice';
import {
    Grid,
    Box,
    Button,
    IconButton,
    CardHeader,
    Typography,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Select from "../../../components/forms/Select/Select";
import SelectConnectors from "./Select Connectors/SelectConnectors";
import { convertObjectToCSV } from "../../../common/Utils";
import Menu from '../../../components/layout/Menu/Menu';


export default function Automations() {
    const [openDialogForm, setOpenDialogForm] = React.useState(false);
    const [openConnector, setOpenConnector] = useState(false);
    const [selctedConnectorRecIds, setselctedConnectorRecIds] = useState([]);
    const [selectedConnectors, setselectedConnectors] = useState([]);
    const [automationName, setAutomationName] = useState(null);
    const [description, setDescription] = useState(null);
    const [selectedOperator, setSelectedOperator] = useState(null);
    const [thresholdValue, setThresholdValue] = useState(0);
    const [message, setMessage] = useState(null);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
    const deviceTypes = useSelector(getAllDeviceTypes);
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const devices = useSelector(getAllDevicesWithStatus);
    const sensors = useSelector(getDeviceSensors);
    const selectedAssetType = useSelector(getSelectedAssetType);
    const selectedDevice = useSelector(getSelectedDevice);
    const selectedSensor = useSelector(getSelectedSensor);
    const automations = useSelector(getAutomations);
    const [item, setItem] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        dispatch(fetchAutomations())
        dispatch(fetchAsyncAllDeviceTypes(null))
    }, [dispatch])

    useEffect(() => {
        setselctedConnectorRecIds(item?.AlertConnectorRecIds)
        setAutomationName(item?.Name)
        setDescription(item?.Description)
        setSelectedOperator(operators?.find(operator => operator.Value === item?.ConditionOperator))
        setThresholdValue(item?.ThresholdValue)
        setMessage(item?.AlertMessage)
        setChecked(item?.AlertMessage !== "" || item?.AlertMessage !== null)
        dispatch(setSelectedDevice(devices?.find(device => device.RecId === item?.AssetOrDeviceRecId)))
        dispatch(setSelectedSensor(sensors?.find(sensor => sensor.RecId === item?.MetricOrDeviceSensorRecId)))
    }, [item])

    const handleMenuClick = (type, item) => {
        if (type === "Edit") {
            setItem(item);
            setOpenDialogForm(true);
        }
        else {
            const automation = {
                automationRecId: String(item?.RecId), automationName: item?.Name, description: item?.Description,
                assetOrDeviceId: String(item?.AssetOrDeviceRecId), metricOrDeviceSensorRecId: String(item?.MetricOrDeviceSensorRecId),
                conditionOperator: item?.ConditionOperator, thresholdValue: item.ThresholdValue,
                connectorRecId: String(1), connectorRecIds: item?.AlertConnectorRecIds,
                alertMessage: " ", actionMessage: " ", isDelete: "1"
            };

            dispatch(saveAutomation(automation));
            dispatch(fetchAutomations());
            enqueueSnackbar("Automation has been deleted successfully", { variant: 'success' })
        }
    }

    const operators = [
        { RecId: 1, Value: ">", Name: "Greater Than" },
        { RecId: 2, Value: ">=", Name: "Greater Than or Equal to" },
        { RecId: 3, Value: "<", Name: "Less Than" },
        { RecId: 4, Value: "<=", Name: "Less than or Equal to" },
        { RecId: 5, Value: "=", Name: "Equal to" }
    ]

    const menuItems = [
        { recId: 1, name: "Edit" },
        { recId: 2, name: "Delete" }
    ]

    const columns = [
        {
            field: "Name",
            headerName: "Name",
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
            headerName: "Description",
            width: 530,
        },
        {
            field: "type",
            headerName: "Type",
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
            headerName: "Last Triggered",
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

    const handleSelectChange = (rows) => {
        setselectedConnectors(rows)
        setselctedConnectorRecIds(rows.map(row => row.RecId))
    }

    const handleCreate = () => {
        const rowscsv = convertObjectToCSV(selctedConnectorRecIds);
        const automation = {
            automationRecId: item?.RecId, automationName: automationName, description: description,
            assetOrDeviceId: selectedDevice?.RecId, metricOrDeviceSensorRecId: selectedSensor?.RecId,
            conditionOperator: selectedOperator?.Value, thresholdValue: thresholdValue,
            connectorRecId: selctedConnectorRecIds[0], connectorRecIds: rowscsv, alertMessage: checked ? message : ""
        };

        dispatch(saveAutomation(automation));
        dispatch(fetchAutomations());
        setOpenDialogForm(false);
        enqueueSnackbar(item ? "Automation has been updated successfully"
            : "Automation has been created successfully", { variant: 'success' })
    }

    const onDeviceChange = (device) => {
        dispatch(setSelectedDevice(device))
        dispatch(setSelectedSensor(null))
        dispatch(fetchAsyncDeviceSensorsForDeviceId(device?.RecId));
    }

    const onSensorChange = (sensor) => {
        dispatch(setSelectedSensor(sensor))
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    const onAssetTypeChange = (assetType) => {
        dispatch(setSelectedAssetType(assetType))
        dispatch(setSelectedDevice(null))
        dispatch(setSelectedSensor(null))
        const requestDetails = { siteRecId: 1, buildingRecId: selectedBuilding?.RecId, floorRecId: selectedFloor?.RecId, deviceTypeRecId: assetType?.RecId }
        dispatch(fetchAsyncDevicesWithStatus(requestDetails))
    }

    const clearItems = () => {
        setselctedConnectorRecIds([])
        setAutomationName(null)
        setDescription(null)
        setSelectedOperator(null)
        setThresholdValue(null)
        setMessage(null)
        setChecked(false)
        setselectedConnectors(null)
        dispatch(setSelectedAssetType(null))
        dispatch(setSelectedDevice(null))
        dispatch(setSelectedSensor(null))
    }

    const handleNewAutomation = () => {
        setOpenDialogForm(true);
        clearItems();
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
                                    Automations
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" onClick={handleNewAutomation}>
                                    <Typography variant="header3">
                                        New Automations
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    }
                    sx={{ paddingX: 4, paddingY: 2 }}
                    content={
                        <>
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
                                                                        <TextField
                                                                            value={automationName}
                                                                            onChange={(e) => setAutomationName(e.target.value)}
                                                                            name="Enter Name" size="small" fullWidth />
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
                                                                        <TextField
                                                                            value={description}
                                                                            onChange={(e) => setDescription(e.target.value)}
                                                                            name="Enter Description" size="small" fullWidth />
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
                                                                    <Grid item sx={{ marginLeft: -5 }} sm={12} md={12} lg={12} xl={12}>
                                                                        <SelectBox
                                                                            value={selectedAssetType}
                                                                            onSelectChange={onAssetTypeChange}
                                                                            label="Asset Type"
                                                                            items={deviceTypes} />
                                                                    </Grid>
                                                                    <Grid item sx={{ marginLeft: -5 }} sm={12} md={12} lg={12} xl={12}>
                                                                        <SelectBox
                                                                            value={selectedDevice}
                                                                            onSelectChange={onDeviceChange}
                                                                            label="Device"
                                                                            items={devices} />
                                                                    </Grid>
                                                                    <Grid item sx={{ marginLeft: -5 }} sm={12} md={12} lg={12} xl={12}>
                                                                        <SelectBox
                                                                            value={selectedSensor}
                                                                            onSelectChange={onSensorChange}
                                                                            label="Sensor"
                                                                            items={sensors} />
                                                                    </Grid>
                                                                    <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Operator</Typography>
                                                                        <Select
                                                                            value={selectedOperator}
                                                                            onSelectChange={(operator) => setSelectedOperator(operator)}
                                                                            placeholder="Select Operator"
                                                                            props={{
                                                                                size: "small",
                                                                                placeholder: "Select Operator",
                                                                            }}
                                                                            items={operators}
                                                                            fullWidth={true}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Value</Typography>
                                                                        <TextField
                                                                            value={thresholdValue}
                                                                            onChange={(e) => setThresholdValue(e.target.value)}
                                                                            name="Value" type="number" size="small" fullWidth />
                                                                    </Grid>
                                                                    {/* <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                                                        <Typography sx={{ marginBottom: 1 }}>Violations Count</Typography>
                                                                        <TextField name="Violations Count *" type="number" size="small" fullWidth />
                                                                    </Grid> */}
                                                                </Grid>
                                                            </Box>
                                                        }
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Card
                                                        headerContent={
                                                            <CardHeader
                                                                title="Configure actions"
                                                                subheader={
                                                                    <Typography sx={{ color: "white" }}>
                                                                        {
                                                                            "Select the actions you want to perform when the trigger is activated"
                                                                        }
                                                                    </Typography>
                                                                }
                                                            />
                                                        }
                                                        sx={{ paddingX: 4, paddingY: 2, margin: 4 }}
                                                        content={
                                                            <Box>
                                                                <Grid container spacing={2}>
                                                                    <Grid item container
                                                                        direction="row"
                                                                        alignItems="center"
                                                                        justifyContent="flex-end"
                                                                        spacing={2}>
                                                                        {selectedConnectors && selectedConnectors.map((connector) => (
                                                                            <>
                                                                                <Grid item container
                                                                                    direction="column">
                                                                                    <Grid item>
                                                                                        {connector.ConnectorType}
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        {connector.Name}
                                                                                    </Grid>
                                                                                </Grid>
                                                                                {/* <Grid item sx={{ marginTop: "-50px" }}>
                                                                                    Delete icon
                                                                                </Grid> */}
                                                                            </>
                                                                        ))}
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <FormGroup>
                                                                            <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Override template" />
                                                                            {checked && (<Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                                                                                <Typography sx={{ marginBottom: 1 }}>Message *</Typography>
                                                                                <TextField name="Message"
                                                                                    value={message}
                                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                                    size="small" fullWidth />
                                                                            </Grid>)}
                                                                        </FormGroup>
                                                                    </Grid>
                                                                    <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
                                                                        <Button variant="contained" onClick={() => setOpenConnector(true)}>
                                                                            <Typography>
                                                                                Add Action
                                                                            </Typography>
                                                                        </Button>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Dialog
                                                                            open={openConnector}
                                                                            content={<SelectConnectors
                                                                                selctedConnectorRecIds={selctedConnectorRecIds}
                                                                                onSelectChange={handleSelectChange}
                                                                                handleClose={() => setOpenConnector(false)} />}
                                                                            handleClose={() => setOpenConnector(false)}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        }
                                                    />
                                                </Grid>
                                                <Grid item sx={{ margin: "0px 40px 40px 40px", }} sm={12} md={12} lg={12} xl={12}>
                                                    <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
                                                        <Grid item>
                                                            <Button variant='contained'
                                                                onClick={handleCreate}>
                                                                <Typography>
                                                                    {item !== null ?
                                                                        "Update Automation" : "Create Automation"
                                                                    }
                                                                </Typography>
                                                            </Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button variant="contained" color="secondary"
                                                                onClick={() => setOpenDialogForm(false)}>
                                                                <Typography>
                                                                    Cancel
                                                                </Typography>
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
