import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const BookTour = () => {

  const { id } = useParams('id');

  const { user, googleSignIn, formLogin, gitHubSignIn, setUser, setError, setIsLoading } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    let { name, email, mobile } = data;

    console.log(data, id)

    // formLogin(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     setUser(user);
    //     history.push(redirect_uri);
    //   });

  };




  return (
    <div className="container">
      <form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="id" className="form-label">Tour Package</label>
          <input type="text" className="form-control" {...register("tour-id")} value={id} readOnly />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" {...register("name", { required: true })} />

          {errors.name && <span className="text-danger">Name field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />

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