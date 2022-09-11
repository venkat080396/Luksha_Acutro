import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
    fetchAsyncAllDeviceTypes, getAllDeviceTypes, fetchAsyncDevicesWithStatus,
    getAllDevicesWithStatus, fetchAsyncDeviceSensorsForDeviceId, getDeviceSensors,
    getSelectedAssetType, getSelectedDevice, getSelectedSensor, setSelectedAssetType, setSelectedDevice, setSelectedSensor
} from '../../../BuildingData/slice';
import { saveAutomation, fetchConnectors, getConnectors } from '../../slice';
import { getSelectedBuilding, getSelectedFloor } from '../../../Home/slice';
import { Details } from './Details';
import { ConfigureConditions } from './ConfigureConditions';
import { ConfigureActions } from './ConfigureActions';
import { objectToCSV, CSVToArray } from '../../../../common/utils';
import { ALERT_RULES } from '../../constants';

const Create = (props) => {
    const { handleClose, selectedAutomation, refreshAutomations } = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const deviceTypes = useSelector(getAllDeviceTypes);
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const devices = useSelector(getAllDevicesWithStatus);
    const sensors = useSelector(getDeviceSensors);
    const selectedAssetType = useSelector(getSelectedAssetType);
    const selectedDevice = useSelector(getSelectedDevice);
    const selectedSensor = useSelector(getSelectedSensor);
    const connectors = useSelector(getConnectors);
    const [selectedConnectors, setselectedConnectors] = useState([]);
    const [automationName, setAutomationName] = useState(null);
    const [description, setDescription] = useState(null);
    const [selectedOperator, setSelectedOperator] = useState(null);
    const [thresholdValue, setThresholdValue] = useState(0);
    const [message, setMessage] = useState(null);
    const [checked, setChecked] = useState(false);
    const [selectedConnectorRecIds, setSelectedConnectorRecIds] = useState([]);

    useEffect(() => {
        dispatch(fetchConnectors())
        dispatch(fetchAsyncAllDeviceTypes(null))
    }, [dispatch])

    useEffect(() => {
        clearItems();
        if (selectedAutomation !== null) {
            setSelectedConnectorRecIds(selectedAutomation?.AlertConnectorRecIds)
            const connectorRecIds = CSVToArray(selectedAutomation?.AlertConnectorRecIds)
            setselectedConnectors(connectors?.filter(connector => connectorRecIds?.includes(String(connector.RecId))))
            setAutomationName(selectedAutomation?.Name)
            setDescription(selectedAutomation?.Description)
            setSelectedOperator(operators?.find(operator => operator.Value === selectedAutomation?.ConditionOperator))
            setThresholdValue(selectedAutomation?.ThresholdValue)
            setMessage(selectedAutomation?.AlertMessage)
            setChecked(selectedAutomation?.AlertMessage !== '' || selectedAutomation?.AlertMessage !== null)
            dispatch(setSelectedDevice(devices?.find(device => device.RecId === selectedAutomation?.AssetOrDeviceRecId)))
            dispatch(setSelectedSensor(sensors?.find(sensor => sensor.RecId === selectedAutomation?.MetricOrDeviceSensorRecId)))
        }
    }, [selectedAutomation])

    const clearItems = () => {
        setSelectedConnectorRecIds([])
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

    const handleSelectChange = (rows) => {
        setselectedConnectors(rows)
        setSelectedConnectorRecIds(rows.map(row => { return row.RecId }))
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

    const operators = [
        { RecId: 1, Value: ALERT_RULES.OPERATORS.GREATER_THAN_VALUE, Name: ALERT_RULES.OPERATORS.GREATER_THAN },
        { RecId: 2, Value: ALERT_RULES.OPERATORS.GREATER_THAN_OR_EQUAL_TO_VALUE, Name: ALERT_RULES.OPERATORS.GREATER_THAN_OR_EQUAL_TO },
        { RecId: 3, Value: ALERT_RULES.OPERATORS.LESS_THAN_VALUE, Name: ALERT_RULES.OPERATORS.LESS_THAN },
        { RecId: 4, Value: ALERT_RULES.OPERATORS.LESS_THAN_EQUAL_TO_VALUE, Name: ALERT_RULES.OPERATORS.LESS_THAN_EQUAL_TO },
        { RecId: 5, Value: ALERT_RULES.OPERATORS.EQUAL_TO_VALUE, Name: ALERT_RULES.OPERATORS.EQUAL_TO }
    ]

    const onAssetTypeChange = (assetType) => {
        dispatch(setSelectedAssetType(assetType))
        dispatch(setSelectedDevice(null))
        dispatch(setSelectedSensor(null))
        const requestDetails = { siteRecId: 1, buildingRecId: selectedBuilding?.RecId, floorRecId: selectedFloor?.RecId, deviceTypeRecId: assetType?.RecId }
        dispatch(fetchAsyncDevicesWithStatus(requestDetails))
    }

    const handleCreate = () => {
        const rowscsv = objectToCSV(selectedConnectorRecIds);
        const automation = {
            automationRecId: selectedAutomation?.RecId, automationName: automationName, description: description,
            assetOrDeviceId: selectedDevice?.RecId, metricOrDeviceSensorRecId: selectedSensor?.RecId,
            conditionOperator: selectedOperator?.Value, thresholdValue: thresholdValue,
            connectorRecId: selectedConnectorRecIds[0], connectorRecIds: rowscsv, alertMessage: checked ? message : ''
        };

        dispatch(saveAutomation(automation));
        handleClose();
        refreshAutomations();
        enqueueSnackbar(selectedAutomation ? ALERT_RULES.UPDATE_SUCCESS_MESSAGE
            : ALERT_RULES.CREATE_SUCCESS_MESSAGE, { variant: 'success' })
    }

    return (
        <>
            <Box width={1200}>
                <Grid container>
                    <Details
                        automationName={automationName}
                        description={description}
                        onAutomationNameChange={(e) => setAutomationName(e.target.value)}
                        onDescriptionChange={(e) => setDescription(e.target.value)}
                    />
                    <ConfigureConditions
                        selectedAssetType={selectedAssetType}
                        onAssetTypeChange={onAssetTypeChange}
                        deviceTypes={deviceTypes}
                        selectedDevice={selectedDevice}
                        onDeviceChange={onDeviceChange}
                        devices={devices}
                        selectedSensor={selectedSensor}
                        onSensorChange={onSensorChange}
                        sensors={sensors}
                        selectedOperator={selectedOperator}
                        onOperatorChange={(operator) => setSelectedOperator(operator)}
                        operators={operators}
                        thresholdValue={thresholdValue}
                        onThresholdValueChange={(e) => setThresholdValue(e.target.value)}
                    />
                    <ConfigureActions
                        selectedConnectors={selectedConnectors}
                        selectedConnectorRecIds={selectedConnectorRecIds}
                        handleSelectChange={handleSelectChange}
                        checked={checked}
                        handleChange={handleChange}
                        message={message}
                        handleMessageChange={(e) => setMessage(e.target.value)}
                    />
                    <Grid item sx={{ margin: '0px 30px 30px 30px', }} sm={12} md={12} lg={12} xl={12}>
                        <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
                            <Grid item>
                                <Button variant='contained'
                                    onClick={handleCreate}>
                                    <Typography>
                                        {selectedAutomation !== null ?
                                            ALERT_RULES.UPDATE_ALERT_RULE : ALERT_RULES.CREATE_ALERT_RULE
                                        }
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='secondary'
                                    onClick={handleClose}>
                                    <Typography>
                                        {ALERT_RULES.CANCEL}
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export { Create }