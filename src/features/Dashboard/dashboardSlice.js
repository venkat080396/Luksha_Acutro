import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getLeftDrawerItems = () => {
    var json = {
        list: [
            {
                id: 1,
                name: "Home"
            },
            {
                id: 2,
                name: "Alerts"
            },
            {
                id: 3,
                name: "Building Data",
                items: [
                    {
                        id: 11,
                        name: "Floor View"
                    },
                    {
                        id: 12,
                        name: "List View"
                    }
                ]
            },
            {
                id: 4,
                name: "Reports",
                items: [
                    {
                        id: 7,
                        name: "Utilities/Consumption"
                    },
                    {
                        id: 8,
                        name: "HVAC Efficiency"
                    },
                    {
                        id: 9,
                        name: "Comfort"
                    },
                    {
                        id: 10,
                        name: "Exports"
                    }
                ]
            },
            {
                id: 5,
                name: "Buildings"
            },
            {
                id: 6,
                name: "Setting"
            },
        ]
    };
    return json;
}

const initialState = {
    leftDrawerItems: null,
    dashboardSettings: [{ id: 1, name: "Energy Reports" }, { id: 2, name: "Comfort" }, { id: 3, name: "HVAC Efficiency" }]
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
        }
    },
    extraReducers: {
        [fetchAsyncLeftDrawerItems.pending]: () => {
        },
        [fetchAsyncLeftDrawerItems.fulfilled]: (state, { payload }) => {
            return { ...state, leftDrawerItems: payload };
        },
        [fetchAsyncLeftDrawerItems.rejected]: () => {
        },
        [saveAsyncDashboardSettings.pending]: () => {
        },
        [saveAsyncDashboardSettings.fulfilled]: (state, { payload }) => {
        },
        [saveAsyncDashboardSettings.rejected]: () => {
        }
    }
})

export const getAllLeftDrawerItems = (state) => state.dashboard?.leftDrawerItems;
export const getDashboardSettings = (state) => state.dashboard?.dashboardSettings;

export const { setDashboardSettings } = dashboardSlice.actions

export default dashboardSlice.reducer