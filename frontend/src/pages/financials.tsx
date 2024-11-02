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
import { blue, grey, pink, purple, teal, green, red } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Sample financial data
const revenueData = [
  { name: 'Consultation', value: 50000 },
  { name: 'Surgery', value: 30000 },
  { name: 'Pharmacy', value: 20000 },
  { name: 'Lab Tests', value: 15000 },
];

const expenseData = [
  { name: 'Staff Salaries', value: 35000 },
  { name: 'Equipment', value: 15000 },
  { name: 'Rent', value: 10000 },
  { name: 'Utilities', value: 5000 },
  { name: 'Supplies', value: 8000 },
];

const profitData = [
  { name: 'Revenue', value: 120000 },
  { name: 'Expenses', value: 73000 },
];

const profitMarginData = [
  { name: 'Q1', profitMargin: 25 },
  { name: 'Q2', profitMargin: 30 },
  { name: 'Q3', profitMargin: 20 },
  { name: 'Q4', profitMargin: 35 },
];

const Financials: React.FC = () => {
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
          Financial Overview
        </Typography>
        <Typography variant="subtitle1">
          Analyzing Revenue, Expenses, and Profit Margins
        </Typography>

        <Box position="absolute" top={16} right={16} display="flex" gap={2}>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: blue[300] } }}>
            <SettingsIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton sx={{ color: 'white', '&:hover': { backgroundColor: blue[300] } }}>
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>

      <Box p={3} bgcolor={grey[100]} minHeight="100vh">
        {/* Financials Cards */}
        <Grid container spacing={3} justifyContent="center">
          {/* Revenue Distribution Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Revenue Breakdown
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={revenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill={green[400]} label>
                        {revenueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={[blue[500], teal[400], pink[300], purple[400]][index % 4]} />
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

          {/* Expense Distribution Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Expense Breakdown
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={expenseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill={red[400]} label>
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={[red[300], pink[300], grey[400], teal[300], purple[400]][index % 5]} />
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

          {/* Profit Overview Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Profit Overview
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={profitData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <XAxis dataKey="name" label={{ value: 'Type', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft', offset: -2 }} />
                      <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                      <Bar dataKey="value" fill={teal[400]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Quarterly Profit Margins Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Quarterly Profit Margins
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={profitMarginData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <XAxis dataKey="name" label={{ value: 'Quarter', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Profit Margin (%)', angle: -90, position: 'insideLeft', offset: -2 }} />
                      <Tooltip wrapperStyle={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }} />
                      <Bar dataKey="profitMargin" fill={blue[400]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Financials;