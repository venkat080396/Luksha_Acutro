import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL, api } from '../../common/apis/api';
import { downloadDataFromURL } from '../../common/Utils'

export const exportData = createAsyncThunk(
    'exports/exportData',
    async ([fromDate, toDate, SiteRecId, buildingRecId, floorRecId]) => {
        const input = {
            operation: 'ExportResultToS3',
            payload: {
                'dtFromDate': fromDate,
                'dtToDate': toDate,
                'SiteRecId': SiteRecId,
                'BuildingRecId': buildingRecId,
                'FloorRecId': floorRecId
            }
        }
        const response = await api.post(baseURL, input);
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