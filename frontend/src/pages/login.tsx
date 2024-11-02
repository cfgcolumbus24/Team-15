import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";

const LoginFinal = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Home");
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
        <Typography level="body-md" textAlign="center" sx={{ mb: -1.5, fontWeight: "bold", fontSize: "2.2rem" }}>
          Welcome!
        </Typography>
        <Typography level="body-md" textAlign="center" sx={{ mb: 3 }}>
          Please sign in to continue.
        </Typography>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            name="username"
            type="text"
            placeholder="johndoe"
            placeholder="johndoe"
            sx={{
              height: '48px', 
              fontSize: '1rem', 
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
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
    </main>
  );
}

export default LoginFinal;