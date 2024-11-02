import React from 'react';
import Dropdown from './list.tsx';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { pink, blue, green, orange, purple, grey } from '@mui/material/colors';

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
  { month: 'Jan', improved: 70, stable: 25, worsened: 5 },
  { month: 'Feb', improved: 72, stable: 22, worsened: 6 },
  { month: 'Mar', improved: 75, stable: 20, worsened: 5 },
  { month: 'Apr', improved: 78, stable: 18, worsened: 4 },
  { month: 'May', improved: 80, stable: 15, worsened: 5 },
  { month: 'Jun', improved: 82, stable: 13, worsened: 5 },
  { month: 'Jul', improved: 85, stable: 10, worsened: 5 },
];
const treatmentData = [
  { treatment: 'Therapy', count: 400 },
  { treatment: 'Medication', count: 700 },
  { treatment: 'Surgery', count: 100 },
];
const satisfactionLevel = 82;
const upcomingAppointments = [
  { name: 'John Doe', date: '2024-11-02', urgency: 'High' },
  { name: 'Jane Smith', date: '2024-11-03', urgency: 'Low' },
  { name: 'George Brown', date: '2024-11-04', urgency: 'Medium' },
];

// Colors for the charts
const COLORS = [pink[400], blue[400], green[400], orange[400]];

const HomePage: React.FC = () => {
  return (
    <Box p={4} bgcolor={grey[100]} minHeight="100vh">
      {/* Header */}
      <Box textAlign="center" mb={4} p={2} bgcolor={blue[700]} color="white" borderRadius={2}>
        <Typography variant="h3" fontWeight="bold">
          Netcare Clinician Dashboard
        </Typography>
        <Typography variant="subtitle1">
          A comprehensive view of patient statistics and trends
        </Typography>
      </Box>

      {/*Code for the dropdown*/}
      <Box mb={4} textAlign="center">
        <Dropdown />
      </Box>

      <Grid container spacing={3}>
        {/* Total Patients Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Total Patients
              </Typography>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: purple[500], width: 64, height: 64, mr: 2 }}>
                  <Typography variant="h5" color="white">
                    {totalPatients}
                  </Typography>
                </Avatar>
                <Box>
                  <Typography variant="h4" fontWeight="bold" color="text.primary">
                    {totalPatients}
                  </Typography>
                  <Typography color="text.secondary">Patients Enrolled</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Gender Demographics Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
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
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
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
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Patient Progress Over Time
              </Typography>
              <LineChart width={300} height={200} data={patientProgressData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="improved" stroke={green[500]} />
                <Line type="monotone" dataKey="stable" stroke={orange[500]} />
                <Line type="monotone" dataKey="worsened" stroke={pink[500]} />
              </LineChart>
              <Typography variant="caption" color="text.secondary">
                Monthly patient progress trends
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Treatments Given Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Treatments Given
              </Typography>
              <BarChart width={200} height={200} data={treatmentData}>
                <XAxis dataKey="treatment" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill={orange[400]} />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Patient Satisfaction Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Patient Satisfaction
              </Typography>
              <Box textAlign="center" mt={2}>
                <CircularProgress
                  variant="determinate"
                  value={satisfactionLevel}
                  size={100}
                  thickness={5}
                  sx={{ color: green[500] }}
                />
                <Typography variant="h4" fontWeight="bold" color="text.primary" mt={1}>
                  {satisfactionLevel}%
                </Typography>
                <Typography color="text.secondary">Satisfaction Level</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Appointments Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Upcoming Appointments
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Urgency</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {upcomingAppointments.map((appointment, index) => (
                      <TableRow key={index}>
                        <TableCell>{appointment.name}</TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.urgency}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
