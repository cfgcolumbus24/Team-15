import * as React from "react";
import { useState } from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginFinal = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const url = 'http://10.250.254.224:8080/api/v1/';

  const handleLogin = () => {

    console.log(firstName, lastName)
    axios.post(url + 'clinician/login', {firstName: firstName, lastName: lastName} )
    .then(response => {
       console.log(response.data);
       alert("Sucess!");
       navigate('/home')
    }).catch(error => {
        console.log(error.response.status)
        if(error.response.status === 401) {
            alert("Invalid Login Credentials")
        } else {
            alert("Something went wrong, try again!")
        }
        console.error(error);
    });

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
        <Typography level="body-md" textAlign="center" sx={{ mb: -1.5, fontWeight: "bold",  fontSize: "2.2rem"}}>
          Welcome!
        </Typography>
        <Typography level="body-md" textAlign="center" sx={{ mb: 3 }}>
          Please sign in to continue.
        </Typography>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            name="First Name"
            type="text"
            placeholder="john doe"
            sx={{
              height: '48px', 
              fontSize: '1rem', 
            }}
            onChange={(e) => {setFirstName(e.target.value)}}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            type="text"
            placeholder="Last Name"
            sx={{
              height: '48px', 
              fontSize: '1rem', 
            }}
            onChange={(e) => {setLastName(e.target.value)}}
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
    </main>
  );
}

export default LoginFinal;
