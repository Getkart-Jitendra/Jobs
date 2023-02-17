import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import man from "../../../../assets/images/home/man.png";
import "../../../home/style.css";
import { Container } from "@mui/material";

const MedicalJobs = () => {
  return (
    <>
      <section className="medica-jobs">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={9}>
                <div className="data-center">
                  <div>
                    <h1>
                      Welcome to Medicaljob.in (A unit of Everything Medical
                      Treatment Pvt. Ltd.)
                    </h1>
                    <p>
                      Medicaljob.in is a one stop platform for all hiring and
                      job related information in the medical and health sector
                      of the country. It is one of its kind dedicated platform
                      for healthcare jobseekers and recruiters to meet.
                    </p>
                    <p>
                      Medical Sector in the country, today suffers from strange
                      problem of mismatch. While there is an extreme reported
                      shortage of qualified healthcare professionals including
                      doctors, nurses and other paramedical staff in the
                      country, fresh passouts on the other hand are unable to
                      find jobs due to lack of placement mechanisms in the
                      healthcare sector.
                    </p>
                    <Button
                      variant="outlined"
                      size="large"
                      className="button-cus"
                    >
                      Explore New Jobs
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} className="image-size">
                <img src={man} style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default MedicalJobs;
