import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from './list.tsx';

interface LocationState {
  data: any;
  command: string;
}

const PlainText: React.FC = () => {
  const location = useLocation();
  const { data, command } = location.state as LocationState;

  const renderData = () => {
    if (Array.isArray(data)) {
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
    } else {
      return (
        <Paper 
          elevation={3} 
          sx={{ 
            p: 2, 
            backgroundColor: 'white',
            '&:hover': {
              transform: 'scale(1.01)',
              transition: 'transform 0.2s'
            }
          }}
        >
          <Typography variant="body1">
            {JSON.stringify(data, null, 2)}
          </Typography>
        </Paper>
      );
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
        {renderData()}
      </Box>
    </Box>
  );
};

export default PlainText;


