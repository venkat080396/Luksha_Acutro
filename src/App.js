import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Alerts from './pages/Alerts/Alerts';
import BuildingData from './pages/BuildingData/BuildingData';
import Dashboard from './pages/Dashboard/Dashboard';
//const LoginContainer = React.lazy(() => import("./pages/Login/Container"));
//const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="buildingData" element={<BuildingData />} />
    </Routes>
  );
}

export default App;
