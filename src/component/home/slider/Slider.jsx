import React from 'react'

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../../../assets/images/homeSlider/slider1.jpg";
import slider2 from "../../../assets/images/homeSlider/slider2.jpg";
import slider3 from "../../../assets/images/homeSlider/slider3.jpg";
import { Container } from '@mui/material';

const Slider = () => {
  return (
    <div>
        {/* <Container> */}
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={slider1} /> 
                </div>
                <div>
                    <img src={slider2} />                   
                </div>
                <div>
                    <img src={slider3} />                   
                </div>
        </Carousel>
        {/* </Container> */}
    </div>
  )
}

export default Slider