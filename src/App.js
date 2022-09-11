import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import { Login, Alerts, BuildingData, Dashboard, Utilities, HVACEfficiency, Comfort, Exports } from './pages';
import { SessionTimeout } from './common/SessionTimeout';
import { ProtectedAuth } from './common/utils';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
        preventDuplicate='true'>
        <CssBaseline />
        <Routes>
          <Route index path='/' element={<ProtectedAuth><Dashboard /></ProtectedAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<ProtectedAuth><Dashboard /></ProtectedAuth>} />
          <Route path='alerts' element={<ProtectedAuth><Alerts /></ProtectedAuth>} />
          <Route path='buildingData' element={<ProtectedAuth><BuildingData /></ProtectedAuth>} />
          <Route path='utilities' element={<ProtectedAuth><Utilities /></ProtectedAuth>} />
          <Route path='HVACEfficiency' element={<ProtectedAuth><HVACEfficiency /></ProtectedAuth>} />
          <Route path='comfort' element={<ProtectedAuth><Comfort /></ProtectedAuth>} />
          <Route path='exports' element={<ProtectedAuth><Exports /></ProtectedAuth>} />
        </Routes>
        <SessionTimeout sessionTimeoutDuration={process.env.REACT_APP_SESSION_TIMEOUT} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
