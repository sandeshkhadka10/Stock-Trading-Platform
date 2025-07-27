import React from "react";
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset,
    } = useForm();


return(
    <div>
        <div className="row">
            <div className="col">
                <h2>Verify Email</h2>
                <form>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="form-control"{
                            ...register("email",{
                                required:"Email is required"
                            })
                        }/>
                        {errors.email && (<p className="text-danger fs-6">{errors.email.message}</p>)}
                    </div>
                    <div>
                        <button type="submit">Send Reset Code</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
);
};

export default ForgetPassword;