import React, {useEffect, useState} from 'react';
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
  LineChart,
  Line,
} from 'recharts';
import { blue, grey, pink, purple, teal } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
// Sample nonprofit financial data

const budgetAllocationData = [
  { category: 'Program Services', amount: 15000 },
  { category: 'Fundraising', amount: 20000 },
  { category: 'Philanthropy', amount: 27000 },
];



const Financials: React.FC = () => {
  const [monthlySpendingData, setMonthlySpendingData] = useState([
                                                                   { month: 'Jan', spending: 2300 },
                                                                   { month: 'Feb', spending: 7000 },
                                                                   { month: 'Mar', spending: 7200 },
                                                                   { month: 'Apr', spending: 5100 },
                                                                   { month: 'May', spending: 7500 },
                                                                   { month: 'Jun', spending: 6500 },
                                                                   { month: 'Jul', spending: 4700 },
                                                                   { month: 'Aug', spending: 8300 },
                                                                   { month: 'Sep', spending: 7600 },
                                                                   { month: 'Oct', spending: 2200 },
                                                                   { month: 'Nov', spending: 5400 },
                                                                   { month: 'Dec', spending: 8500 }
                                                                 ])
  const [budgetChangesData, setBudgetChangesData] = useState([
                                                                     { quarter: 'Q1', budget: 2300 },
                                                                     { quarter: 'Q2', budget: 7000 },
                                                                     { quarter: 'Q3', budget: 7200 },
                                                                     { quarter: 'Q4', budget: 5100 }
                                                                   ])
  const url = 'http://localhost:8080/api/v1/'
    useEffect(() => {
        const fetchBudget = async () => {
            const response = axios.get(url+ 'budgets/all').then(response => {
                console.log(response)
                let months = []
                let budget = 0
                let count = 0
                response.data.forEach((month) => {
                    months.push({month: month.month, spending: month.budget})
                    budget += month.budget;
                    console.log(budget, count)
                    if ((count + 1) % 3  === 0) {
                        let tempBudget = budgetChangesData;
                        tempBudget[Math.floor(count / 3)].budget = budget;
                        budget = 0
                        setBudgetChangesData(tempBudget)
                    }
                    count += 1
                })
                setMonthlySpendingData(months)
              }).catch(error => {
                 alert("Error!")
              console.error(error);
            });
        }
        fetchBudget();
      }, []);
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
          Netcare Financial Overview
        </Typography>
        <Typography variant="subtitle1">
          Tracking Budget Allocation, Spending, and Financial Health
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

      <Box p={3} bgcolor={grey[100]} minHeight="100vh">
        <Grid container spacing={3} justifyContent="center">
          {/* Top Row: Budget Allocation and Quarterly Budget Changes */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Budget Allocation
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie data={budgetAllocationData} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={80} fill={blue[400]} label>
                        {budgetAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={[purple[400], blue[500], teal[300]][index % 3]} />
                        ))}
                      </Pie>
                      <Legend layout="vertical" align="right" verticalAlign="middle" />
                      <Tooltip formatter={(value) => `$ ${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Quarterly Budget Changes
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={budgetChangesData} margin={{ top: 20, right: 50, left: 50, bottom: 20 }}>
                      <XAxis dataKey="quarter" label={{ value: 'Quarter', position: 'insideBottom', offset: -5 }} />
                      <YAxis 
                        label={{ value: 'Budget ($)', angle: -90, position: 'insideLeft', offset: -30 }}
                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                      />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Bar dataKey="budget" fill={teal[400]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Bottom Row: Monthly Spending Trend */}
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ boxShadow: 4, borderRadius: 3 }}>
              <CardContent sx={{ padding: 3 }}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Monthly Spending
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlySpendingData} margin={{ top: 20, right: 50, left: 50, bottom: 20 }}>
                      <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5 }} />
                      <YAxis 
                        label={{ value: 'Spending ($)', angle: -90, position: 'insideLeft', offset: -20 }}
                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                      />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Line type="monotone" dataKey="spending" stroke={pink[400]} strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
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

export default Financials;
