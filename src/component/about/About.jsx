import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

import "./style.css";

function About() {
    return (
        <>
        
     <section className='about-bg-color'>
      <Container>
        <div>
            <h1>ABOUT US</h1>
            <h3>Welcome to Medicaljob.in (A unit of <br/>Everything Medical Treatment Pvt. Ltd.)</h3>
            <Button variant="contained" className='Explore-Jobs' size="large">Explore Jobs</Button>
        </div>
      </Container>      
    </section>      
    <section className='about-second'>
    <Container>
        <div>
            <h2>About </h2>
            <p>Medicaljob.in is a one stop platform for all hiring and job related information in the medical and health sector of the country. It is one of its kind dedicated platform for healthcare jobseekers and recruiters to meet. Medical Sector in the country, today suffers from strange problem of mismatch. While there is an extreme reported shortage of qualified healthcare professionals including doctors, nurses and other paramedical staff in the country, fresh passouts on the other hand are unable to find jobs due to lack of placement mechanisms in the healthcare sector. To tackle this drawback, Medicaljob.in provides one stop junction to facilitate interaction between job seekers and recruiters. Jobseekers from different fields of healthcare sector-junior doctors, senior doctors, consultants, nurses, paramedicals, administrators can search through variety of jobs suitable to their needs. We offer both government and private jobs on one platform and allow jobseekers to chose jobs based their location, sector, timings, availability, type of employment and much more. Whether permanent, or temporary, part-time or full time, we provide all types of jobs. Our special locum database, allows users to register with Medicaljob.in and we inform our users about new opportunities as and when they arise. On the other end of the spectrum, we provide a one stop platform for healthcare organizations to meet all their HR needs. Hospitals and healthcare organizations can search for suitable candidates all at one stop-doctors, nurses, administrative staff, paramedical staff and many more. So join now and start hunting!</p>
        </div>
    </Container>
    </section>              
      </>
    )
}

export default About;