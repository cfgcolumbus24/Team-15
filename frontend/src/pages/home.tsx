import React, { useState, useEffect } from "react";
import Dropdown from "./list.tsx";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import {
  pink,
  blue,
  green,
  orange,
  purple,
  grey,
  red,
} from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const patientProgressData = [
  { month: "Jan", improved: 70, stable: 25, worsened: 5 },
  { month: "Feb", improved: 72, stable: 22, worsened: 6 },
  { month: "Mar", improved: 75, stable: 20, worsened: 5 },
  { month: "Apr", improved: 78, stable: 18, worsened: 4 },
  { month: "May", improved: 80, stable: 15, worsened: 5 },
  { month: "Jun", improved: 82, stable: 13, worsened: 5 },
  { month: "Jul", improved: 85, stable: 10, worsened: 5 },
  { month: "Aug", improved: 88, stable: 8, worsened: 4 },
  { month: "Sep", improved: 90, stable: 6, worsened: 4 },
  { month: "Oct", improved: 92, stable: 5, worsened: 3 },
  { month: "Nov", improved: 95, stable: 3, worsened: 2 },
  { month: "Dec", improved: 97, stable: 2, worsened: 1 },
];

const upcomingAppointments = [
  {
    name: "John Doe",
    date: "2024-11-02",
    time: "10:00 AM",
    urgency: "High",
    status: "Confirmed",
  },
  {
    name: "Jane Smith",
    date: "2024-11-03",
    time: "1:00 PM",
    urgency: "Low",
    status: "Pending",
  },
  {
    name: "George Brown",
    date: "2024-11-04",
    time: "2:30 PM",
    urgency: "Medium",
    status: "Cancelled",
  },
  {
    name: "Emily White",
    date: "2024-11-05",
    time: "9:00 AM",
    urgency: "High",
    status: "Confirmed",
  },
];

const commands = [
  "get Age less than 30",
  "get Race{ Asian }",
  "get Date OF Birth",
  "get All Clinicians",
];

const monthMap = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

interface PatientProgress {
  month: string;
  improved: number;
  stable: number;
  worsened: number;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [totalPatients, setTotalPatients] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [patientProgressData, setPatientProgressData] = useState<
    PatientProgress[]
  >([]);

  useEffect(() => {
    fetchTotalPatients();
    fetchProgress();
  }, []);

  const fetchTotalPatients = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/patients/all");
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }
      const data = await response.json();
      setTotalPatients(data.length);
    } catch (error) {
      console.error("Error fetching total patients:", error);
      setTotalPatients(0);
    }
  };

  const fetchProgress = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/progress/all");
      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }
      const data = await response.json();

      const res: PatientProgress[] = Object.keys(data).map((key) => {
        const monthData = data[key];
        return {
          month: monthMap[Number(key)],
          improved: monthData[0],
          stable: monthData[1],
          worsened: monthData[2],
        };
      });

      setPatientProgressData(res);
    } catch (error) {
      console.error("Error fetching total patients:", error);
      setTotalPatients(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.startsWith("/")) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleCommandClick = (command: string) => {
    setInputValue(`/${command}`);
    setShowDropdown(false);
  };

  const handleExecute = async () => {
    const baseUrl = "http://localhost:8080/api/v1/patients";

    try {
      let response;
      const command = inputValue.replace("/", "").toLowerCase();

      if (command.startsWith("get age less than")) {
        const age = command.split(" ").pop();
        response = await fetch(`${baseUrl}/age/${age}`);
        // console.log(response);
      } else if (command.startsWith("get race")) {
        const matches = command.match(/\{([^}]+)\}/);
        if (!matches) {
          console.error("Invalid race format");
          return;
        }
        const race = matches[1].trim();
        response = await fetch(`${baseUrl}/race/${race}`);
      } else if (command === "get date of birth") {
        response = await fetch(`${baseUrl}/dob`);
      } else if (command === "get all clinicians") {
        response = await fetch(`${baseUrl}/clinicians`);
      }

      if (response && response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/plaintext", { state: { data, command: inputValue } });
      }
    } catch (error) {
      console.error("Error executing command:", error);
    }
  };

  return (
    <Box p={0} bgcolor={grey[100]} minHeight="100vh">
      {/* Header */}
      <Box
        textAlign="center"
        mb={4}
        p={3}
        sx={{
          background: `linear-gradient(135deg, ${blue[800]} 30%, ${blue[600]} 90%)`,
          color: "white",
          borderRadius: 0,
          position: "relative",
        }}
      >
        <Dropdown />

        <Typography variant="h3" fontWeight="bold">
          Netcare Clinician Dashboard
        </Typography>
        <Typography variant="subtitle1">
          A comprehensive view of patient statistics and trends
        </Typography>

        {/* Icons for Settings and Profile */}
        <Box position="absolute" top={16} right={16} display="flex" gap={2}>
          <IconButton
            sx={{ color: "white", "&:hover": { backgroundColor: blue[300] } }}
          >
            <SettingsIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            sx={{ color: "white", "&:hover": { backgroundColor: blue[300] } }}
          >
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Input field and Execute button */}
      <Box display="flex" justifyContent="center" mt={4} position="relative">
        <TextField
          label="Enter / to Search"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            marginRight: 2,
            width: "400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        <Button variant="contained" color="primary" onClick={handleExecute}>
          Execute
        </Button>
        {showDropdown && (
          <List
            sx={{
              position: "absolute",
              top: "50px",
              width: "400px",
              backgroundColor: "white",
              border: `1px solid ${grey[300]}`,
              borderRadius: "8px",
              boxShadow: 3,
              zIndex: 1,
            }}
          >
            {commands.map((command, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleCommandClick(command)}>
                  <ListItemText primary={command} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      <Grid container spacing={3} justifyContent="center" mt={3}>
        {/* Upcoming Appointments Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 4, borderRadius: 3, height: "100%" }}>
            <CardContent sx={{ padding: 3 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Upcoming Appointments
              </Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead sx={{ backgroundColor: blue[600] }}>
                    <TableRow>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                        Date
                      </TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                        Time
                      </TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                        Urgency
                      </TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {upcomingAppointments.map((appointment, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:nth-of-type(odd)": { backgroundColor: grey[200] },
                          "&:hover": { backgroundColor: blue[50] },
                        }}
                      >
                        <TableCell>{appointment.name}</TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell
                          sx={{
                            color:
                              appointment.urgency === "High"
                                ? red[600]
                                : appointment.urgency === "Medium"
                                ? orange[600]
                                : green[600],
                          }}
                        >
                          {appointment.urgency}
                        </TableCell>
                        <TableCell
                          sx={{
                            color:
                              appointment.status === "Confirmed"
                                ? green[600]
                                : appointment.status === "Pending"
                                ? orange[600]
                                : red[600],
                          }}
                        >
                          {appointment.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Patients Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: 4,
              borderRadius: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                padding: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ bgcolor: purple[500], width: 80, height: 80, mr: 2 }}
              >
                <PersonIcon sx={{ fontSize: 55, color: "white" }} />
              </Avatar>
              <Box textAlign="left">
                <Typography variant="h6" color="text.secondary">
                  Total Patients
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  {totalPatients}
                </Typography>
              </Box>
            </CardContent>
            <CardContent
              sx={{
                padding: 3,
                textAlign: "center",
                bgcolor: grey[200],
                borderRadius: 0,
                flexGrow: 1,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                This number reflects the total patients currently under care,
                highlighting our commitment to community health.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Patient Progress Card */}
      <Grid item xs={12} mt={4} display="flex" justifyContent="center">
        <Card sx={{ boxShadow: 4, borderRadius: 3, width: "66.2%" }}>
          <CardContent sx={{ padding: 3 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Patient Progress Over Time
            </Typography>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <LineChart width={600} height={300} data={patientProgressData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="improved" stroke={green[500]} />
                <Line type="monotone" dataKey="stable" stroke={orange[500]} />
                <Line type="monotone" dataKey="worsened" stroke={pink[500]} />
              </LineChart>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Monthly patient progress trends
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Footer */}
      <Box textAlign="center" mt={4}>
        <Typography variant="caption" color="text.secondary">
          Netcare 2024
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
