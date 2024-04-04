import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/img/Logo.png';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const settings = ['Profile', 'Settings', 'Contact', 'Logout'];

function TopNavBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [modals, setModals] = useState({
    Profile: false,
    Settings: false,
    Contact: false,
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
  const handleSubmitProfileForm = (e) => {
    e.preventDefault();
    console.log('Profile form submitted');
    handleCloseModal();
  };

  const handleSubmitSettingsForm = (e) => {
    e.preventDefault();
    console.log('Settings form submitted');
    handleCloseModal();
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
    handleCloseModal();
  };
// Logout form
  const handleSubmitLogoutForm = (e) => {
    e.preventDefault();
    console.log('Logout form submitted');
    handleCloseModal();
  };

  const renderModal = (menuItem) => {
    // Choose the appropriate submission handling function based on the menu item
    let handleSubmitFunction;
    switch (menuItem) {
      case 'Profile':
        handleSubmitFunction = handleSubmitProfileForm;
        break;
      case 'Settings':
        handleSubmitFunction = handleSubmitSettingsForm;
        break;
      case 'Contact':
        handleSubmitFunction = handleSubmitContactForm;
        break;
      case 'Logout':
        handleSubmitFunction = handleSubmitLogoutForm;
        break;
      default:
        handleSubmitFunction = () => {}; // Default to an empty function
    }

    return (
      <Modal key={menuItem} open={modals[menuItem]} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
          <form onSubmit={handleSubmitFunction}>
            <TextField label={`Enter ${menuItem}`} fullWidth />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    );
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
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
              sx={{ mt: '41px' }} // Adjust mt value to decrease height
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
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
