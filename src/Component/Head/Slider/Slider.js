import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slider/1.jpg'
import slide2 from '../../../images/slider/2.jpg'
import slide3 from '../../../images/slider/3.jpg'

const Slider = () => {
   return (
      <div>
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={slide1}
                  alt="Second slide"
               />

               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={slide1}
                  alt="Third slide"
               />

               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default Slider;