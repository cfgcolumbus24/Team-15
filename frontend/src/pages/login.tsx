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
        alignItems: "flex-start", // Align items to the left
        justifyContent: "flex-start", // Align items to the top
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px", // Add padding to the main container
      }}
    >
      <CssBaseline />
      <Typography
        level="h2"
        component="h1"
        sx={{ 
          fontWeight: "bold", 
          fontSize: "2.5rem", 
          mb: 2 // Margin below the title
        }}
      >
        Netcare
      </Typography>
      <Sheet
        sx={{
          width: 500, // Width of the sign-in box
          height: 450, // Set to auto to adjust based on content
          mx: "auto",
          my: 0, // Remove margin top and bottom
          py: 4,
          px: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "md",
          boxShadow: "lg",
          marginTop: "160px", // Space above the sign-in box
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
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            type="text"
            placeholder="johndoe"
            sx={{
              height: '48px', // Set input height
              fontSize: '1rem', // Font size for inputs
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
              height: '48px', // Set input height
              fontSize: '1rem', // Font size for inputs
            }}
          />
        </FormControl>
        <Button 
          sx={{
            mt: 2, // Margin top for button
            height: '48px', // Set button height
            fontSize: '1rem', // Font size for button
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
