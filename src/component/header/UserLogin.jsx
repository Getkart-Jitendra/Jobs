import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Register from "../register/Register";
import "./style.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "#efefef",
  border: "2px solid #efefe",
  borderTop: "4px solid #ed5107",
  boxShadow: 24,
};

const UserLogin = ({name="Employer Zone"}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section >
      <Container style={{padding: "0"}}>
        <div className="model-outer">
          <Button onClick={handleOpen} class="emp-zon" style={{padding: "0"}}>
           {name}
          </Button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            className="model-inner"
          >
            <Box sx={style} className="model-inner-2">
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                Employer Login
              </Typography>
              <Divider />

              <div className="user-name">
                <TextField
                  required
                  id="outlined-required"
                  label="User Name"
                  type="text"
                  size="small"
                />
              </div>
              <div className="user-pass">
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  type="password"
                  size="small"
                />
              </div>
              <Stack spacing={2} direction="row" className="submit-register">
                <Button variant="contained">Submit</Button>
                <Button variant="text" color="primary">
                  Forgot Password
                </Button>
              </Stack>
              <Divider />
              <p className="text-footer">
                If you don't have account yet
                <Button variant="text" color="primary" onClick={handleClose}>
                  <Link to="/register">Register Here</Link>
                </Button>
                {/* <Link to="/register">Register Here</Link> */}
              </p>
            </Box>
          </Modal>
        </div>
      </Container>
    </section>
  );
};

export default UserLogin;
