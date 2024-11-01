import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Avatar,
} from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { pink, blue, green, orange } from '@mui/material/colors';

// Sample hardcoded data
const totalPatients = 1200;
const demographicsData = [
  { name: 'Male', value: 600 },
  { name: 'Female', value: 500 },
  { name: 'Other', value: 100 },
];
const raceData = [
  { name: 'White', value: 700 },
  { name: 'Black', value: 300 },
  { name: 'Asian', value: 100 },
  { name: 'Hispanic', value: 100 },
];
const patientProgressData = [
  { name: 'Improved', value: 75 },
  { name: 'Stable', value: 15 },
  { name: 'Worsened', value: 10 },
];
const treatmentData = [
  { treatment: 'Therapy', count: 400 },
  { treatment: 'Medication', count: 700 },
  { treatment: 'Surgery', count: 100 },
];

// Colors for the charts
const COLORS = [pink[400], blue[400], green[400], orange[400]];

const HomePage: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Clinician Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Total Patients Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Patients
              </Typography>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: blue[500], width: 56, height: 56 }}>
                  <Typography variant="h5" color="white">
                    {totalPatients}
                  </Typography>
                </Avatar>
                <Box ml={2}>
                  <Typography variant="h4" color="text.primary">
                    {totalPatients}
                  </Typography>
                  <Typography color="text.secondary">Patients</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Demographics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gender Demographics
              </Typography>
              <PieChart width={200} height={200}>
                <Pie
                  data={demographicsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                >
                  {demographicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Race Demographics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Race Demographics
              </Typography>
              <BarChart width={200} height={200} data={raceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={blue[400]} />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Patient Progress Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Patient Progress
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={2}>
                {patientProgressData.map((progress, index) => (
                  <Box key={index} textAlign="center">
                    <CircularProgress
                      variant="determinate"
                      value={progress.value}
                      size={80}
                      sx={{ color: COLORS[index % COLORS.length] }}
                    />
                    <Typography variant="caption" display="block">
                      {progress.name}
                    </Typography>
                    <Typography variant="body2">{progress.value}%</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Treatments Given Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Treatments Given
              </Typography>
              <BarChart width={200} height={200} data={treatmentData}>
                <XAxis dataKey="treatment" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill={green[400]} />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
