import React from 'react';
import useTours from '../../hooks/useTours';
import SingleTour from '../Shared/SingleTour/SingleTour';

const Tours = () => {

  const [tours] = useTours();

  return (
    <div className="container">
      <h2 className="text-center my-5">OUR TOUR PACKAGES</h2>
      <div className="row">
        {
          tours.map(tour => <SingleTour key={tour.id} tour={tour}></SingleTour>)
        }
      </div>
    </div>
  );
};

export default Tours;