import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../common/API";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAsyncDevices = createAsyncThunk(
    'utilities/fetchAsyncDevices',
    async ([buildingRecId, floorRecId]) => {
        const input = {
            operation: "GetDevicesForFloorId",
            payload: {
                "SiteRecId": "1",
                "BuildingRecId": buildingRecId,
                "FloorRecId": floorRecId
            }
        }
        const response = await API.post(BASE_URL, input);
        return response.data;
    }
);

export const fetchAsyncEnergyConsumptionSummary = createAsyncThunk(
    'utilities/GetEnergyConsumptionSummary',
    async ([fromDate, toDate, siteRecId, buildingRecId, floorRecId]) => {
        const input = {
            operation: "GetEnergyConsumptionSummary",
            payload: {
                "dtFromDate": fromDate,
                "dtToDate": toDate,
                "SiteRecId": siteRecId,
                "BuildingRecId": buildingRecId,
                "FloorRecId": floorRecId
            }
        }
        const response = await API.post(BASE_URL, input);
        return response.data;
    }
);

const initialState = {
    devices: [],
    energyConsumptionSummary: []
};

const utilitiesSlice = createSlice({
    name: 'utilities',
    initialState,
    extraReducers: {
        [fetchAsyncDevices.pending]: () => {
        },
        [fetchAsyncDevices.fulfilled]: (state, { payload }) => {
            return { ...state, devices: payload };
        },
        [fetchAsyncDevices.rejected]: () => {
        },
        [fetchAsyncEnergyConsumptionSummary.pending]: () => {
        },
        [fetchAsyncEnergyConsumptionSummary.fulfilled]: (state, { payload }) => {
            return { ...state, energyConsumptionSummary: payload };
        },
        [fetchAsyncEnergyConsumptionSummary.rejected]: () => {
        }
    }
})

export const getAllDevices = (state) => state.utilities?.devices;
export const getEnergyConsumptionSummary = (state) => state.utilities?.energyConsumptionSummary;

export default utilitiesSlice.reducer