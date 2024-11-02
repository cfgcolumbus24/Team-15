import * as React from "react";
import { useState } from "react"; // Import useState to manage alert state
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import axios from 'axios';

const LoginFinal = () => {
  const navigate = useNavigate();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success'); // Type for severity
  const url = 'http://localhost:8080/api/v1/'
  const handleLogin = () => {
    const usernameBox = document.getElementsByName("username")[0] as HTMLInputElement;
    const firstName = usernameBox.value;
    console.log(firstName)
    const passwordBox = document.getElementsByName("password")[0] as HTMLInputElement;
    const lastName = passwordBox.value;
    axios.post(url + 'clinician/login', {firstName: firstName, lastName: lastName} )
        .then(response => {
           setSnackbarMessage('Login successful!');
           setSnackbarSeverity('success');
           setOpenSnackbar(true);
           navigate("/Home", { state: { message: 'Login successful!', severity: 'success' } });
        }).catch(error => {
            console.log(error)
            if(error.response.status === 401) {
                setSnackbarMessage('Invalid login credentials!');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            } else {
                alert("Something went wrong, try again!")
            }
            console.error(error);
        });
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return; 
    }
    setOpenSnackbar(false);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", 
        justifyContent: "flex-start", 
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px", 
        background: "linear-gradient(135deg, #f5f5f5, #e0f7fa)"
      }}
    >
      <CssBaseline />
      <Typography
        level="h2"
        component="h1"
        sx={{ 
          fontWeight: "bold", 
          fontSize: "2.5rem", 
          mb: 2 
        }}
      >
        Netcare
      </Typography>
      <Sheet
        sx={{
          width: 500, 
          height: 450, 
          mx: "auto",
          my: 0, 
          py: 4,
          px: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "md",
          boxShadow: "lg",
          marginTop: "160px", 
        }}
        variant="outlined"
      >
        <Typography level="body-md" textAlign="center" sx={{ mb: -1.5, fontWeight: "bold", fontSize: "2.2rem" }}>
          Welcome!
        </Typography>
        <Typography level="body-md" textAlign="center" sx={{ mb: 3 }}>
          Please sign in to continue.
        </Typography>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            type="text"
            placeholder="username"
            sx={{
              height: '48px', 
              fontSize: '1rem', 
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            sx={{
              height: '48px', 
              fontSize: '1rem', 
            }}
          />
        </FormControl>
        <Button 
          sx={{
            mt: 2, 
            height: '48px',
            fontSize: '1rem',
          }} 
          onClick={handleLogin}
        >
          Log in 
        </Button>
      </Sheet>
          
      {/* Snackbar for alerts */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }} style={{ backgroundColor: snackbarSeverity === 'success' ? '#4caf50' : '#f44336' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </main>
  );
}

export default LoginFinal;
