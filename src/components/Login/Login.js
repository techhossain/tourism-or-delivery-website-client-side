import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { user, googleSignIn, formLogin, gitHubSignIn, setUser, setError, setIsLoading } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || '/';
  const history = useHistory();

  if (user.email) {
    history.push(redirect_uri);
  }

  // Google Sign In 
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);

      }).catch((error) => {
        setError(error.message)
      }).finally(() => { setIsLoading(false) })
  }

  // gitHub Sign In 
  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);

      }).catch((error) => {
        setError(error.message)
      }).finally(() => { setIsLoading(false) })
  }


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    let { email, password } = data;

    formLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(redirect_uri);
      });

  };

  return (
    <div className="container">
      <h2 className="text-center mt-3">Please Login</h2>

      <form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />

          {errors.email && <span className="text-danger">Email field is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Password</label>

          <input type="password" className="form-control" {...register("password", { required: true })} />

          {errors.password && <span className="text-danger">Password field is required</span>}
        </div>

        <input className="btn btn-primary" type="submit" name="Login" />
      </form>
      <p className="text-center">New User? <Link to="/register">Register Now</Link></p>

      <hr className="w-50 mx-auto text-center" />
      <div className="d-grid gap-2 d-md-block text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-primary mx-2">Google Login</button>
        <button onClick={handleGitHubSignIn} className="btn btn-primary  mx-2">GitHub Login</button>
      </div>
    </div>
  );
};

export default Login;