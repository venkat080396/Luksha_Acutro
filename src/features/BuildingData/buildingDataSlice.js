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
    devicesToBeSaved: []
};

const buildingDataSlice = createSlice({
    name: 'buildingData',
    initialState,
    reducers: {
        updateDeviceToBeSaved(state, action) {
            state.devicesToBeSaved = action.payload;
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

export const { updateDeviceToBeSaved } = buildingDataSlice.actions

export default buildingDataSlice.reducer