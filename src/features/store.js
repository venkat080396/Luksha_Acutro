import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Login/loginSlice';
import homeSlice from './Home/homeSlice';
import dashboardSlice from './Dashboard/dashboardSlice';
import utilitiesSlice from './Utilities/utilitiesSlice';
import exportsSlice from './Exports/exportsSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice,
        home: homeSlice,
        dashboard: dashboardSlice,
        utilities: utilitiesSlice,
        exports: exportsSlice
    }
});