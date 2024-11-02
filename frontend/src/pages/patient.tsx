import React from 'react';
import { Container, Typography } from '@mui/material';
import PatientInfo from './patient-info.tsx';
import { useParams } from 'react-router-dom';
import { blue, grey } from '@mui/material/colors';
import VitalSigns from './vital-signs.tsx';
import Symptoms from './symptoms.tsx';
import MedicalHistory from './medical-history.tsx';

function Patient() {
  const { id } = useParams();

  return (
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: grey[100] }}>
      <Typography variant="h4" gutterBottom color={blue[800]}>
        Medical Chart
      </Typography>
      <PatientInfo patientId={id} />
      <VitalSigns />
      <Symptoms />
      <MedicalHistory />
    </Container>
  );
}