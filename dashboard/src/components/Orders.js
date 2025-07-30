import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      });
  }, []);

  // it is for canceling the sell or buy of the related stock
  const handleCancelClick = async (uid) => {
    try {
      const deleteShareRes = await axios.delete(
        `http://localhost:3002/deleteOrder/${uid}`,
        {
          withCredentials: true,
        }
      );

      if (deleteShareRes.status === 200 || deleteShareRes.status === 201) {
        toast.success(
          deleteShareRes.data.message || "Order placed successfully",
          {
            position: "top-right",
            autoClose: 2500,
          }
        );
      }

      setAllOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== uid)
      );

      const res = await axios.get("http://localhost:3002/allHoldings", {
        withCredentials: true,
      });
      setAllHoldings(res.data);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Failed to place order. Try again.";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="orders">
      <ToastContainer/>
      <div className="no-orders">
        <h3 className="title">Orders({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            {allOrders.map((stock, index) => {
              const total = stock.price * stock.qty;

              return (
                <tr key={index}>
                  <td>{new Date(stock.timestamp).toLocaleDateString()}</td>
                  <td>{stock.model}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{total}</td>
                  <td>
                    {
                      <OrderListActions
                        uid={stock._id}
                        onDelete={handleCancelClick}
                      />
                    }
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

const OrderListActions = ({ uid, onDelete }) => {
  const generalContext = useContext(GeneralContext);
  const handleEditClick = () => {
    generalContext.openEditWindow(uid);
  };

  return (
    <div className="buttons">
      <div>
        <Link className="btn btn-blue" onClick={handleEditClick}>
          Edit
        </Link>
        <Link to="" className="btn btn-grey" onClick={() => onDelete(uid)}>
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default Orders;
