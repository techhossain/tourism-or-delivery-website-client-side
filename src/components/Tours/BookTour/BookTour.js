import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const BookTour = () => {

  const { id } = useParams('id');

  const { user, formLogin, setUser, setError } = useAuth();

  console.log(user.email, user.displayName);

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();


  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    data.status = 'pending';

    axios.post('https://possessed-ghost-59800.herokuapp.com/orders', data)
      .then(function (response) {
        if (response.data.insertedId) {

          alert('Added Successfully');
          reset();
          history.push('/orders');

        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="id" className="form-label d-none">Tour Package</label>
          <input type="text" className="form-control d-none" {...register("tourId")} value={id} readOnly />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" value={user?.displayName} className="form-control" {...register("name", { required: true })} />

          {errors.name && <span className="text-danger">Name field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" value={user?.email} className="form-control" {...register("email", { required: true })} />

          {errors.email && <span className="text-danger">Email field is required</span>}
        </div>


        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number</label>

          <input type="text" className="form-control" {...register("mobile", { required: true })} />

          {errors.mobile && <span className="text-danger">Mobile field is required</span>}
        </div>

        <input className="btn btn-primary" type="submit" name="Book Now" value="Book Now" />
      </form>
    </div>
  );
};

export default BookTour;