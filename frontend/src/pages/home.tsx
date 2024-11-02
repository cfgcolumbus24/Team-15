import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
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
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { pink, blue, green, orange, purple, grey } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';

// Sample hardcoded data
const totalPatients = 1200;
const patientProgressData = [
  { month: 'Jan', improved: 70, stable: 25, worsened: 5 },
  { month: 'Feb', improved: 72, stable: 22, worsened: 6 },
  { month: 'Mar', improved: 75, stable: 20, worsened: 5 },
  { month: 'Apr', improved: 78, stable: 18, worsened: 4 },
  { month: 'May', improved: 80, stable: 15, worsened: 5 },
  { month: 'Jun', improved: 82, stable: 13, worsened: 5 },
  { month: 'Jul', improved: 85, stable: 10, worsened: 5 },
  { month: 'Aug', improved: 88, stable: 8, worsened: 4 },
  { month: 'Sep', improved: 90, stable: 6, worsened: 4 },
  { month: 'Oct', improved: 92, stable: 5, worsened: 3 },
  { month: 'Nov', improved: 95, stable: 3, worsened: 2 },
  { month: 'Dec', improved: 97, stable: 2, worsened: 1 },
];

const upcomingAppointments = [
  { name: 'John Doe', date: '2024-11-02', time: '10:00 AM', urgency: 'High', status: 'Confirmed' },
  { name: 'Jane Smith', date: '2024-11-03', time: '1:00 PM', urgency: 'Low', status: 'Pending' },
  { name: 'George Brown', date: '2024-11-04', time: '2:30 PM', urgency: 'Medium', status: 'Cancelled' },
  { name: 'Emily White', date: '2024-11-05', time: '9:00 AM', urgency: 'High', status: 'Confirmed' },
];

const Home: React.FC = () => {
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
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Netcare Clinician Dashboard
        </Typography>
        <Typography variant="subtitle1">
          A comprehensive view of patient statistics and trends
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {/* Upcoming Appointments Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, height: '100%' }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Upcoming Appointments
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Urgency</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {upcomingAppointments.map((appointment, index) => (
                      <TableRow key={index}>
                        <TableCell>{appointment.name}</TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.urgency}</TableCell>
                        <TableCell>{appointment.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Patients Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Avatar sx={{ bgcolor: purple[500], width: 64, height: 64, mr: 2 }}>
                <PersonIcon sx={{ fontSize: 40, color: 'white' }} />
              </Avatar>
              <Box textAlign="left">
                <Typography variant="h6" color="text.secondary">
                  Total Patients
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  {totalPatients}
                </Typography>
              </Box>
            </CardContent>
            <CardContent sx={{ padding: 3, textAlign: 'center', bgcolor: grey[200], borderRadius: 0, flexGrow: 1 }}>
              <Typography variant="body2" color="text.secondary">
                This number reflects the total patients currently under care, highlighting our commitment to community health.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Patient Progress Card */}
      <Grid item xs={12} mt={4} display="flex" justifyContent="center">
        <Card sx={{ boxShadow: 4, borderRadius: 3, width: '70%' }}>
          <CardContent sx={{ padding: 3 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Patient Progress Over Time
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <LineChart width={600} height={300} data={patientProgressData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="improved" stroke={green[500]} />
                <Line type="monotone" dataKey="stable" stroke={orange[500]} />
                <Line type="monotone" dataKey="worsened" stroke={pink[500]} />
              </LineChart>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', justifyContent: 'center' }}>
              Monthly patient progress trends
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Footer */}
      <Box textAlign="center" mt={4}>
        <Typography variant="caption" color="text.secondary">
          Netcare 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
