import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import OutageReporting from './pages/OutageReporting';
import FaultReporting from './pages/FaultReporting';
import Metering from './pages/Metering';
import CustomerManagement from './pages/CustomerManagement';
import Login from './pages/Login';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/outage-reporting" element={<OutageReporting />} />
          <Route path="/fault-reporting" element={<FaultReporting />} />
          <Route path="/metering" element={<Metering />} />
          <Route path="/customer-management" element={<CustomerManagement />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
