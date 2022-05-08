import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeApi from "../../common/apis/homeApi";

export const fetchAsyncBuildings = createAsyncThunk(
    "home/fetchAsyncBuildings",
    async () => {
        const siteDetails = JSON.stringify({
            "operation": "GetBuildingsForSiteId",
            "payload": {
                "SiteRecId": "1"
            }
        })

        const response = await homeApi.post(siteDetails);
        return response.data;
    }
);

const initialState = {
    buildings: {}
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncBuildings.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncBuildings.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, buildings: payload };
        },
        [fetchAsyncBuildings.rejected]: () => {
            console.log("Rejected!");
        },
    }
})

export const getAllBuildings = (state) => state.home?.buildings;

export default homeSlice.reducer