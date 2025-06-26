import React, { useState, useContext } from "react";
import "./SellActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useForm } from "react-hook-form";

const SellActionWindow = ({ uid }) => {
  // const [stockQuantity, setStockQuantity] = useState(1);
  // const [stockPrice, setStockPrice] = useState(0.0);
  const [allHoldings, setAllHoldings] = useState([]);
  const generalContext = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    axios
      .post("http://localhost:3002/newOrder", {
        name: uid,
        qty: data.qty,
        price: data.price,
        model: "Sell",
      })
      .then(() => {
        axios.get("http://localhost:3002/allHoldings").then((res) => {
          setAllHoldings(res.data);
        });
      });
    generalContext.closeSellWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
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
                {...register("qty",{
                  required:"Quantity is required",
                  min:{
                    value:1,
                    message:"Minimum quantity"
                  }
                })}
              />
              <div>{errors.qty && <p>{errors.qty.message}</p>}</div>
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                placeholder="Rs 1500"
                {...register("price",{
                  required:"Price is required",
                  min:{
                    value:100,
                    message:"Minimum price is Rs 100"
                  }
                })}
              />
              <div>{errors.price && <p>{errors.price.message}</p>}</div>
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button className="btn btn-blue" style={{border:"none"}}>
              Sell
            </button>
            <button to="" className="btn btn-grey" onClick={handleCancelClick} style={{border:"none"}}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellActionWindow;
