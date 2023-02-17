import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CabinIcon from "@mui/icons-material/Cabin";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./style.css";

const SearchPage = () => {
  const [checked, setChecked] = useState([true, false]);
  const [checked2, setChecked2] = useState([true, false]);
  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event) => {
    setChecked([event.target.checked2, event.target.checked2]);
  };

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const JobPostoption = [
    {
      VacanciesName: "Senior Resident - Urology0",
      placeName: "Vardhman Mahavir Medical College & Safdarjung Hospital",
      Vacancies: " (02)",
      Experience: "3 - 5yrs",
      Sector: "Government",
      Salary: "Rs. 67,700/- in Pay Level-11 in the Pay Matrix as per 7th CPC",
      KeySkills: "Nursing, Microbiology, Infection Control Officer.",
      state: "New Delhi  Delhi",
      Posted: "Admin",
      Deadline: "May 23, 2018",
      PostOn: "May 3, 2018",
    },
    {
      VacanciesName: "Senior Resident - Urology1",
      placeName: "Vardhman Mahavir Medical College & Safdarjung Hospital",
      Vacancies: " (02)",
      Experience: "3 - 5yrs",
      Sector: "Government",
      Salary: "Rs. 67,700/- in Pay Level-11 in the Pay Matrix as per 7th CPC",
      KeySkills: "Nursing, Microbiology, Infection Control Officer.",
      state: "New Delhi  Delhi",
      Posted: "Admin",
      Deadline: "May 23, 2018",
      PostOn: "May 3, 2018",
    },
    {
      VacanciesName: "Senior Resident - Urology2",
      placeName: "Vardhman Mahavir Medical College & Safdarjung Hospital",
      Vacancies: " (02)",
      Experience: "3 - 5yrs",
      Sector: "Government",
      Salary: "Rs. 67,700/- in Pay Level-11 in the Pay Matrix as per 7th CPC",
      KeySkills: "Nursing, Microbiology, Infection Control Officer.",
      state: "New Delhi  Delhi",
      Posted: "Admin",
      Deadline: "May 23, 2018",
      PostOn: "May 3, 2018",
    },
    {
      VacanciesName: "Senior Resident - Urology3",
      placeName: "Vardhman Mahavir Medical College & Safdarjung Hospital",
      Vacancies: " (02)",
      Experience: "3 - 5yrs",
      Sector: "Government",
      Salary: "Rs. 67,700/- in Pay Level-11 in the Pay Matrix as per 7th CPC",
      KeySkills: "Nursing, Microbiology, Infection Control Officer.",
      state: "New Delhi  Delhi",
      Posted: "Admin",
      Deadline: "May 23, 2018",
      PostOn: "May 3, 2018",
    },
    {
      VacanciesName: "Senior Resident - Urology 4",
      placeName: "Vardhman Mahavir Medical College & Safdarjung Hospital",
      Vacancies: " (02)",
      Experience: "3 - 5yrs",
      Sector: "Government",
      Salary: "Rs. 67,700/- in Pay Level-11 in the Pay Matrix as per 7th CPC",
      KeySkills: "Nursing, Microbiology, Infection Control Officer.",
      state: "New Delhi  Delhi",
      Posted: "Admin",
      Deadline: "May 23, 2018",
      PostOn: "May 3, 2018",
    },
  ];
  const checkboxValue = [
    {
      val: "checked",
      label: "Medicine / General Medicine/ Internal Medicine",
    },
    {
      val: "checked",
      label: "MBBS Doctor",
    },
    {
      val: "checked",
      label: "Obstetrics and Gynaecology",
    },
    {
      val: "checked",
      label: "Branding and promotion (54)",
    },
    {
      val: "checked",
      label: "General Surgery",
    },
    {
      val: "checked",
      label: "Anaesthesia / Anesthesia / Anaesthesiology",
    },
    {
      val: "checked",
      label: "Ophthalmology",
    },
    {
      val: "checked",
      label: "Orthopaedics",
    },
    {
      val: "checked",
      label: "Cardiology",
    },
    {
      val: "checked",
      label: "Gastroenterology",
    },
    {
      val: "checked",
      label: "B.Sc (Nursing)",
    },
  ];
  const Functional = [
    { label: "Adhoc" },
    { label: "Permanent /Regular" },
    { label: "Contract" },
    { label: "Internship" },
    { label: "Visiting" },
    { label: "Full Time" },
    { label: "Part Time" },
    { label: "Locum" },
  ];

  const Industry = [
    { label: "Government" },
    { label: "Private" },
    { label: "International" },
    { label: "All" },
  ];
  return (
    <>
      <section style={{ backgroundColor: "#f8f8f8", marginTop: "1rem" }}>
        <Container>
          <h2 textleft style={{ margin: "1rem 0 0 0" }}>
            Filter Jobs Result
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h3>Specialization</h3>
              <div className="Specialization">
                <FormControl component="fieldset">
                  {checkboxValue.map((item, i) => {
                    return (
                      <>
                        <FormControlLabel
                          value={item.val}
                          control={<Checkbox />}
                          label={item.label}
                          labelPlacement="last"
                        />
                      </>
                    );
                  })}
                </FormControl>
              </div>
              <div className="Functional-Area">
                <h3>Functional Area</h3>
                <FormControl
                  component="fieldset"
                  style={{
                    maxHeight: "250px",
                    overflow: "overlay",
                    minWidth: "100%",
                  }}
                >
                  {Functional.map((item, i) => {
                    return (
                      <>
                        <FormControlLabel
                          value="checked"
                          control={<Checkbox />}
                          label={item.label}
                          labelPlacement="last"
                        />
                      </>
                    );
                  })}
                </FormControl>
              </div>

              <div className="location">
                <h3>Location</h3>
                <div className="locaion-inner">
                  <Search style={{ maxWidth: "100px", marginLeft: "0" }}>
                    <SearchIconWrapper>
                      <LocationOnIcon size="large" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Location"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </div>
              </div>
              <div className="Functional-Area">
                <h3>Industry</h3>
                <FormControl
                  component="fieldset"
                  style={{
                    maxHeight: "250px",
                    overflow: "overlay",
                    minWidth: "100%",
                  }}
                >
                  {Industry.map((item, i) => {
                    return (
                      <>
                        <FormControlLabel
                          value="checked"
                          control={<Checkbox />}
                          label={item.label}
                          labelPlacement="last"
                        />
                      </>
                    );
                  })}
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={9} lg={9}>
              {JobPostoption.map((item, i) => {
                return (
                  <>
                    <div className="other-bg">
                      <p>
                        <strong>{item.VacanciesName}</strong>
                      </p>
                      <List
                        key={i}
                        sx={{ width: "100%", bgcolor: "background.paper" }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                      >
                        <ListItemButton style={{ padding: "1px 0px" }}>
                          <ListItemIcon className="widthcus">
                            <CabinIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={item.placeName} />
                          <ListItemIcon className="widthcus">
                            <LocalOfferIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Vacancies: ${item.Vacancies}`}
                          />
                        </ListItemButton>
                        <ListItemButton style={{ padding: "1px 0px" }}>
                          <ListItemIcon className="widthcus">
                            <BusinessCenterIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Experience: ${item.Experience}`}
                          />
                        </ListItemButton>
                        <ListItemButton pd="0" style={{ padding: "1px 0px" }}>
                          <ListItemIcon className="widthcus">
                            <ApartmentIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={`Sector: ${item.Sector}`} />
                        </ListItemButton>
                        <ListItemButton pd="0" style={{ padding: "1px 0px" }}>
                          <ListItemIcon className="widthcus">
                            <LocalOfferIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={`Salary: ${item.Salary}`} />
                        </ListItemButton>
                        <ListItemButton pd="0" style={{ padding: "1px 0px" }}>
                          <ListItemIcon className="widthcus">
                            <LocalOfferIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={`KeySkills: ${item.KeySkills}`}
                          />
                        </ListItemButton>
                        <ListItemButton pd="0" style={{ padding: "1px 0px" }}>
                          <ListItemIcon className="widthcus">
                            <LocationOnIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={`Salary: ${item.state}`} />
                        </ListItemButton>
                      </List>
                      <Divider light />
                      <div
                        sx={{ width: "100%" }}
                        style={{ marginTop: "15px" }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} md={4} lg={4}>
                            <item>{`Posted By: ${item.Posted}`}</item>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={4}>
                            <item>{`Deadline By: ${item.Deadline}`}</item>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={4}>
                            <item>{`Post on: ${item.Deadline}`}</item>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={4}>
                            <item>
                              <Button variant="outlined" size="medium">
                                Apply/View
                              </Button>
                            </item>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </>
                );
              })}

              <Stack spacing={2}>
                <Pagination
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  style={{ justifyContent: "flex-end" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default SearchPage;
