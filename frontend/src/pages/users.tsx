import React, { useState } from 'react';
import { Box, TextField, Card, CardContent, Typography } from '@mui/material';

interface User {
  id: number;
  name: string;
  age: number;
}

const Patients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users] = useState<User[]>([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 35 },
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3, backgroundColor: 'white', height: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Netcare Access
      </Typography>
      <TextField
        label="Search for a patient..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 3 }}
      />
      <Box>
        {filteredUsers.map((user) => (
          <a
            href={`https://example.com/user/${user.id}`} // Replace with the actual URL you want to redirect to
            key={user.id}
            style={{ textDecoration: 'none' }}
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" 
          >
            <Card
              sx={{ marginBottom: 2, padding: 2, borderRadius: 2, cursor: 'pointer', backgroundColor: '#e3f2fd' }}
            >
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography color="textSecondary">Age: {user.age}</Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default Patients;
