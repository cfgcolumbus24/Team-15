import React from 'react';
import {
  Paper,
  Typography,
  TextField
} from '@mui/material';
import { blue, grey } from '@mui/material/colors';



// MedicalHistory Component
export default function MedicalHistory() {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: grey[100] }}>
      <Typography variant="h6" gutterBottom color={blue[800]}>
        Medical History
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        placeholder="Enter medical history"
        variant="outlined"
        sx={{ backgroundColor: 'white', borderRadius: 1 }}
      />
    </Paper>
  );
}
