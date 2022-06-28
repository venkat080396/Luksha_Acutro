import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, api } from "../../common/apis/api";


export const fetchAsyncSites = createAsyncThunk(
    'Alerts/fetchAsyncSites',
    async () => {
        return [{ RecId: 1, Name: "Site 1" }];
    }
);

export const fetchAsyncBuildings = createAsyncThunk(
    'Alerts/fetchAsyncBuildings',
    async (SiteId) => {
        const siteDetails = {
            operation: "GetBuildingsForSiteId",
            payload: {
                "SiteRecId": SiteId
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
            operation: "GetFloorsForBuildingId",
            payload: {
                "SiteRecId": `${building.SiteRecId}`,
                "BuildingRecId": `${building.RecId}`
            }
        }

        const response = await api.post(baseURL, siteDetails);
        return response.data;
    }
);

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
    distributionList: [],
    buildings: [{}],
    floors: [{}],
    Site: [{}],
    selectedBuilding: {},
    selectedFloor: {},
    selectSite: {},
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
        },
        [fetchAsyncBuildings.pending]: () => {
        },
        [fetchAsyncBuildings.fulfilled]: (state, { payload }) => {
            return { ...state, buildings: payload };
        },
        [fetchAsyncBuildings.rejected]: () => {
        },
        [fetchAsyncFloors.pending]: () => {
        },
        [fetchAsyncFloors.fulfilled]: (state, { payload }) => {
            return { ...state, floors: payload };
        },
        [fetchAsyncFloors.rejected]: () => {
        },
        [fetchAsyncSites.pending]: () => {
        },
        [fetchAsyncSites.fulfilled]: (state, { payload }) => {
            return { ...state, Site: payload };
        },
        [fetchAsyncSites.rejected]: () => {
        }
    }
})

export const getDistributionList = (state) => state.Alerts.distributionList;
export const getAllBuildings = (state) => state.Alerts?.buildings;
export const getAllFloors = (state) => state.Alerts?.floors;
export const getAllSites = (state) => state.Alerts?.Site;
export const getSelectedBuilding = (state) => state.Alerts?.selectedBuilding;
export const getSelectedFloor = (state) => state.Alerts?.selectedFloor;
export const getSelectedSites = (state) => state.Alerts?.selectSite;

export const { setSelectedBuilding, setSelectedFloor, setSelectedSite } = AlertsSlice.actions

export default AlertsSlice.reducer