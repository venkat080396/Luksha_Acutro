import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LEFT_DRAWER_ITEMS } from '../../pages/Dashboard/constants'
import { COMFORT, HVAC_EFFICIENCY, UTILITIES } from '../../pages/Reports/constants'

const getLeftDrawerItems = () => {
    var json = {
        list: [
            {
                id: 1,
                name: LEFT_DRAWER_ITEMS.HOME
            },
            {
                id: 2,
                name: LEFT_DRAWER_ITEMS.ALERTS,
                items: [
                    { id: 12, name: LEFT_DRAWER_ITEMS.DISTRIBUTION_LIST },
                    { id: 13, name: LEFT_DRAWER_ITEMS.CONNECTORS },
                    { id: 14, name: LEFT_DRAWER_ITEMS.AUTOMATIONS }]
            },
            {
                id: 3,
                name: LEFT_DRAWER_ITEMS.BUILDING_DATA,
                items: [
                    {
                        id: 11,
                        name: LEFT_DRAWER_ITEMS.FLOOR_VIEW
                    }
                ]
            },
            {
                id: 4,
                name: LEFT_DRAWER_ITEMS.REPORTS,
                items: [
                    {
                        id: 7,
                        name: LEFT_DRAWER_ITEMS.UTILITIES
                    },
                    {
                        id: 8,
                        name: LEFT_DRAWER_ITEMS.HVAC_EFFICIENCY
                    },
                    {
                        id: 9,
                        name: LEFT_DRAWER_ITEMS.COMFORT
                    },
                    {
                        id: 10,
                        name: LEFT_DRAWER_ITEMS.EXPORTS
                    }
                ]
            }
            // {
            //     id: 5,
            //     name: "Buildings"
            // },
            // {
            //     id: 6,
            //     name: "Setting"
            // },
        ]
    };
    return json;
}

const initialState = {
    leftDrawerItems: null,
    dashboardSettings: [
        { id: 1, name: UTILITIES.ENERGY_REPORTS.HEADER },
        { id: 2, name: COMFORT.VALUE },
        { id: 3, name: HVAC_EFFICIENCY.VALUE }],
    notifications: [{ recId: 1, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { recId: 2, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { recId: 3, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { recId: 4, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" },
    { recId: 5, title: "Overheating Warning", description: "Asset 123 is not working", time: "12:00" }]
};

export const fetchAsyncLeftDrawerItems = createAsyncThunk(
    'dashboard/fetchAsyncLeftDrawerItems',
    async () => {
        const response = await getLeftDrawerItems();
        return response;
    }
);

export const saveAsyncDashboardSettings = createAsyncThunk(
    'dashboard/saveAsyncDashboardSettings',
    async (userRecId, settings) => {
        const inputDetails = {
            operation: "SaveDashboardSettings",
            payload: {
                "userRecId": userRecId,
                "settings": settings,
            }
        }
        return settings;
        //const response = await api.post(baseURL, inputDetails);
        //return response.data;
    }
);

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDashboardSettings(state, action) {
            state.dashboardSettings = action.payload
        },
        setNotifications(state, action) {
            state.notifications = action.payload
        }
    },
    extraReducers: {
        [fetchAsyncLeftDrawerItems.fulfilled]: (state, { payload }) => {
            return { ...state, leftDrawerItems: payload };
        }
    }
})

export const getAllLeftDrawerItems = (state) => state.dashboard?.leftDrawerItems;
export const getDashboardSettings = (state) => state.dashboard?.dashboardSettings;
export const getNotifications = (state) => state.dashboard?.notifications;

export const { setDashboardSettings, setNotifications } = dashboardSlice.actions

export default dashboardSlice.reducer