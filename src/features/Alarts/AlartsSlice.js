import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, api } from "../../common/apis/api";

// export const fetchAsyncDevicesWithStatus = createAsyncThunk(
//     'buildingData/fetchAsyncDevicesWithStatus',
//     async (requestDetails) => {
//         const inputDetails = {
//             operation: "GetAllDevicesWithStatus",
//             payload: {
//                 "SiteRecId": requestDetails.siteRecId,
//                 "BuildingRecId": requestDetails.buildingRecId,
//                 "FloorRecId": requestDetails.floorRecId,
//                 "DeviceTypeRecId": requestDetails.deviceTypeRecId,
//             }
//         }
//         const response = await api.post(baseURL, inputDetails);
//         return response.data;
//     }
// );

// export const fetchAsyncAllDeviceTypes = createAsyncThunk(
//     'buildingData/fetchAsyncAllDeviceTypes',
//     async (deviceTypeRecId) => {
//         const inputDetails = {
//             operation: "GetAllDeviceTypes",
//             payload: {
//                 "ParentDeviceTypeRecId": deviceTypeRecId
//             }
//         }
//         const response = await api.post(baseURL, inputDetails);
//         return response.data;
//     }
// );

export const saveDistribution = createAsyncThunk(
    'Alarts/saveDistribution',
    async ({ email, call, name }) => {
        const inputDetails = {
            "operation": "SaveAlertSubscriptionForGroup",
            "payload": {
                "sGroupName": name,
                "sEmailIDs": email,   // Comma separated Email Ids.  sMobileNumbers should be null
                "sMobileNumbers": call
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

const initialState = {
    distributionList: []
};

const AlartsSlice = createSlice({
    name: 'Alarts',
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
        [saveDistribution.pending]: () => {
        },
        [saveDistribution.fulfilled]: (state, { payload }) => {
        },
        [saveDistribution.rejected]: () => {
        }
    }
})

export const getDistributionList = (state) => state.distributionList;

export const { updateDeviceToBeSaved, setSelectedBuildingOnMap } = AlartsSlice.actions

export default AlartsSlice.reducer