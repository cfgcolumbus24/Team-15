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
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { blue, grey, pink, purple, teal } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Sample data for charts
const ageData = [
  { name: '18-25', value: 300 },
  { name: '26-35', value: 500 },
  { name: '36-45', value: 200 },
  { name: '46-60', value: 150 },
  { name: '60+', value: 100 },
];

const raceData = [
  { name: 'White', value: 600 },
  { name: 'Black', value: 300 },
  { name: 'Asian', value: 200 },
  { name: 'Hispanic', value: 100 },
  { name: 'Other', value: 50 },
];

const genderData = [
  { name: 'Male', value: 600 },
  { name: 'Female', value: 550 },
];

const incomeData = [
  { name: 'Low', value: 200 },
  { name: 'Lower-Middle', value: 300 },
  { name: 'Upper-Middle', value: 350 },
  { name: 'High', value: 200 },
];

// Updated sample data for health conditions as a frequency chart
const healthData = [
  { name: 'Diabetes', frequency: 400 },
  { name: 'Hypertension', frequency: 300 },
  { name: 'Asthma', frequency: 200 },
  { name: 'Cancer', frequency: 150 },
  { name: 'Heart Disease', frequency: 100 },
];

const Demographics: React.FC = () => {
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
        <Typography variant="h3" fontWeight="bold">
          Netcare Demographics Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Analyzing Patient Demographics and Distribution
        </Typography>

        {/* Dropdown for toggling options */}
        <Dropdown />

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

      {/* Demographics Cards */}
      <Grid container spacing={3} justifyContent="center">
        {/* Age Distribution Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Age Distribution
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={ageData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill={blue[400]} label>
                      {ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={[teal[400], pink[300], purple[400], blue[500], grey[400]][index % 5]} />
                      ))}
                    </Pie>
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                    <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Race Distribution Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Race Distribution
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={raceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill={blue[400]} label>
                      {raceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={[blue[500], grey[400], purple[400], teal[300], pink[300]][index % 5]} />
                      ))}
                    </Pie>
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                    <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Gender Distribution Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Gender Distribution
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill={blue[400]} label>
                      {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={[pink[400], blue[400]][index % 2]} />
                      ))}
                    </Pie>
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                    <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Income Level Distribution Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Income Level Distribution
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis dataKey="name" label={{ value: 'Income Level', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Number of People', angle: -90, position: 'insideLeft', offset: -2 }} />
                    <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                    <Bar dataKey="value" fill={teal[400]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Health Conditions Frequency Chart */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Health Conditions Frequency
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={healthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis dataKey="name" label={{ value: 'Health Condition', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: -2 }} />
                    <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                    <Bar dataKey="frequency" fill={purple[400]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demographics;
