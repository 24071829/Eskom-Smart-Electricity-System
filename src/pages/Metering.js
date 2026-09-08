import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import axios from 'axios';

const Metering = () => {
  const [meterData, setMeterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMeterData();
  }, []);

  const fetchMeterData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/meters');
      setMeterData(response.data);
    } catch (error) {
      console.error('Error fetching meter data:', error);
    }
  };

  const filteredMeters = meterData.filter(meter =>
    meter.meterNumber?.includes(searchTerm) || meter.customerName?.includes(searchTerm)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Smart Metering</Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="Search by Meter Number or Customer Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Paper>

      <Grid container spacing={2}>
        {filteredMeters.map((meter) => (
          <Grid item xs={12} sm={6} md={4} key={meter.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{meter.customerName}</Typography>
                <Typography color="textSecondary">Meter: {meter.meterNumber}</Typography>
                <Typography sx={{ mt: 2 }}>Current Reading: {meter.currentReading} kWh</Typography>
                <Typography>Previous Reading: {meter.previousReading} kWh</Typography>
                <Typography>Consumption: {meter.consumption} kWh</Typography>
                <Typography sx={{ mt: 1 }}>Status: <strong>{meter.status}</strong></Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Metering;
