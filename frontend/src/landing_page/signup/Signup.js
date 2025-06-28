import React from "react";
import {useForm} from "react-hook-form";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors},reset} = useForm();


    const handleError = (err) => {
        toast.error(err,{
            position:"bottom-left"
        });
    }

    const handleSuccess = (msg) => {
        toast.success(msg,{
            position:"bottom-right"
        });
    }

    const onSubmit = async(data) => {
        try{
            const response = await axios.post("http://localhost:3002/signup",
                data,
                {withCredentials: true}
            );
            const {success, message} = response.data;

            if(success){
                handleSuccess(message){
                    reset();
                    setTimeout(()=>{})
                }
            }

        }catch(error){
            console.log(error);
            handleError("Server error. Please try again");
        }
    }

}

export default Signup;