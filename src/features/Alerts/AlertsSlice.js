import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, api } from "../../common/apis/api";


export const saveDistribution = createAsyncThunk(
    'Alerts/saveDistribution',
    async ({ email = null, call = null, name }) => {
        const inputDetails = {
            "operation": "SaveAlertSubscriptionForGroup",
            "payload": {
                "sGroupName": name,
                "sEmailIDs": email,
                "sMobileNumbers": call
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

export const fetchAsyncDistributionList = createAsyncThunk(
    'Alerts/fetchAsyncDistributionList',
    async (name) => {
        const inputDetails = {
            "operation": "GetAlertSubscriptionForGroup",
            "payload": {
                "AlertGroup": name
            }
        }
        const response = await api.post(baseURL, inputDetails);
        return response.data;
    }
);

const initialState = {
    distributionList: []
};

const AlertsSlice = createSlice({
    name: 'Alerts',
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
        },
        [fetchAsyncDistributionList.pending]: () => {
        },
        [fetchAsyncDistributionList.fulfilled]: (state, { payload }) => {
            return [...state, payload];
        },
        [fetchAsyncDistributionList.rejected]: () => {
        }
    }
})

export const getDistributionList = (state) => state.distributionList;

export const { updateDeviceToBeSaved, setSelectedBuildingOnMap } = AlertsSlice.actions

export default AlertsSlice.reducer