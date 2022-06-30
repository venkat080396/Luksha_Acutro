import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, api } from "../../common/apis/api";

export const fetchAsyncDevicesWithStatus = createAsyncThunk(
    'buildingData/fetchAsyncDevicesWithStatus',
    async (requestDetails) => {
        const inputDetails = {
            operation: "GetAllDevicesWithStatus",
            payload: {
                "SiteRecId": requestDetails.siteRecId,
                "BuildingRecId": requestDetails.buildingRecId,
                "FloorRecId": requestDetails.floorRecId,
                "DeviceTypeRecId": requestDetails.deviceTypeRecId,
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
            operation: "GetDeviceSensorsForDeviceId",
            payload: {
                "DeviceRecId": deviceRecId,
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
            operation: "GetDeviceReadingsForFilter",
            payload: {
                "dtFromDate": filter.FromDate,
                "dtToDate": filter.ToDate,
                "DeviceRecId": filter.DeviceRecId,
                "DeviceSensorRecId": filter.DeviceSensorRecId,
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
            operation: "GetAllDeviceTypes",
            payload: {
                "ParentDeviceTypeRecId": deviceTypeRecId
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
            operation: "SaveDevice",
            payload: {
                "DeviceRecId": device.RecId,
                "FloorRecId": device.FloorRecId,
                "DeviceTypeRecId": device.DeviceTypeRecId,
                "DeviceUniqueId": device.Name,
                "DeviceName": device.Name,
                "FloorX": Math.round(device.FloorX),
                "FloorY": Math.round(device.FloorY)
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
    selectedBuildingOnMap: null
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
        }
    },
    extraReducers: {
        [fetchAsyncDevicesWithStatus.pending]: () => {
        },
        [fetchAsyncDevicesWithStatus.fulfilled]: (state, { payload }) => {
            return { ...state, devices: payload };
        },
        [fetchAsyncDevicesWithStatus.rejected]: () => {
        },
        [fetchAsyncDeviceSensorsForDeviceId.pending]: () => {
        },
        [fetchAsyncDeviceSensorsForDeviceId.fulfilled]: (state, { payload }) => {
            return { ...state, deviceSensors: payload };
        },
        [fetchAsyncDeviceSensorsForDeviceId.rejected]: () => {
        },
        [fetchAsyncDeviceReadingsForFilter.pending]: () => {
        },
        [fetchAsyncDeviceReadingsForFilter.fulfilled]: (state, { payload }) => {
            return { ...state, deviceReadings: payload };
        },
        [fetchAsyncDeviceReadingsForFilter.rejected]: () => {
        },
        [fetchAsyncAllDeviceTypes.pending]: () => {
        },
        [fetchAsyncAllDeviceTypes.fulfilled]: (state, { payload }) => {
            return { ...state, allDeviceTypes: payload.length !== 0 ? payload : state.allDeviceTypes };
        },
        [fetchAsyncAllDeviceTypes.rejected]: () => {
        },
        [saveAsyncDevice.pending]: () => {
        },
        [saveAsyncDevice.fulfilled]: (state, { payload }) => {
        },
        [saveAsyncDevice.rejected]: () => {
        }
    }
})

export const getAllDevicesWithStatus = (state) => state.buildingData?.devices;
export const getAllDeviceTypes = (state) => state.buildingData?.allDeviceTypes;
export const getAllDevicesToBeSaved = (state) => state.buildingData?.devicesToBeSaved;
export const getSelectedBuildingOnMap = (state) => state.buildingData?.selectedBuildingOnMap
export const getDeviceSensors = (state) => state.buildingData?.deviceSensors
export const getDeviceReadings = (state) => state.buildingData?.deviceReadings

export const { updateDeviceToBeSaved, setSelectedBuildingOnMap } = buildingDataSlice.actions

export default buildingDataSlice.reducer