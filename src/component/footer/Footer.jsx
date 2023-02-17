import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List'
import { Container, Link } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import facebook from "../../assets/images/footer/facebook.png";
import twitter from "../../assets/images/footer/twitter.png";
import whatsapp from "../../assets/images/footer/whatsapp.png";
import linkdin from "../../assets/images/footer/linkdin.png";
import facebookbg from "../../assets/images/footer/facebook-bg.png"
import twitterbg from "../../assets/images/footer/twitter-bg.png";
import whatsappbg from "../../assets/images/footer/whatsapp-bg.png";
import linkdinbg from "../../assets/images/footer/linkdin-bg.png";
import FooterLast from './FooterLast';
import { style } from "./style.css"



const Footer = () => { 

    return (
        <>
        <section className='footersec'>
                <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className="topbottom-spacing">
                    <Grid item xs={12} sm={6} md={4} lg={4} className="quick">
                        <h2 style={{ padding: "0", margin: "0" }}>QUICK LINKS</h2>
                        <List sx={{ width: '100%' }}>
                            <ListItem style={{ padding: "5px " }}>
                                <Link href="#">About Us</Link>
                            </ListItem>
                            <ListItem style={{ padding: "5px" }}>
                                <Link href="#">Contact Us</Link>
                            </ListItem>
                            <ListItem style={{ padding: "5px" }}>
                                <Link href="#">Privacy Policy</Link>
                            </ListItem>
                            <ListItem style={{ padding: "5px" }}>
                                <Link href="#">Terms & Conditions</Link>
                            </ListItem>
                        </List>
                    </Grid>


                    <Grid item xs={12} sm={6} md={4} lg={4} className="contact-footer">
                        <h2 style={{ padding: "0", margin: "0" }}>CONTACT US</h2>
                        <List sx={{ width: '100%' }}>
                            <ListItem style={{ padding: "5px " }}>
                                <p href="#">Medical Job</p>
                            </ListItem>
                            <ListItem style={{ padding: "5px" }}>
                                <p href="#">+91 11 43720751</p>
                            </ListItem>
                            <ListItem style={{ padding: "5px" }}>
                                <Link href="mailto:someone@example.com">info@medicaljob.in</Link>
                            </ListItem>                            
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} className="social-media">
                        <h2 style={{ padding: "0", margin: "0", visibility: "hidden" }}>Social Media</h2>
                        <List>
                            <ListItem style={{ padding: "5px" }}>
                                <Link href="#">
                                    <img src={facebook} className="no-hover" />
                                    <img src={facebookbg} className="on-hover" />

                                </Link>
                                <Link href="#">
                                    <img src={twitter} className="no-hover" />
                                    <img src={twitterbg} className="on-hover" />
                                </Link>
                                <Link href="#">
                                    <img src={whatsapp} className="no-hover" />
                                    <img src={whatsappbg} className="on-hover" />
                                </Link>
                                <Link href="#">
                                    <img src={linkdin} className="no-hover" />
                                    <img src={linkdinbg} className="on-hover" />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </section>
        <section className='footer-last'>
                <Container>
                  <FooterLast />
                </Container>
        </section>
        </>
    )
}

export default Footer