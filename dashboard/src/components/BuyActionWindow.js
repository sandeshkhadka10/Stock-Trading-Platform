import React, { useState, useContext } from "react";
import "./BuyActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useForm } from "react-hook-form";

const BuyActionWindow = ({ uid }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const generalContext = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    axios
      .post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: data.qty,
          price: data.price,
          model: "Buy",
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        axios
          .get("http://localhost:3002/allHoldings", {
            withCredentials: true,
          })
          .then((res) => {
            setAllHoldings(res.data);
          });
      });
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                placeholder="1"
                {...register("qty", {
                  required: "Quantity is required",
                  min: {
                    value: 1,
                    message: "Minimum quantity is 1",
                  },
                })}
              />
              <span style={{ color: "red", fontSize:"0.7rem" }}>
                {errors.qty && <p>{errors.qty.message}</p>}
              </span>
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Rs 1500"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 100,
                    message: "Minimum price is Rs 100",
                  },
                })}
              />
              <span style={{ color: "red", fontSize:"0.7rem"}}>
                {errors.price && <p className="fs-6">{errors.price.message}</p>}
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
