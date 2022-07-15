import React from 'react'
import { isAuthenticated } from "../features/Login/loginSlice"
import { Navigate } from "react-router-dom";

const ProtectedAuth = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

export default ProtectedAuth