import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import UserLogin from "./UserLogin";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import {
  Container,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import joblogo from "../../assets/images/home/job-logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
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
          <UserLogin name="Login"></UserLogin>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to="/signup">Sign Up</Link>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        backgroundColor: "#fff",
        zIndex: "1000",
        boxShadow: "0px 1px 10px 3px #f5f5f5",
      }}
    >
      <Box>
        <AppBar position="fixed" className="menu-hand">
          <Container fixed>
            <Toolbar className="menu-right">
              <Typography variant="h6" component="h6">
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="h6" component="h6">
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
      <nav className="main-nav">
        <div className="web-logo">
          <Link to="/">
            <img src={joblogo} />
          </Link>
        </div>
        <div></div>
        <div
          className={
            showMediaIcon === true ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="mobile-menu-custom">
            <li
              onClick={() => {
                setShowMediaIcon(!showMediaIcon);
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setShowMediaIcon(!showMediaIcon);
              }}
            >
              <Link to="/SearchPage">Jobs</Link>
            </li>
            <li
              onClick={() => {
                setShowMediaIcon(!showMediaIcon);
              }}
            >
              <Link to="/about">About us</Link>
            </li>
            <li>
              <UserLogin
                name="Employer Zone"
                onClick={() => {
                  setShowMediaIcon(!showMediaIcon);
                }}
              />
            </li>
            <li>
              <ul className="dropdown">
                <li
                  onClick={() => {
                    setShowMediaIcon(!showMediaIcon);
                  }}
                >
                  <UserLogin name="Login"></UserLogin>
                </li>
                <li
                  onClick={() => {
                    setShowMediaIcon(!showMediaIcon);
                  }}
                >
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                setShowMediaIcon(!showMediaIcon);
              }}
            >
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="hambutger-menu">
          <IconButton
            onClick={() => {
              setShowMediaIcon(!showMediaIcon);
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
