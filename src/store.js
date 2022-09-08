import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './pages/Login/slice';
import homeSlice from './pages/Home/slice';
import dashboardSlice from './pages/Dashboard/slice';
import utilitiesSlice from './pages/Reports/Utilities/slice';
import exportsSlice from './pages/Reports/Exports/slice';
import buildingDataSlice from './pages/BuildingData/slice';
import AlertsSlice from './pages/Alerts/slice';

export const store = configureStore({
    reducer: {
        login: loginSlice,
        home: homeSlice,
        dashboard: dashboardSlice,
        utilities: utilitiesSlice,
        exports: exportsSlice,
        buildingData: buildingDataSlice,
        Alerts: AlertsSlice
    }
});