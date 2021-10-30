import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techhossain.github.io/tour-resources/image/banner-4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Let us plan your trip</h2>
            <p>We have set tour program /packages and we also customize tour packages according to your choice.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techhossain.github.io/tour-resources/image/banner-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Second slide label</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techhossain.github.io/tour-resources/image/banner-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Third slide label</h2>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Banner;