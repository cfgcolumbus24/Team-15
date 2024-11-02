import React, { useState, useEffect } from 'react';
import { Box, TextField, Card, CardContent, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';
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
  const [minAgeFilter, setMinAgeFilter] = useState<number | ''>('');
  const [maxAgeFilter, setMaxAgeFilter] = useState<number | ''>('');
  const [genderFilter, setGenderFilter] = useState<string>('any'); // Set default to 'any'
  const [raceFilter, setRaceFilter] = useState<string>('');
  const [incomeFilter, setIncomeFilter] = useState<string>('');
  const [historyFilter, setHistoryFilter] = useState<string>('');

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

  const filteredPatients = patients.filter(patient => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesSearchTerm =
      patient.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.age.toString().includes(lowerCaseSearchTerm) ||
      patient.gender.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.race.toLowerCase().includes(lowerCaseSearchTerm) ||
      patient.sex.toLowerCase().includes(lowerCaseSearchTerm);

    const matchesMinAgeFilter =
      minAgeFilter === '' || patient.age >= minAgeFilter; // Changed to >= for minimum age

    const matchesMaxAgeFilter =
      maxAgeFilter === '' || patient.age <= maxAgeFilter; // New maximum age filter

    const matchesGenderFilter =
      genderFilter === 'any' || patient.gender.toLowerCase() === genderFilter.toLowerCase(); // Allow any

    const matchesRaceFilter =
      raceFilter === '' || patient.race.toLowerCase() === raceFilter.toLowerCase();

    const matchesIncomeFilter =
      incomeFilter === '' || patient.income.toLowerCase().includes(incomeFilter.toLowerCase());

    const matchesHistoryFilter =
      historyFilter === '' || patient.history.toLowerCase().includes(historyFilter.toLowerCase());

    return matchesSearchTerm && matchesMinAgeFilter && matchesMaxAgeFilter && matchesGenderFilter &&
           matchesRaceFilter && matchesIncomeFilter && matchesHistoryFilter;
  });

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
        <Box display="flex" gap={2} marginBottom={3}>
          <TextField
            label="Min Age"
            type="number"
            variant="outlined"
            value={minAgeFilter}
            onChange={(e) => setMinAgeFilter(e.target.value ? Number(e.target.value) : '')}
            sx={{ width: '150px' }}
          />
          <TextField
            label="Max Age"
            type="number"
            variant="outlined"
            value={maxAgeFilter}
            onChange={(e) => setMaxAgeFilter(e.target.value ? Number(e.target.value) : '')}
            sx={{ width: '150px' }}
          />
          <FormControl variant="outlined" sx={{ width: '150px' }}>
            <InputLabel>Gender</InputLabel>
            <Select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              label="Gender"
            >
              <MenuItem value="any">Any</MenuItem> {/* Default option */}
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Race"
            variant="outlined"
            value={raceFilter}
            onChange={(e) => setRaceFilter(e.target.value)}
            sx={{ width: '150px' }}
          />
          <TextField
            label="Income"
            variant="outlined"
            value={incomeFilter}
            onChange={(e) => setIncomeFilter(e.target.value)}
            sx={{ width: '150px' }}
          />
          <TextField
            label="History"
            variant="outlined"
            value={historyFilter}
            onChange={(e) => setHistoryFilter(e.target.value)}
            sx={{ width: '150px' }}
          />
          <Button variant="contained" color="primary" onClick={() => {
            setMinAgeFilter('');
            setMaxAgeFilter('');
            setGenderFilter('any');
            setRaceFilter('');
            setIncomeFilter('');
            setHistoryFilter('');
          }}>
            Reset Filters
          </Button>
        </Box>
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
                <Typography color="textSecondary">Race: {patient.race}</Typography>
                <Typography color="textSecondary">Sex: {patient.sex}</Typography>
                <Typography color="textSecondary">Income: {patient.income}</Typography>
                <Typography color="textSecondary">History: {patient.history}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Patients;
