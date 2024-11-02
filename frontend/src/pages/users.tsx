import React, { useState, useEffect } from 'react';
import { Box, TextField, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blue} from '@mui/material/colors';
import Dropdown from './list.tsx'; // Import the Dropdown component
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';


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

const Patients: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/patients/all');
      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePatientClick = (patientName: string) => {
    navigate(`/patient/${encodeURIComponent(patientName)}`);
  };

  return (
    <Box p={0} bgcolor="white" minHeight="100vh">
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
            Patient List
        </Typography>
        <Typography variant="subtitle1">
            A comprehensive list of all patients under clinic
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
    <Box sx={{ padding: 3, backgroundColor: 'white', height: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Patients
      </Typography>
      <TextField
        label="Search for a patient..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <Box>
        {filteredPatients.map((patient) => (
          <Card
            key={patient.id}
            sx={{ marginBottom: 2, padding: 2, borderRadius: 2, cursor: 'pointer', backgroundColor: '#e3f2fd' }}
            onClick={() => handlePatientClick(patient.name)}
          >
            <CardContent>
              <Typography variant="h6">{patient.name}</Typography>
              <Typography color="textSecondary">Age: {patient.age}</Typography>
              <Typography color="textSecondary">Gender: {patient.gender}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </Box>
  );
};

export default Patients;