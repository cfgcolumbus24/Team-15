import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  const navigate = useNavigate();

  const handleDemographics = () => {
    navigate("/Demographics");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handlePatients = () => {
    navigate("/Patients");
  };

  const handleHome = () => {
    navigate("/Home");
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={handlePatients}> {/* Add click handler for Patients */}
          <ListItemIcon>
            <EmojiPeopleIcon/>
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItemButton>
      </ListItem>
      {["Clinicians"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AdminPanelSettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleDemographics}> {/* Add click handler for Demographics */}
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Demographics" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleHome}> {/* Add click handler for Demographics */}
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Settings"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "absolute", top: "16px", left: "16px" }}> {/* Adjusted positioning */}
      <Button sx={{ color: "white" }} onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontSize: "36px" }} />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}

export default Dropdown;
