import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="container" style={{ width: "30%" }}>
      <ToastContainer />
      <div className="row">
        <div className="col">
          <h2 className="text-center mt-3">Signup Now</h2>
          <form>
            <div className="mb-3 fs-5">
              <label htmlFor="fullName" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                {...register("fullName", {
                  required: "Username is required required",
                })}
              ></input>
              {errors.fullName && (
                <p className="text-danger">{errors.fullName.message}</p>
              )}
            </div>

            <div className="mb-3 fs-5">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              ></input>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-3 fs-5">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              ></input>
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary fs-5 px-4">
                Signup
              </button>
            </div>
            <div className="text-center mt-2">
                 <span>Already have an account? <Link to={"/login"}>Login</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
