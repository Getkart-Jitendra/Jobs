import React from 'react';
// import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import { red } from '@mui/material/colors';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// import { style } from '../category/style.css';
import '../../home/style.css'

import doctors from "../../../assets/images/home/doctor.png";
import speciality from "../../../assets/images/home/speciality.png";
import medicalofficer from "../../../assets/images/home/medical-officer.png";
import nursing from "../../../assets/images/home/nursing.png";



const jobCategory = [
    {
        img: doctors,
        heading: "Resident doctors",
        button: "36 Job Post"
    },
    {
        img: speciality,
        heading: "Specialists",
        button: "72 Job Post"
    },
    {
        img: medicalofficer,
        heading: "Medical Officer",
        button: "42 Job Post"
    },
    {
        img: nursing,
        heading: "Nursing",
        button: "18 Job Post"
    },
    {
        img: nursing,
        heading: "Admin",
        button: "48 Job Post"
    },
    {
        img: nursing,
        heading: "Teaching/Education",
        button: "94 Job Post"
    },
    {
        img: nursing,
        heading: "Paramedical",
        button: "64 Job Post"
    },
    {
        img: nursing,
        heading: "Ayush",
        button: "64 Job Post"
    },
    {
        img: nursing,
        heading: "Industry",
        button: "52 Job Post"
    }

]

const Category = () => {
    return (
        <>
    <section className='outer-box'>
        <Container className="page-heading-1">
          <div className="page-top">
            <h1>Job Categories</h1>
            <p>Find Medical Job Opportunities Regarding to Categories.</p>
          </div>
        </Container>
        <Container>
            <Grid container spacing={4}>
                {jobCategory.map((item, i) => {
                    return (
                        <>
                            <Grid item lg={3} md={3} sm={6} xs={12} pd="2">
                                <Card key={i} style={{ marginBottom: "1rem" }} className="inner-box">
                                    <CardMedia
                                        className='top-image'
                                        component="img"
                                        height="120"
                                        width="120"
                                        image={item.img}
                                        alt="Paella dish"
                                    />
                                    <CardContent className='contenthead'>
                                        <Typography gutterBottom variant="h1" component="div">
                                            {item.heading}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined" size="medium" className='offview'>{item.button}</Button>
                                        <Button variant="outlined" size="medium" className='onview'>View Jobs</Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
            </Container>
            </section>
        </>
    )



}

export default Category;