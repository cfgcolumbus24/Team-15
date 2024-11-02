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



// VitalSigns Component
export default function VitalSigns() {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: grey[100] }}>
      <Typography variant="h6" gutterBottom color={blue[800]}>
        Vital Signs
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: blue[50] }}>
              <TableCell color="inherit">Temperature</TableCell>
              <TableCell color="inherit">Pulse</TableCell>
              <TableCell color="inherit">Respiratory rate</TableCell>
              <TableCell color="inherit">Blood pressure</TableCell>
              <TableCell color="inherit">Oxygen saturation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField fullWidth placeholder="°F" variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              </TableCell>
              <TableCell>
                <TextField fullWidth placeholder="BPM" variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              </TableCell>
              <TableCell>
                <TextField fullWidth placeholder="breaths/min" variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              </TableCell>
              <TableCell>
                <TextField fullWidth placeholder="mmHg" variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              </TableCell>
              <TableCell>
                <TextField fullWidth placeholder="%" variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}