import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleTour = (props) => {

  const { id, title, description, image, duration, price } = props.tour;
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={image} className="img-fluid rounded-start h-100" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="fw-bold m-0">Budget: $ {price}/ person</p>
              <p className="fw-bold m-0">Duration: <small>{duration}</small></p>
              <p className="card-text">{description.slice(0, 100)}</p>
              <NavLink className="btn btn-success" to={`/tours/${id}`}>View Details</NavLink>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleTour;