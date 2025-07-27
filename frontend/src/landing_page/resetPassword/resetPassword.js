import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left"
    });
  };

  const handleError = (msg) => {
    toast.error(msg, {
      position: "bottom-left"
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3002/resetPassword", data);
      if (response.data.success) {
        handleSuccess(response.data.message || "Password Reset Successfully");
        reset();
        
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Failed To Reset Password";
      handleError(errorMessage);
    }
  };

  return (
    <div className="container" style={{ width: "30%" }}>
      <ToastContainer />
      <div className="row">
        <div className="col">
          <h4 className="text-center mt-3">Reset Password</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 fs-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="form-control" 
                {...register("email", {
                  required: "Email is required"
                })}
              />
              {errors.email && (<p className="text-danger fs-6">{errors.email.message}</p>)}
            </div>
            <div className="mb-3 fs-6">
              <label htmlFor="resetCode" className="form-label">Reset Code</label>
              <input 
                type="text" 
                id="resetCode" 
                placeholder="Enter reset code" 
                className="form-control" 
                {...register("resetCode", {
                  required: "Reset Code is required"
                })}
              />
              {errors.resetCode && (<p className="text-danger fs-6">{errors.resetCode.message}</p>)}
            </div>
            <div className="mb-3 fs-6">
              <label htmlFor="password" className="form-label">New Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your new password" 
                className="form-control" 
                {...register("password", {
                  required: "Password is required"
                })}
              />
              {errors.password && (<p className="text-danger fs-6">{errors.password.message}</p>)}
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary fs-6 px-4">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;