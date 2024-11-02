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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
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

  const handlePatients = () => {
    navigate("/Patients");
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
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItemButton>
      </ListItem>
      {["Clinicians"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
      </List>
      <Divider />
      <List>
        {["Settings", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
