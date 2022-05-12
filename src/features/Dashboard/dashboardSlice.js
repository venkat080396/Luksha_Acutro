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
                name: "Building Data"
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
    leftDrawerItems: null
};

export const fetchAsyncLeftDrawerItems = createAsyncThunk(
    'dashboard/fetchAsyncLeftDrawerItems',
    async () => {
        const response = await getLeftDrawerItems();
        return response;
    }
);

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    extraReducers: {
        [fetchAsyncLeftDrawerItems.pending]: () => {
        },
        [fetchAsyncLeftDrawerItems.fulfilled]: (state, { payload }) => {
            return { ...state, leftDrawerItems: payload };
        },
        [fetchAsyncLeftDrawerItems.rejected]: () => {
        }
    }
})

export const getAllLeftDrawerItems = (state) => state.dashboard?.leftDrawerItems;

export default dashboardSlice.reducer