import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../common/API";
import { downloadDataFromURL } from '../../../common/utils'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const exportData = createAsyncThunk(
    'exports/exportData',
    async ([fromDate, toDate, SiteRecId, buildingRecId, floorRecId]) => {
        const input = {
            operation: "ExportResultToS3",
            payload: {
                "dtFromDate": fromDate,
                "dtToDate": toDate,
                "SiteRecId": SiteRecId,
                "BuildingRecId": buildingRecId,
                "FloorRecId": floorRecId
            }
        }
        const response = await API.post(BASE_URL, input);
        return response.data;
    }
);

const initialState = {
    csvFileURL: null
};

const exportsSlice = createSlice({
    name: 'exports',
    initialState,
    extraReducers: {
        [exportData.pending]: () => {
        },
        [exportData.fulfilled]: (state, { payload }) => {
            downloadDataFromURL(payload?.CSVFileURL)
        },
        [exportData.rejected]: () => {
        }
    }
})

export default exportsSlice.reducer