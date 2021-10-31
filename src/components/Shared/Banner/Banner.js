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
            <h2 className="text-light">Let us plan your trip</h2>
            <p className="text-light">We have set tour program /packages and we also customize tour packages according to your choice.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techhossain.github.io/tour-resources/image/banner-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="text-light">An Unforgotable Journey</h2>
            <p className="text-light">Be with nature and feel the nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techhossain.github.io/tour-resources/image/banner-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="text-light">Best Tour Planner in Bangladesh</h2>
            <p className="text-light">Book your favourite Hotel & Resort in Bangladesh with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Banner;