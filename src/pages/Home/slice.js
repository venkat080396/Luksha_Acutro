import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../common/API";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAsyncBuildings = createAsyncThunk(
    'home/fetchAsyncBuildings',
    async () => {
        const siteDetails = {
            operation: "GetBuildingsForSiteId",
            payload: {
                "SiteRecId": "1"
            }
        }

        const response = await API.post(BASE_URL, siteDetails);
        return response.data;
    }
);

export const fetchAsyncFloors = createAsyncThunk(
    'home/fetchAsyncFloors',
    async (buildingRecId) => {
        const siteDetails = {
            operation: "GetFloorsForBuildingId",
            payload: {
                "SiteRecId": "1",
                "BuildingRecId": buildingRecId
            }
        }

        const response = await API.post(BASE_URL, siteDetails);
        return response.data;
    }
);

const initialState = {
    buildings: [{}],
    floors: [{}],
    selectedBuilding: {},
    selectedFloor: {},
    fromDate: null,
    toDate: null
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setSelectedBuilding(state, action) {
            state.selectedBuilding = action.payload
        },
        setSelectedFloor(state, action) {
            state.selectedFloor = action.payload
        },
        setFromDate(state, action) {
            state.fromDate = action.payload
        },
        setToDate(state, action) {
            state.toDate = action.payload
        },
    },
    extraReducers: {
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
        }
    }
})

export const getAllBuildings = (state) => state.home?.buildings;
export const getAllFloors = (state) => state.home?.floors;
export const getSelectedBuilding = (state) => state.home?.selectedBuilding;
export const getSelectedFloor = (state) => state.home?.selectedFloor;
export const getFromDate = (state) => state.home?.fromDate;
export const getToDate = (state) => state.home?.toDate;

export const { setSelectedBuilding, setSelectedFloor, setFromDate, setToDate } = homeSlice.actions

export default homeSlice.reducer