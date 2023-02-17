import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import UserLogin from "./UserLogin";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
// import SearchPage from "../search/SearchPage";

const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className="submenuouter"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="test-submenu">
        <MenuItem onClick={handleMenuClose}>
          {/* Profile */}
          <UserLogin name="Login"></UserLogin>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          {/* My account */}
          <Link to="/signup">Sign Up</Link>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div>
      <Box>
        <AppBar position="fixed" className="menu-hand">
          <Container fixed>
            <Toolbar className="menu-right">
              <Typography variant="h6" component="h6">
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="h6" component="h6">
                {/* Job */}
                <Link to="/SearchPage">Jobs</Link>
              </Typography>
              <Typography variant="h6" component="h6">
                <Link to="/about">About us</Link>
              </Typography>
              <Typography variant="h6" component="h6">
                <UserLogin name="Employer Zone" />
              </Typography>
              <Typography variant="h6" component="h6">
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    className="nobg"
                  >
                    <span style={{ fontSize: "17px" }}>Job Seeker</span>
                    <ArrowDropDownIcon />
                  </IconButton>
                  {renderMenu}
                </Box>
              </Typography>

              <Typography variant="h6" component="h6">
                <Link to="/contactus">Contact us</Link>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
