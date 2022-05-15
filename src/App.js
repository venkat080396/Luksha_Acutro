import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Alerts from './pages/Alerts/Alerts';
import BuildingData from './pages/BuildingData/BuildingData';
import Dashboard from './pages/Dashboard/Dashboard';
import Utilities from './pages/Reports/Utilities/Utilities'
import HVACEfficiency from './pages/Reports/HVACEfficiency/HVACEfficiency'
import Comfort from './pages/Reports/Comfort/Comfort'
import Exports from './pages/Reports/Exports/Exports'
import { CssBaseline } from '@mui/material';

//const LoginContainer = React.lazy(() => import("./pages/Login/Container"));
//const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
