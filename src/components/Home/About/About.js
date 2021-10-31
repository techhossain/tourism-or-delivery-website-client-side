import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="display-4 fw-bold">Book you Upcomming Tour with Us</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">We have more than 100+ top rated Hotel & Resort at Bangladesh in our booking network.
          You can get upto 50% discount at every booking. Book your favourite Hotel & Resort in Bangladesh with us.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to="/tours" class="btn btn-primary btn-lg px-4 me-sm-3">OUR TOUR PACKAGES</Link>
        </div>
      </div>
    </div>
  );
};

export default About;