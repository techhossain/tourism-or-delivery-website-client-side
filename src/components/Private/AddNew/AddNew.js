import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AddNew = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {

    axios.post('https://possessed-ghost-59800.herokuapp.com/add-new', data)
      .then(function (response) {
        if (response.data.insertedId) {
          alert('Added Successfully');
          reset();
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(data)
  };

  return (
    <div className="container">
      <form className="w-md-50 mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Tour Title</label>
          <input type="text" className="form-control" {...register("title", { required: true })} />

          {errors.title && <span className="text-danger">Title field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Place Details</label>
          <textarea type="text" className="form-control" {...register("description", { required: true })} />

          {errors.description && <span className="text-danger">Description field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="budget" className="form-label">Cost</label>
          <input type="text" className="form-control" {...register("budget", { required: true })} />

          {errors.budget && <span className="text-danger">Budget is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Tour Duration</label>
          <input type="text" className="form-control" {...register("duration", { required: true })} />

          {errors.Duration && <span className="text-danger">Duration is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>

          <input type="text" className="form-control" {...register("image", { required: true })} />

          {errors.image && <span className="text-danger">Image URL is required</span>}
        </div>

        <input className="btn btn-primary" type="submit" name="Login" />

      </form>
    </div>
  );
};

export default AddNew;