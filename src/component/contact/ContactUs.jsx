import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import GoogleMapReact from "google-map-react";

import Person2Icon from "@mui/icons-material/Person2";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import "./style.css";

const AnyReactComponent = ({ Delhi }) => <div>{Delhi}</div>;

const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{backgroundColor: "#fafafa", paddingBottom: "4rem"}}>
      <div>
        <div style={{ height: "60vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>

      <Container>
        <div className="contact-area">
        <h1>Get in Touch</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "48%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Full Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person2Icon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Specialization"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InsertDriveFileIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Email address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Phone Number"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            component="div"
            className="cuwidth"
            sx={{
              "& > :not(style)": { m: 0, width: "100% !importent" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <FormControl fullWidth>
                <TextareaAutosize
                  variant="outlined"
                  placeholder="Phone Number"
                  className="custom-design"
                />
              </FormControl>
            </div>
          </Box>
          <div className="sendconteact">
            <Button variant="contented">Send</Button>
          </div>
        </Box>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
