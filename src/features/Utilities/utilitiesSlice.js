import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, api } from "../../common/apis/api";

export const fetchAsyncDevices = createAsyncThunk(
    'utilities/fetchAsyncDevices',
    async ([buildingRecId, floorRecId]) => {
        const floorDetails = {
            operation: "GetDevicesForFloorId",
            payload: {
                "SiteRecId": "1",
                "BuildingRecId": buildingRecId,
                "FloorRecId": floorRecId
            }
        }
        const response = await api.post(baseURL, floorDetails);
        return response.data;
    }
);

const initialState = {
    devices: []
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
        }
    }
})

export const getAllDevices = (state) => state.utilities?.devices;

export default utilitiesSlice.reducer