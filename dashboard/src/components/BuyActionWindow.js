import React, { useState, useContext } from "react";
import "./BuyActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyActionWindow = ({ uid }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const generalContext = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      const orderRes = await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          ...data,
          model: "Buy",
        },
        { withCredentials: true }
      );

      if (orderRes.status === 200 || orderRes.status === 201) {
        toast.success(orderRes.data.message || "Order placed successfully", {
          position: "top-right",
          autoClose: 2500,
        });

        // update holdings
        const res = await axios.get("http://localhost:3002/allHoldings", {
          withCredentials: true,
        });
        setAllHoldings(res.data);

        // Reset form fields
        reset();

        // Close buy window after delay so user sees toast
        setTimeout(() => {
          generalContext.closeBuyWindow();
        }, 1200);
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Failed to place order. Try again.";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                placeholder="1"
                {...register("qty", {
                  required: "Quantity is required",
                  min: {
                    value: 1,
                    message: "Minimum quantity is 1",
                  },
                })}
              />
              <span style={{ color: "red", fontSize: "0.7rem" }}>
                {errors.qty && <p>{errors.qty.message}</p>}
              </span>
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                placeholder="Rs 1500"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 100,
                    message: "Minimum price is Rs 100",
                  },
                })}
              />
              <span style={{ color: "red", fontSize: "0.7rem" }}>
                {errors.price && <p>{errors.price.message}</p>}
              </span>
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button
              type="submit"
              className="btn btn-blue"
              style={{ border: "none" }}
            >
              Buy
            </button>
            <button
              type="button"
              className="btn btn-grey"
              onClick={handleCancelClick}
              style={{ border: "none" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyActionWindow;
