import React,{useContext} from "react";
import { useForm} from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {login} = useContext(AuthContext);

  const handleSuccess = (msg) => {
    toast.success(msg,{
      position:"bottom-left"
    });
  };

  const handleError = (err) => {
    toast.error(err,{
      position:"bottom-left"
    });
  };

  const onSubmit = async (data) => {
  try {
    const response = await axios.post("http://localhost:3002/login", data, {
      withCredentials: true,
    });

    if (!response.data.success) {
      handleError(response.data.message || "Login Failed");
      return;
    }

    // If login successful
    handleSuccess(response.data.message || "Login Successful");
    reset();

    // fetch the user info to update context
    const userInfo = await axios.get("http://localhost:3002/user", {
      withCredentials: true,
    });

    if (userInfo.data.success) {
      login(userInfo.data.existingUser);
    }

    setTimeout(() => {
     window.location.href = "http://localhost:3000/";
    }, 1000);
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "Login Failed";
    handleError(errorMessage);
  }
};



  return (
    <div className="container" style={{ width: "30%" }}>
      <ToastContainer />
      <div className="row">
        <div className="col">
          <h4 className="text-center mt-3">Login Now</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 fs-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              ></input>
              {errors.email && (
                <p className="text-danger fs-6">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-3 fs-6">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
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
                <p className="text-danger fs-6">{errors.password.message}</p>
              )}
            </div>

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary fs-6 px-4">
                Login
              </button>
            </div>
            <div className="text-center mt-2">
                <span>Already have an account? <Link to={"/signup"}>Signup</Link></span>
            </div>

            <div className="text-center mt-2">
                <span>Reset Your Password? <Link to={"/ForgetPassword"}>Forget Password</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
