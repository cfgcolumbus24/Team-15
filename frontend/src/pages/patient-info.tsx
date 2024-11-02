import React, { useEffect, useState } from 'react';
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
  patientName: string;
}

interface Patient {
  id: number;
  name: string;
  age: number;
  height: string;
  weight: number;
  dob: string;
  race: string;
  sex: string;
  income: string;
  history: string;
  gender: string;
}

export default function PatientInfo({ patientName }: PatientInfoProps) {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/patients/${patientName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch patient');
        }
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };

    if (patientName) {
      fetchPatient();
    }
  }, [patientName]);

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: grey[100] }}>
      <Typography variant="h6" gutterBottom color={blue[800]}>
        Patient Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            value={patient?.name || ''}
            placeholder="Patient name"
            variant="outlined"
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Age"
            value={patient?.age || ''}
            placeholder="Age"
            variant="outlined"
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Height"
            value={patient?.height || ''}
            placeholder="Height"
            variant="outlined"
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Weight"
            value={patient?.weight || ''}
            placeholder="Weight"
            variant="outlined"
            InputProps={{ readOnly: true }}
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
            value={patient?.gender || ''}
            placeholder="Gender"
            variant="outlined"
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Race"
            value={patient?.race || ''}
            placeholder="Race"
            variant="outlined"
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Current health status"
            value={patient?.history || ''}
            placeholder="Describe current health status"
            variant="outlined"
            InputProps={{ readOnly: true }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}