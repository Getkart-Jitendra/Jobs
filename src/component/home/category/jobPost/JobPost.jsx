import React from "react";
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

import "../jobPost/style.css";

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

const JobPost = () => {
  return (
    <>
      <section className="jobSection">
        <Container>
          <h1>Recent Job Post</h1>
        </Container>
        <Container>
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
                      <ListItemText primary={`Vacancies: ${item.Vacancies}`} />
                      <ListItemIcon className="widthcus">
                        <ControlPointIcon fontSize="small" />
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
                      <ListItemText primary={`KeySkills: ${item.KeySkills}`} />
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
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <item>{`Posted By: ${item.Posted}`}</item>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <item>{`Deadline By: ${item.Deadline}`}</item>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
                        <item>{`Post on: ${item.Deadline}`}</item>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={3}>
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
        </Container>
      </section>
    </>
  );
};

export default JobPost;
