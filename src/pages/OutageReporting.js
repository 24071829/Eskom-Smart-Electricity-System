import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography, Grid, Alert } from '@mui/material';
import axios from 'axios';

const OutageReporting = () => {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    affectedCustomers: '',
    estimatedDuration: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/outages', formData);
      setSuccess(true);
      setFormData({
        location: '',
        description: '',
        affectedCustomers: '',
        estimatedDuration: '',
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Error reporting outage');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Report Power Outage</Typography>
        {success && <Alert severity="success" sx={{ mb: 2 }}>Outage reported successfully!</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location/Area"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Affected Customers"
                name="affectedCustomers"
                type="number"
                value={formData.affectedCustomers}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Estimated Duration (minutes)"
                name="estimatedDuration"
                type="number"
                value={formData.estimatedDuration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Report Outage
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default OutageReporting;
