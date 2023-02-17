import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";

import Qualification from "./addDelete/Qualification";

import "./style.css";
import { Button, Input } from "@mui/material";
import { Container } from "@mui/system";

const Profile = () => {
  // const [addState, setAddState] = useState([0])
  const [country, setCountry] = useState("");
  const [value, setValue] = React.useState();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  function valuetext(value) {
    return `${value}L`;
  }
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
//  const handleChangeAdd = (event) => {
//     setAddState({itemName: event.target.value});
//   }
//   const statedelete = (index) => {
//     addState.list.splice(index, 1);
//     setAddState({list: addState.list})
//     console.log(index);
//   }
//   const add = () => {
//     const list = [...addState.list]
//     list.push(addState.itemName);
//     this.setState({list: list});
//     this.setState({itemName: ''})
//   }

  const handleSubmission = () => {};

  const marks = [
    {
      value: 5,
      label: "5L",
    },
    {
      value: 10,
      label: "5L",
    },
    {
      value: 15,
      label: "15L",
    },
    {
      value: 20,
      label: "20L",
    },
    {
      value: 25,
      label: "25L",
    },
    {
      value: 30,
      label: "30L",
    },
    {
      value: 35,
      label: "35L",
    },
    {
      value: 40,
      label: "40L",
    },
    {
      value: 45,
      label: "45L",
    },
    {
      value: 50,
      label: "50L",
    },
    {
      value: 55,
      label: "55L",
    },
    {
      value: 60,
      label: "60L",
    },
    {
      value: 90,
      label: "90L (per annum)",
    },
  ];

  return (
    <div>
      <section className="register-outer profile-outer">
        <div>
          <h2>Complete your profile</h2>
        </div>
        <Container>
          <Box>
            <div className="Personal-information">
              <div className="Personal-information-heading">
                Personal Information
              </div>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Full Name"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Email"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  className="border-cus"
                  type="email"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Phone"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  className="border-cus"
                  type="tel"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Age"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>

              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Sex*
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  requerd
                >
                  <FormControlLabel
                    value="Agency"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Direct Employer"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl sx={{ m: 1, width: "98.6%" }} size="small" fullWidth>
                <InputLabel id="demo-select-small">Functional area</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={country}
                  label="Functional area"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Functional area</em>
                  </MenuItem>
                  <MenuItem value="india">Medical</MenuItem>
                  <MenuItem value="Afghanistan">Paramedical</MenuItem>
                  <MenuItem value="Albania">Nursing</MenuItem>
                  <MenuItem value="Pharma">Pharma</MenuItem>
                  <MenuItem value="Dental">Dental</MenuItem>
                  <MenuItem value="Ayush">Ayush/ISM</MenuItem>
                  <MenuItem value="Administration">Administration</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Specialization"
                  id="outlined-start-adornment"
                  sx={{ m: 1, borderRadius: "15px" }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>
            </div>
            <div className="Personal-information">
              <div className="Personal-information-heading">
                Enter Qualification Details
              </div>
              <Qualification />
            </div>

            <div className="Personal-information">
              <div className="Personal-information-heading">
                other Information
              </div>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Key Skills"
                  id="outlined-start-adornment"
                  sx={{ m: 1, borderRadius: "15px" }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>
              <FormControl fullWidth>
                <div>
                  <TextField
                    style={{ width: "200px" }}
                    required
                    label="Current Salary"
                    id="outlined-start-adornment"
                    sx={{ m: 1, borderRadius: "15px" }}
                    size="small"
                    className="border-cus"
                    type="text"
                    // value={value[0]}
                  />
                  <span style={{ verticalAlign: "bottom", fontSize: "2rem" }}>
                    -
                  </span>
                  <TextField
                    style={{ width: "200px" }}
                    required
                    // label="Salary Range"
                    id="outlined-start-adornment"
                    sx={{ m: 1, borderRadius: "15px" }}
                    size="small"
                    className="border-cus"
                    type="text"
                    // value={value[1]}
                  />
                </div>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={10}
                  getAriaValueText={valuetext}
                  step={5}
                  valueLabelDisplay="auto"
                  marks={marks}
                  // value={()=>setValue(value)}
                />
                {/* <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                /> */}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Expected Salary"
                  id="outlined-start-adornment"
                  sx={{ m: 1, borderRadius: "15px" }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Current Location"
                  id="outlined-start-adornment"
                  sx={{ m: 1, borderRadius: "15px" }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Preferred Location"
                  id="outlined-start-adornment"
                  sx={{ m: 1, borderRadius: "15px" }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  required
                  label="Linkedin Url"
                  id="outlined-start-adornment"
                  sx={{ m: 1, borderRadius: "15px" }}
                  size="small"
                  className="border-cus"
                  type="text"
                />
              </FormControl>
            </div>

            <div className="Personal-information">
              <div align="center" className="fileupload">
                <h2>UPLOAD RESUME</h2>
                <p align="center">
                  (ALLOWED FILE TYPES : DOC, PDF) (MAXIMUM FILE SIZE : 2MB)
                </p>
                <FormControl fullWidth>
                  <input
                    type="file"
                    name="file"
                    onChange={changeHandler}
                    style={{ margin: "0 auto" }}
                  />
                </FormControl>
              </div>              
            </div>           

            <Button variant="outlined" className="register-submit" size="large">
              Submit
            </Button>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Profile;
