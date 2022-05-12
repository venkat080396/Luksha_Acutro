import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, homeApi } from "../../common/apis/homeApi";

export const fetchAsyncBuildings = createAsyncThunk(
    'home/fetchAsyncBuildings',
    async () => {
        const siteDetails = {
            operation: "GetBuildingsForSiteId",
            payload: {
                "SiteRecId": "1"
            }
        }

        const response = await homeApi.post(baseURL, siteDetails);
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

        const response = await homeApi.post(baseURL, siteDetails);
        return response.data;
    }
);

const initialState = {
    buildings: [{}],
    floors: [{}],
    selectedBuilding: {},
    selectedFloor: {}
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
        }
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

export const { setSelectedBuilding, setSelectedFloor } = homeSlice.actions

export default homeSlice.reducer