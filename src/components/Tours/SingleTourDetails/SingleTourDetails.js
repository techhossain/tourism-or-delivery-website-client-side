import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const SingleTourDetails = () => {

  const { id } = useParams('id');
  const [singleTour, setSingleTour] = useState({});

  useEffect(() => {
    fetch(`https://possessed-ghost-59800.herokuapp.com/tours/${id}`)
      .then(res => res.json())
      .then(data => {
        setSingleTour(data);
        console.log(data)
      })
  }, []);

  return (
    <div className="container mt-5">

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={singleTour?.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{singleTour?.title}</h5>
              <p className="fw-bold m-0">Budget: $ {singleTour?.budget}/ person</p>
              <p className="fw-bold m-0">Duration: <small>{singleTour?.duration}</small></p>
              <p className="card-text">{singleTour?.description}</p>

              <NavLink className="btn btn-success" to={`/book-now/${id}`}>Book Your Tour Now</NavLink>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingleTourDetails;