import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/forgetPassword",
        data
      );
      if (response.status === 200) {
        toast.success(response.data.message || "Reset code sent", {
          position: "top-right",
          autoClose: 2500,
        });

        reset();

        setTimeout(() => {
          navigate("/ResetPassword");
        }, 2000);
      } else {
        toast.error(response.data.message || "User doesn't exist", {
          position: "top-right",
          autoClose: 2500,
        });
        reset();
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Failed to send the reset code.";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container px-3 px-md-0">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto">
          <h4 className="text-center mt-3">Verify Email</h4>
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
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary fs-6 px-4">
                Send Reset Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
