import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography, Grid, Alert, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const FaultReporting = () => {
  const [formData, setFormData] = useState({
    faultType: '',
    location: '',
    description: '',
    severity: 'medium',
    contactPerson: '',
    contactPhone: '',
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
      await axios.post('http://localhost:5000/api/faults', formData);
      setSuccess(true);
      setFormData({
        faultType: '',
        location: '',
        description: '',
        severity: 'medium',
        contactPerson: '',
        contactPhone: '',
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Error reporting fault');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Report Fault</Typography>
        {success && <Alert severity="success" sx={{ mb: 2 }}>Fault reported successfully!</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Fault Type</InputLabel>
                <Select
                  name="faultType"
                  value={formData.faultType}
                  onChange={handleChange}
                  label="Fault Type"
                  required
                >
                  <MenuItem value="transformer">Transformer Fault</MenuItem>
                  <MenuItem value="line">Power Line Fault</MenuItem>
                  <MenuItem value="meter">Meter Fault</MenuItem>
                  <MenuItem value="substation">Substation Fault</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
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
              <FormControl fullWidth>
                <InputLabel>Severity</InputLabel>
                <Select
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  label="Severity"
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="critical">Critical</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Person"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Phone"
                name="contactPhone"
                value={formData.contactPhone}
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
                Report Fault
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default FaultReporting;
