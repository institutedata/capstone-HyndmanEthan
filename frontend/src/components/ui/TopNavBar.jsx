import React, { useState, useContext } from "react";
import GLOBAL from "../../config/global";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/img/Logo.png";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import UserContext from '../../utils/userContext';
import { useNavigate } from 'react-router-dom';

// Top navigation bar component
const settings = ["Username", "Settings", "Delete", "Logout"];


function TopNavBar() {
  // Get navigation function
  const navigate = useNavigate();
  // State to store anchor element for user menu
  const [anchorElUser, setAnchorElUser] = useState(null);
  // State to store selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  // Get user context
  const { user, setUser } = useContext(UserContext);


  // State to store new username
  const [newUsername, setNewUsername] = useState('');
  // State to store modal states
  const [modals, setModals] = useState({
    Username: false,
    Settings: false,
    Delete: false,
    Logout: false,
  });
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setModals((prevModals) => ({
      ...prevModals,
      [menuItem]: true,
    }));
    handleCloseUserMenu();
  };

  const handleCloseModal = () => {
    setModals((prevModals) => ({
      ...prevModals,
      [selectedMenuItem]: false,
    }));
  };

  // Define separate submission handling functions for each menu item
  const handleSubmitUsernameForm = async (e, usernameUpdated) => {
    e.preventDefault();
    if (usernameUpdated) {
      // Add logic to delete account here
      try {
        const response = await axios.put(`${GLOBAL.SERVER_URL}/users/${user.id}`, {
          _id: user.id,
          username: newUsername,
          email: user.email,
          password: user.password
        });
        console.log('Updated successfully:', response.data);
        // Handle success, maybe show a success message or redirect user
      } catch (error) {
        console.error('Error updating:', error);
        // Handle error, show error message to user
      }
      
    } else {
      // Handle canceling logout
      console.log("No changes made to username");
    }
    handleCloseModal();
  };

  const handleSubmitSettingsForm = (e) => {
    e.preventDefault();

    console.log("Settings form submitted");
    handleCloseModal();
  };

  const handleSubmitDeleteForm = (e, deleteConfirmed) => {
    e.preventDefault();
    if (deleteConfirmed) {
      // Add logic to delete account here
      console.log("Account deleted");
      
    } else {
      // Handle canceling logout
      console.log("More free coffee for you!");
    }
    handleCloseModal();
  };
  // Logout form
  const handleSubmitLogoutForm = (e, logoutConfirmed) => {
    e.preventDefault();
    if (logoutConfirmed) {
      // Handle logout confirmation
      console.log("Logout confirmed");
      // Perform logout action here
      setUser(null);
      navigate("/signin") // Redirect to sign-in page after logout
    } else {
      // Handle canceling logout
      console.log("Logout canceled");
    }
    handleCloseModal();
  };

  const renderModal = (menuItem) => {
    let formContent;
    const handleUsernameChange = (e) => {
      setNewUsername(e.target.value);
    };


    switch (menuItem) {
      case "Username":
        
      formContent = (
        <>
        <Typography variant="h6">
        Update Username
        </Typography>
        <TextField
        label="New username"
        fullWidth
        value={newUsername}
        onChange={handleUsernameChange}
      />

                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      style={{ marginTop: "10px" }}
                      onClick={(e) => handleSubmitUsernameForm(e, true)}
                      >
                      Update
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px", marginLeft: "10px"}}
                      onClick={(e) => handleSubmitUsernameForm(e, false)}
                      >
                      Cancel
                    </Button>
                      </Box>
                        </>
      );
        break;
      case "Settings":
        formContent = (
          <>
          <Typography variant="h6">
          Currently no settings available
          </Typography>

                      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: "10px"}}
                        onClick={(e) => handleSubmitSettingsForm(e, false)}
                        >
                        Close
                      </Button>

                        </Box>
          </>
        );
        break;
      case "Delete":
        formContent = (
          <>
          <Typography variant="h6">
          Delete your account?
          </Typography>
          <Typography variant="body2">
            No more free coffee!
          </Typography>
                      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: "10px"}}
                        onClick={(e) => handleSubmitDeleteForm(e, false)}
                        >
                        No
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        color="error"
                        style={{ marginTop: "10px", marginLeft: "10px" }}
                        onClick={(e) => handleSubmitDeleteForm(e, true)}
                        >
                        Yes
                      </Button>
                        </Box>
                          </>
        );
        break;
      case "Logout":
        formContent = (
          <>
            <Typography variant="body1">
              Are you sure you want to logout?
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Button
              type="submit"
              variant="contained"
              color="error"
              style={{ marginTop: "10px" }}
              onClick={(e) => handleSubmitLogoutForm(e, true)}
              >
              Yes
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ marginTop: "10px", marginLeft: "10px"}}
              onClick={(e) => handleSubmitLogoutForm(e, false)}
              >
              No
            </Button>
              </Box>
          </>
        );
        break;
      default:
        formContent = null;
    }

    return (
      <Modal key={menuItem} open={modals[menuItem]} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          {formContent}

        </div>
      </Modal>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="" style={{ paddingTop: 8, height: 68 }} />
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "41px" }} // Adjust mt value to decrease height
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {settings.map((setting) => modals[setting] && renderModal(setting))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNavBar;
