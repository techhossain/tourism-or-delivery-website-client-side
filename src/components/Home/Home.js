import React from 'react';
import Contact from '../Contact/Contact';
import Banner from '../Shared/Banner/Banner';
import Tours from '../Tours/Tours';
import About from './About/About';

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Banner></Banner>
      <About></About>
      <Tours></Tours>
      <Contact></Contact>
    </div>
  );
};

export default Home;