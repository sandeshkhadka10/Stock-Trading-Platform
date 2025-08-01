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

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3002/resetPassword", data);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message || "Password Reset Successfully", {
          position: "top-right",
          autoClose: 2500,
        });

        reset();

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(response.data.message || "Invalid code or email", {
          position: "top-right",
          autoClose: 2500,
        });
        reset();
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to reset password. Try again.";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
    >
      <ToastContainer />
      <div className="row justify-content-center w-100 ms-5">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <h4 className="text-center mt-4">Reset Password</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 fs-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-danger fs-6">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3 fs-6">
              <label htmlFor="resetCode" className="form-label">
                Reset Code
              </label>
              <input
                type="text"
                id="resetCode"
                placeholder="Enter reset code"
                className="form-control"
                {...register("resetCode", {
                  required: "Reset Code is required",
                })}
              />
              {errors.resetCode && (
                <p className="text-danger fs-6">{errors.resetCode.message}</p>
              )}
            </div>

            <div className="mb-3 fs-6">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter your new password"
                className="form-control"
                {...register("newPassword", {
                  required: "Password is required",
                })}
              />
              {errors.newPassword && (
                <p className="text-danger fs-6">{errors.newPassword.message}</p>
              )}
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
