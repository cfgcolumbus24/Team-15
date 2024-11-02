import React from 'react';
import { Container, Typography, AppBar, Toolbar, Box } from '@mui/material';
import PatientInfo from './patient-info.tsx';
import { useParams } from 'react-router-dom';
import { blue, grey } from '@mui/material/colors';
import VitalSigns from './vital-signs.tsx';
import Symptoms from './symptoms.tsx';
import MedicalHistory from './medical-history.tsx';
import Dropdown from './list.tsx'; // Import the Dropdown component
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

function Patient() {
  const { patientName } = useParams();

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
        <Dropdown /> {/* Rendered with fixed positioning */}
        
        <Typography variant="h3" fontWeight="bold">
            Patient Information
        </Typography>
        <Typography variant="subtitle1">
            A detailed breakdown of a single patient's data
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
      <Container maxWidth="lg" sx={{ py: 4, backgroundColor: grey[100] }}>
        <Typography variant="h4" gutterBottom color={blue[800]} align="center">
          Medical Chart
        </Typography>
        <PatientInfo patientName={decodeURIComponent(patientName || '')} />
        <VitalSigns />
        <Symptoms />
        <MedicalHistory />
      </Container>
    </Box>
  );
}

export default Patient;
