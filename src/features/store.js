import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Login/loginSlice';
import homeSlice from './Home/homeSlice';
import dashboardSlice from './Dashboard/dashboardSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice,
        home: homeSlice,
        dashboard: dashboardSlice
    }
});