import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Eskom Smart System
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/outage-reporting">
            Outage Report
          </Button>
          <Button color="inherit" component={Link} to="/fault-reporting">
            Fault Report
          </Button>
          <Button color="inherit" component={Link} to="/metering">
            Metering
          </Button>
          <Button color="inherit" component={Link} to="/customer-management">
            Customers
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
