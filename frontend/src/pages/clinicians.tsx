import React, { useEffect, useState } from 'react';
import Dropdown from './list.tsx';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  TextField, // Import TextField for the search input
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { blue, grey, purple, teal, orange } from '@mui/material/colors';
import axios from 'axios';

const colors = [teal[500], orange[500], purple[500], blue[500]];

const ClinicianOverview: React.FC = () => {
  const [clinicianData, setClinicianData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    const url = 'http://localhost:8080/api/v1/';
    const fetchClinis = async () => {
      try {
        const response = await axios.get(url + 'clinician/all');
        console.log(response);
        let count = 0;
        let clinis = [];
        response.data.forEach((clini) => {
          if (count < 50) {
            clinis.push({name: clini.firstName + ' ' + clini.lastName, position: clini.specialty, color: colors[count % colors.length], address: clini.address })
            count +=1
          }
        });
        setClinicianData(clinis);
      } catch (error) {
        alert("Error!");
        console.error(error);
      }
    };
    fetchClinis();
  }, []);

  // Filter clinicians based on the search term
  const filteredClinicians = clinicianData.filter((clinician) =>
    clinician.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={0} bgcolor={grey[100]} minHeight="100vh">
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

      {/* Search Bar */}
      <Box p={3} bgcolor={grey[100]}>
        <TextField
          label="Search Clinicians"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }} // Add margin bottom for spacing
        />
      </Box>

      <Box p={3} bgcolor={grey[100]} minHeight="100vh">
        <Grid container spacing={3} justifyContent="center">
          {filteredClinicians.map((clinician, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  boxShadow: 4,
                  borderRadius: 3,
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
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
                  <Typography variant="subtitle2" color="text.secondary">
                    {clinician.address}
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
