import React, { useState, useContext, useEffect } from "react";
import "./EditActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditActionWindow = ({ uid }) => {
  const [allHoldings, setAllHoldings] = useState([]);
  const generalContext = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/getOrder/${uid}`, {
        withCredentials: true,
      })
      .then((res) => {
        const order = res.data;
        setValue("qty", order.qty);
        setValue("price", order.price);
      })
      .catch(() => {
        toast.error("Failed to fetch existing order");
      });
  }, [uid, setValue]);

  const onSubmitHandler = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:3002/editOrder/${uid}`,
        { name: uid, ...data },
        { withCredentials: true }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Order updated successfully", {
          position: "top-right",
          autoClose: 2500,
        });

        const holdingRes = await axios.get("http://localhost:3002/allHoldings", {
          withCredentials: true,
        });
        setAllHoldings(holdingRes.data);

        reset();
        setTimeout(() => {
          generalContext.closeEditWindow();
        }, 1200);
      }
    } catch (err) {
      toast.error("Failed to update order. Try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleCancelClick = () => {
    generalContext.closeEditWindow();
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
                {...register("qty", {
                  required: "Quantity is required",
                  min: { value: 1, message: "Minimum quantity is 1" },
                })}
              />
              {errors.qty && <p className="error-msg">{errors.qty.message}</p>}
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                step="0.05"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 100, message: "Minimum price is Rs 100" },
                })}
              />
              {errors.price && (
                <p className="error-msg">{errors.price.message}</p>
              )}
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button type="submit" className="btn btn-blue">Apply</button>
            <button type="button" className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditActionWindow;
