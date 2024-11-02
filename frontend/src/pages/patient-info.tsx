

import React from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { blue, grey, pink, purple, teal } from '@mui/material/colors';

interface PatientInfoProps {
  patientId?: string;
}

// PatientInfo Component
export default function PatientInfo({ patientId }: PatientInfoProps) {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: grey[100] }}>
      <Typography variant="h6" gutterBottom color={blue[800]}>
        Patient Information (ID: {patientId})
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            placeholder="Patient name"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Age"
            placeholder="Age"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Contact number"
            placeholder="Contact number"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Insurance details"
            placeholder="Insurance information"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Gender"
            placeholder="Gender"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Current health status"
            placeholder="Describe current health status"
            variant="outlined"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}