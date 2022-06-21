import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Alerts from './pages/Alerts/Container';
import BuildingData from './pages/BuildingData/BuildingData';
import Dashboard from './pages/Dashboard/Dashboard';
import Utilities from './pages/Reports/Utilities/Utilities'
import HVACEfficiency from './pages/Reports/HVACEfficiency/HVACEfficiency'
import Comfort from './pages/Reports/Comfort/Comfort'
import Exports from './pages/Reports/Exports/Exports'
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import SessionTimeout from './common/SessionTimeout';
//const LoginContainer = React.lazy(() => import("./pages/Login/Container"));
//const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));

function App() {
  return (
    <SnackbarProvider anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
      preventDuplicate="true">
      <CssBaseline />
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="buildingData" element={<BuildingData />} />
        <Route path="utilities" element={<Utilities />} />
        <Route path="HVACEfficiency" element={<HVACEfficiency />} />
        <Route path="comfort" element={<Comfort />} />
        <Route path="exports" element={<Exports />} />
      </Routes>
      <SessionTimeout sessionTimeoutDuration={process.env.REACT_APP_SESSION_TIMEOUT} />
    </SnackbarProvider>
  );
}

export default App;
