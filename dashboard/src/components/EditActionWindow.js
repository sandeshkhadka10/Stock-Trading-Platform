import React, { useState, useContext, useEffect } from "react";
import "./EditActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useForm } from "react-hook-form";

const EditActionWindow = ({ uid }) => {
  const [editStockQuantity, setEditStockQuantity] = useState("");
  const [editStockPrice, setEditStockPrice] = useState("");
  const [allHoldings, setAllHoldings] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const generalContext = useContext(GeneralContext);

  // it is done to fetch the previous data in the input field
  useEffect(() => {
    axios.get(`http://localhost:3002/getOrder/${uid}`).then((res) => {
      const order = res.data;
      setEditStockQuantity(order.qty);
      setEditStockPrice(order.price);

      setValue("qty",order.qty);
      setValue("price",order.price);
    });
  }, [uid,setValue]);

  const onSubmitHandler = (data) => {
    axios
      .put(`http://localhost:3002/editOrder/${uid}`, {
        name: uid,
        qty: data.qty,
        price: data.price,
      })
      .then(() => {
        axios.get("http://localhost:3002/allHoldings").then((res) => {
          setAllHoldings(res.data);
        });
      });
    generalContext.closeEditWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeEditWindow();
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
                {...register("qty",{
                  required:"Quantity is required",
                  min:{
                    value:1,
                    message:"Minimum quantity is 1"
                  }
                })}
              />
              <span>{errors.qty && <p>{errors.qty.message}</p>}</span>
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                {...register("price",{
                  required:"Price is required",
                  min:{
                    value:100,
                    message:"Minimum price is Rs 100"
                  }
                })}
              />
              <span>{errors.price && <p>{errors.price.message}</p>}</span>
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <div>
            <button className="btn btn-blue" style={{border:"none"}}>
              Apply
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

export default EditActionWindow;
