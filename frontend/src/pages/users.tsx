// import React, { useState } from 'react';
// import { Box, TextField, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const Patients: React.FC = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [users] = useState<User[]>([
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Smith', age: 25 },
//     { id: 3, name: 'Alice Johnson', age: 35 },
//   ]);

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handlePatientClick = (userId: number) => {
//     navigate(`/patient/${userId}`);
//   };

//   return (
//     <Box sx={{ padding: 3, backgroundColor: 'white', height: '100vh' }}>
//       <Typography variant="h4" gutterBottom>
//         Netcare Access
//       </Typography>
//       <TextField
//         label="Search for a patient..."
//         variant="outlined"
//         fullWidth
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         sx={{ marginBottom: 3 }}
//       />
//       <Box>
//         {filteredUsers.map((user) => (
//           <Card
//             key={user.id}
//             sx={{ marginBottom: 2, padding: 2, borderRadius: 2, cursor: 'pointer', backgroundColor: '#e3f2fd' }}
//             onClick={() => handlePatientClick(user.id)}
//           >
//             <CardContent>
//               <Typography variant="h6">{user.name}</Typography>
//               <Typography color="textSecondary">Age: {user.age}</Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Patients;

import React, { useState, useEffect } from 'react';
import { Box, TextField, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Patient {
  id: number;
  name: string;
  age: number;
  height: string;
  weight: number;
  dob: string;
  race: string;
  sex: string;
  income: string;
  history: string;
  gender: string;
}

const Patients: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/patients/all');
      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePatientClick = (patientId: number) => {
    navigate(`/patient/${patientId}`);
  };

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
        {filteredPatients.map((patient) => (
          <Card
            key={patient.id}
            sx={{ marginBottom: 2, padding: 2, borderRadius: 2, cursor: 'pointer', backgroundColor: '#e3f2fd' }}
            onClick={() => handlePatientClick(patient.id)}
          >
            <CardContent>
              <Typography variant="h6">{patient.name}</Typography>
              <Typography color="textSecondary">Age: {patient.age}</Typography>
              <Typography color="textSecondary">Gender: {patient.gender}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Patients;