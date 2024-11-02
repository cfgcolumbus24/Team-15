import React, { useRef } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import PatientInfo from './patient-info.tsx';
import { useParams } from 'react-router-dom';
import { blue, grey } from '@mui/material/colors';
import VitalSigns from './vital-signs.tsx';
import Symptoms from './symptoms.tsx';
import MedicalHistory from './medical-history.tsx';
import Dropdown from './list.tsx';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { usePDF } from 'react-to-pdf';

function Patient() {
  const { patientName } = useParams();
  useRef(null);
  const { toPDF, targetRef } = usePDF({ filename: `${patientName}-medical-chart.pdf` });

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
          Patient Information
        </Typography>
        <Typography variant="subtitle1">
          A detailed breakdown of a single patient's data
        </Typography>

        {/* Icons for Settings, Profile, and PDF Download */}
        <Box position="absolute" top={16} right={16} display="flex" gap={2}>
          <IconButton
            onClick={() => toPDF()}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: blue[300],
                transform: 'scale(1.1)',
              },
              transition: 'transform 0.2s'
            }}
          >
            <PictureAsPdfIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: blue[300] } }}>
            <SettingsIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: blue[300] } }}>
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Content to be included in PDF */}
      <Container ref={targetRef} maxWidth="lg" sx={{ py: 4, backgroundColor: grey[100] }}>
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