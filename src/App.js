import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import Login from './pages/Login/Login';
import Alerts from './pages/Alerts/Container';
import BuildingData from './pages/BuildingData/BuildingData';
import Dashboard from './pages/Dashboard/Dashboard';
import Utilities from './pages/Reports/Utilities/Utilities'
import HVACEfficiency from './pages/Reports/HVACEfficiency/HVACEfficiency'
import Comfort from './pages/Reports/Comfort/Comfort'
import Exports from './pages/Reports/Exports/Exports'
import SessionTimeout from './common/SessionTimeout';
import { SESSION_TIMEOUT } from "./common/Constants";
import ProtectedAuth from './common/ProtectedAuth';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
        preventDuplicate="true">
        <CssBaseline />
        <Routes>
          <Route index path="/" element={<ProtectedAuth><Dashboard /></ProtectedAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<ProtectedAuth><Dashboard /></ProtectedAuth>} />
          <Route path="alerts" element={<ProtectedAuth><Alerts /></ProtectedAuth>} />
          <Route path="buildingData" element={<ProtectedAuth><BuildingData /></ProtectedAuth>} />
          <Route path="utilities" element={<ProtectedAuth><Utilities /></ProtectedAuth>} />
          <Route path="HVACEfficiency" element={<ProtectedAuth><HVACEfficiency /></ProtectedAuth>} />
          <Route path="comfort" element={<ProtectedAuth><Comfort /></ProtectedAuth>} />
          <Route path="exports" element={<ProtectedAuth><Exports /></ProtectedAuth>} />
        </Routes>
        <SessionTimeout sessionTimeoutDuration={SESSION_TIMEOUT} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
