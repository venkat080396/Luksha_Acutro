import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL, api } from '../../common/apis/api';

export const fetchAsyncDevicesWithStatus = createAsyncThunk(
    'buildingData/fetchAsyncDevicesWithStatus',
    async (requestDetails) => {
        const inputDetails = {
            operation: 'GetAllDevicesWithStatus',
            payload: {
                'SiteRecId': requestDetails.siteRecId,
                'BuildingRecId': requestDetails.buildingRecId,
                'FloorRecId': requestDetails.floorRecId,
                'DeviceTypeRecId': requestDetails.deviceTypeRecId,
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const fetchAsyncDeviceSensorsForDeviceId = createAsyncThunk(
    'buildingData/fetchAsyncDeviceSensorsForDeviceId',
    async (deviceRecId) => {
        const inputDetails = {
            operation: 'GetDeviceSensorsForDeviceId',
            payload: {
                'DeviceRecId': deviceRecId,
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const fetchAsyncDeviceReadingsForFilter = createAsyncThunk(
    'buildingData/fetchAsyncDeviceReadingsForFilter',
    async (filter) => {
        const inputDetails = {
            operation: 'GetDeviceReadingsForFilter',
            payload: {
                'dtFromDate': filter.FromDate,
                'dtToDate': filter.ToDate,
                'DeviceRecId': filter.DeviceRecId,
                'DeviceSensorRecId': filter.DeviceSensorRecId,
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const fetchAsyncDeviceTypeforFloorId = createAsyncThunk(
    'buildingData/fetchAsyncDeviceTypeforFloorId',
    async (requestDetails) => {
        const inputDetails = {
            operation: 'GetDeviceTypeForFloorId',
            payload: {
                // 'SiteRecId': requestDetails.siteRecId,
                // 'BuildingRecId': requestDetails.buildingRecId,
                // 'FloorRecId': requestDetails.floorRecId,
                'SiteRecId': 1,
                'BuildingRecId': 1,
                'FloorRecId': 1,
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const fetchAsyncComfortLevelChartDataForDevice = createAsyncThunk(
    'buildingData/fetchAsyncComfortLevelChartDataForDevice',
    async (filter) => {
        const inputDetails = {
            operation: 'GetComfortLevelChartDataForDevice',
            payload: {
                'dtFromDate': filter.FromDate,
                'dtToDate': filter.ToDate,
                'DeviceTypeRecId': filter.DeviceTypeRecId
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const fetchAsyncAllDeviceTypes = createAsyncThunk(
    'buildingData/fetchAsyncAllDeviceTypes',
    async (deviceTypeRecId) => {
        const inputDetails = {
            operation: 'GetAllDeviceTypes',
            payload: {
                'ParentDeviceTypeRecId': deviceTypeRecId
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const saveAsyncDevice = createAsyncThunk(
    'buildingData/saveAsyncDevice',
    async (device) => {
        const inputDetails = {
            operation: 'SaveDevice',
            payload: {
                'DeviceRecId': device.RecId,
                'FloorRecId': device.FloorRecId,
                'DeviceTypeRecId': device.DeviceTypeRecId,
                'DeviceUniqueId': device.Name,
                'DeviceName': device.Name,
                'FloorX': Math.round(device.FloorX),
                'FloorY': Math.round(device.FloorY)
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

const initialState = {
    devices: [],
    allDeviceTypes: null,
    deviceSensors: null,
    deviceReadings: null,
    devicesToBeSaved: [],
    selectedBuildingOnMap: null,
    selectedAssetType: null,
    selectedDevice: null,
    selectedSensor: null,
    comfortChartData: null,
    floorDeviceTypes: []
};

const buildingDataSlice = createSlice({
    name: 'buildingData',
    initialState,
    reducers: {
        updateDeviceToBeSaved(state, action) {
            state.devicesToBeSaved = action.payload;
        },
        setSelectedBuildingOnMap(state, action) {
            state.selectedBuildingOnMap = action.payload
        },
        setSelectedAssetType(state, action) {
            state.selectedAssetType = action.payload
        },
        setSelectedDevice(state, action) {
            state.selectedDevice = action.payload
        },
        setSelectedSensor(state, action) {
            state.selectedSensor = action.payload
        }
    },
    extraReducers: {
        [fetchAsyncDeviceTypeforFloorId.fulfilled]: (state, { payload }) => {
            return { ...state, floorDeviceTypes: payload };
        },
        [fetchAsyncDeviceTypeforFloorId.rejected]: (state, action) => {
            state.status = 'Failed'
        },
        [fetchAsyncDevicesWithStatus.fulfilled]: (state, { payload }) => {
            return { ...state, devices: payload };
        },
        [fetchAsyncComfortLevelChartDataForDevice.fulfilled]: (state, { payload }) => {
            return { ...state, comfortChartData: payload };
        },
        [fetchAsyncDeviceSensorsForDeviceId.fulfilled]: (state, { payload }) => {
            return { ...state, deviceSensors: payload };
        },
        [fetchAsyncDeviceReadingsForFilter.fulfilled]: (state, { payload }) => {
            return { ...state, deviceReadings: payload };
        },
        [fetchAsyncAllDeviceTypes.fulfilled]: (state, { payload }) => {
            return { ...state, allDeviceTypes: payload.length !== 0 ? payload : state.allDeviceTypes };
        }
    }
})

export const getAllDevicesWithStatus = (state) => state.buildingData?.devices;
export const getAllDeviceTypes = (state) => state.buildingData?.allDeviceTypes;
export const getAllDevicesToBeSaved = (state) => state.buildingData?.devicesToBeSaved;
export const getSelectedBuildingOnMap = (state) => state.buildingData?.selectedBuildingOnMap
export const getDeviceSensors = (state) => state.buildingData?.deviceSensors
export const getDeviceReadings = (state) => state.buildingData?.deviceReadings
export const getSelectedAssetType = (state) => state.buildingData?.selectedAssetType
export const getSelectedDevice = (state) => state.buildingData?.selectedDevice
export const getSelectedSensor = (state) => state.buildingData?.selectedSensor
export const getComfortChartData = (state) => state.buildingData?.comfortChartData
export const getDeviceTypeForFloorId = (state) => state.buildingData?.floorDeviceTypes

export const { updateDeviceToBeSaved, setSelectedBuildingOnMap, setSelectedAssetType, setSelectedDevice, setSelectedSensor } = buildingDataSlice.actions

export default buildingDataSlice.reducer