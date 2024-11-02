import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, IconButton, Button, Grid } from '@mui/material';
import { blue, grey, pink, purple, teal } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import Dropdown from './list.tsx';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface LocationState {
  data: any;
  command: string;
}

const PlainText: React.FC = () => {
  const location = useLocation();
  const { data, command } = location.state as LocationState;
  const [viewMode, setViewMode] = useState <'table' | 'pie' | 'bar'>('table');

  const COLORS = [blue[400], pink[400], purple[400], teal[400], grey[400]];

  const canShowPieChart = (data: any) => {
    if (!Array.isArray(data)) return false;
    return data.every(item => Object.keys(item).length === 2);
  };

  const formatDataForCharts = (data: any[]) => {
    if (!Array.isArray(data)) return [];
    
    return data.map(item => {
      const entries = Object.entries(item);
      const value = entries[1][1];
      return {
        name: String(entries[0][1]),
        value: typeof value === 'string' ? parseFloat(value) || 1 : Number(value) || 1
      };
    });
  };

  const renderChartControls = () => {
    const chartData = Array.isArray(data);
    return (
      <Box sx={{ mb: 2, display: 'flex', gap: 1, justifyContent: 'center' }}>
        <Button
          variant={viewMode === 'table' ? 'contained' : 'outlined'}
          startIcon={<TableChartIcon />}
          onClick={() => setViewMode('table')}
          sx={{ bgcolor: viewMode === 'table' ? blue[600] : 'white' }}
        >
          Table
        </Button>
        {chartData && (
          <>
            <Button
              variant={viewMode === 'bar' ? 'contained' : 'outlined'}
              startIcon={<BarChartIcon />}
              onClick={() => setViewMode('bar')}
              sx={{ bgcolor: viewMode === 'bar' ? blue[600] : 'white' }}
            >
              Bar Chart
            </Button>
            {canShowPieChart(data) && (
              <Button
                variant={viewMode === 'pie' ? 'contained' : 'outlined'}
                startIcon={<PieChartIcon />}
                onClick={() => setViewMode('pie')}
                sx={{ bgcolor: viewMode === 'pie' ? blue[600] : 'white' }}
              >
                Pie Chart
              </Button>
            )}
          </>
        )}
      </Box>
    );
  };

  const renderVisualization = () => {
    if (!Array.isArray(data)) {
      return (
        <Paper elevation={3} sx={{ p: 2, backgroundColor: 'white' }}>
          <Typography variant="body1">
            {JSON.stringify(data, null, 2)}
          </Typography>
        </Paper>
      );
    }

    const chartData = formatDataForCharts(data);

    switch (viewMode) {
      case 'pie':
        return (
          <Box height={400}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        );

      case 'bar':
        return (
          <Box height={400}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={blue[400]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        );

      default:
        return data.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 2,
              mb: 2,
              backgroundColor: 'white',
              '&:hover': {
                transform: 'scale(1.01)',
                transition: 'transform 0.2s'
              }
            }}
          >
            <Typography variant="body1">
              {Object.entries(item).map(([key, value]) => (
                <span key={key}>{`${key}: ${value} | `}</span>
              ))}
            </Typography>
          </Paper>
        ));
    }
  };

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
          Command Results
        </Typography>
        <Typography variant="subtitle1">
          Results for: {command}
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

      <Box sx={{ padding: 3 }}>
        {renderChartControls()}
        {renderVisualization()}
      </Box>
    </Box>
  );
};

export default PlainText;