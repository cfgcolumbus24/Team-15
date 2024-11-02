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


// Symptoms Component
export default function Symptoms() {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: grey[100] }}>
      <Typography variant="h6" gutterBottom color={blue[800]}>
        Symptoms / Chief Complaint
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={5}
        placeholder="Enter symptoms and chief complaints"
        variant="outlined"
        sx={{ backgroundColor: 'white', borderRadius: 1 }}
      />
    </Paper>
  );
}