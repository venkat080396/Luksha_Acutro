import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Login/loginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer
    }
});