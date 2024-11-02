import React from 'react';
import Dropdown from './list.tsx';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { blue, grey, purple, teal, orange } from '@mui/material/colors';

// Sample data for clinician information
const clinicianData = [
  { name: 'Dr. Smith', position: 'Cardiologist', color: teal[500] },
  { name: 'Dr. Johnson', position: 'Pediatrician', color: orange[500] },
  { name: 'Dr. Lee', position: 'Dermatologist', color: purple[500] },
  { name: 'Dr. Brown', position: 'Neurologist', color: blue[500] },
];

const ClinicianOverview: React.FC = () => {
  return (
    <Box p={0} bgcolor={grey[100]} minHeight="100vh">
      {/* Header */}
      <Box
        textAlign="center"
        mb={4}
        p={3}
        sx={{
          background: `linear-gradient(135deg, ${blue[800]} 30%, ${blue[600]} 90%)`,
          color: 'white',
          borderRadius: 0,
          position: 'relative',
        }}
      >
        <Dropdown />
        
        <Typography variant="h3" fontWeight="bold">
          Clinician Overview
        </Typography>
        <Typography variant="subtitle1">
          Tracking Clinician Performance and Patient Interactions
        </Typography>

        {/* Icons for Settings and Profile */}
        <Box position="absolute" top={16} right={16} display="flex" gap={2}>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: blue[300] } }}>
            <SettingsIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: blue[300] } }}>
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>

      <Box p={3} bgcolor={grey[100]} minHeight="100vh">
        <Grid container spacing={3} justifyContent="center">
          {clinicianData.map((clinician, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card 
                sx={{ 
                  boxShadow: 4, 
                  borderRadius: 3, 
                  height: 200, // Set a fixed height for square shape
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: 'auto' // Center the card
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <AccountCircleIcon sx={{ fontSize: 60, color: clinician.color }} />
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {clinician.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {clinician.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Box textAlign="center" mt={4}>
          <Typography variant="caption" color="text.secondary">
            Netcare 2024
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClinicianOverview;
