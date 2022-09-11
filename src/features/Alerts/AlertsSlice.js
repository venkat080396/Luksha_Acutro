import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL, api } from '../../common/apis/api';

export const saveConnector = createAsyncThunk(
    'Alerts/saveConnector',
    async (connector) => {
        const connectorDetails = {
            operation: 'SaveAlertConnector',
            payload: {
                nAlertConnectorRecId: connector.connectorRecId || '-1',
                sConnectorName: connector.connectorName,
                sConnectorType: connector.type,
                sRecipients: connector.recipients,
                bIsDelete: connector.isDelete || '0'
            }
        }
        const response = await api.post(baseURL, connectorDetails);
        return response.data;
    }
);

export const fetchConnectors = createAsyncThunk(
    'Alerts/fetchConnectors',
    async () => {
        const connectorDetails = {
            operation: 'GetAlertConnectors',
            payload: {
            }
        }
        const response = await api.post(baseURL, connectorDetails);
        return response.data;
    }
);

export const saveAutomation = createAsyncThunk(
    'Alerts/saveAutomation',
    async (automation) => {
        const automationDetails = {
            operation: 'SaveAlertAutomationConfig',
            payload: {
                nAlertAutomationRecId: automation.automationRecId || '-1',
                sAutomationName: automation.automationName,
                sDescription: automation.description,
                nAssetOrDeviceRecId: automation.assetOrDeviceId,
                nMetricOrDeviceSensorRecId: automation.metricOrDeviceSensorRecId,
                sConditionOperator: automation.conditionOperator,
                nThresholdValue: automation.thresholdValue,
                nAlertConnectorRecId: automation.connectorRecId,
                sAlertConnectorRecIds: automation.connectorRecIds,
                sAlertMessage: automation.alertMessage,
                sActionMessage: automation.actionMessage,
                nViolationCount: automation.violationCount || '0',
                bIsDelete: automation.isDelete || '0'
            }
        }
        const response = await api.post(baseURL, automationDetails);
        return response.data;
    }
);

export const fetchAutomations = createAsyncThunk(
    'Alerts/fetchAutomations',
    async () => {
        const automationDetails = {
            operation: 'GetAlertAutomationConfigs',
            payload: {
            }
        }
        const response = await api.post(baseURL, automationDetails);
        return response.data;
    }
);

export const fetchAsyncSites = createAsyncThunk(
    'Alerts/fetchAsyncSites',
    async () => {
        return [{ RecId: 1, Name: 'Site 1' }];
    }
);

export const fetchAsyncBuildings = createAsyncThunk(
    'Alerts/fetchAsyncBuildings',
    async (SiteId) => {
        const siteDetails = {
            operation: 'GetBuildingsForSiteId',
            payload: {
                'SiteRecId': SiteId
            }
        }

        const response = await api.post(baseURL, siteDetails);
        return response.data;
    }
);

export const fetchAsyncFloors = createAsyncThunk(
    'Alerts/fetchAsyncFloors',
    async (building) => {
        const siteDetails = {
            operation: 'GetFloorsForBuildingId',
            payload: {
                'SiteRecId': `${building.SiteRecId}`,
                'BuildingRecId': `${building.RecId}`
            }
        }

        const response = await api.post(baseURL, siteDetails);
        return response.data;
    }
);

export const fetchAsyncDevices = createAsyncThunk(
    'Alerts/fetchAsyncDevices',
    async (floor) => {
        const input = {
            operation: 'GetDevicesForFloorId',
            payload: {
                'SiteRecId': `${floor.SiteRecId}`,
                'BuildingRecId': `${floor.BuildingRecId}`,
                'FloorRecId': `${floor.RecId}`
            }
        }
        const response = await api.post(baseURL, input);
        return response.data;
    }
);

export const fetchAsyncDistributionList = createAsyncThunk(
    'Alerts/fetchAsyncDistributionList',
    async () => {
        const inputDetails = {
            'operation': 'GetAlertSubscriptionGroups',
            'payload': {
            }
        }
        const response = await api.post(baseURL, inputDetails);
        const mapArray = [];
        response.data.map((item) => {
            mapArray.push({ RecId: item.UserCount, Name: item.AlertGroup })
            return item;
        })

        return mapArray;
    }
);

export const saveDistribution = createAsyncThunk(
    'Alerts/saveDistribution',
    async ({ email = null, call = null, name }) => {
        const inputDetails = {
            'operation': 'SaveAlertSubscriptionForGroup',
            'payload': {
                'sGroupName': name,
                'sEmailIDs': email,
                'sMobileNumbers': call
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

const initialState = {
    connectors: null,
    automations: null,
    selectedConnectors: null,
    distributionList: [],
    buildings: [{}],
    floors: [{}],
    Site: [{}],
    devices: [{}],
    selectedBuilding: {},
    selectedFloor: {},
    selectSite: {},
    selectDevice: {}
};

const AlertsSlice = createSlice({
    name: 'Alerts',
    initialState,
    reducers: {
        setSelectedBuilding(state, action) {
            state.selectedBuilding = action.payload
        },
        setSelectedFloor(state, action) {
            state.selectedFloor = action.payload
        },
        setSelectedSite(state, action) {
            state.selectSite = action.payload
        },
        setSelectedDevice(state, action) {
            state.selectDevice = action.payload
        },
        setSelectedConnectors(state, action) {
            state.selectedConnectors = action.payload
        }
    },
    extraReducers: {
        [fetchConnectors.fulfilled]: (state, { payload }) => {
            return { ...state, connectors: payload };
        },
        [fetchAutomations.fulfilled]: (state, { payload }) => {
            return { ...state, automations: payload };
        },
        [fetchAsyncDistributionList.fulfilled]: (state, { payload }) => {
            return { ...state, distributionList: payload };
        },
        [fetchAsyncBuildings.fulfilled]: (state, { payload }) => {
            return { ...state, buildings: payload };
        },
        [fetchAsyncFloors.fulfilled]: (state, { payload }) => {
            return { ...state, floors: payload };
        },
        [fetchAsyncSites.fulfilled]: (state, { payload }) => {
            return { ...state, Site: payload };
        },
        [fetchAsyncDevices.fulfilled]: (state, { payload }) => {
            return { ...state, devices: payload };
        }
    }
})

export const getDistributionList = (state) => state.Alerts.distributionList;
export const getAllBuildings = (state) => state.Alerts?.buildings;
export const getAllFloors = (state) => state.Alerts?.floors;
export const getAllSites = (state) => state.Alerts?.Site;
export const getAllDevices = (state) => state.Alerts?.devices;
export const getSelectedBuilding = (state) => state.Alerts?.selectedBuilding;
export const getSelectedFloor = (state) => state.Alerts?.selectedFloor;
export const getSelectedSites = (state) => state.Alerts?.selectSite;
export const getSelectedDevice = (state) => state.Alerts?.selectDevice;
export const getConnectors = (state) => state.Alerts?.connectors;
export const getAutomations = (state) => state.Alerts?.automations;
export const getSelectedConnectors = (state) => state.Alerts?.selectedConnectors;

export const { setSelectedBuilding, setSelectedFloor, setSelectedSite, setSelectedDevice, setSelectedConnectors } = AlertsSlice.actions

export default AlertsSlice.reducer