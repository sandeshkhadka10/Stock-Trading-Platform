import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import {Link} from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  // it is for canceling the sell or buy of the related stock
  const handleCancelClick = (uid) => {
    axios
      .delete(`http://localhost:3002/deleteOrder/${uid}`)
      .then(() => {
        // Remove deleted order from allOrders immediately
        setAllOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== uid)
        );

        // Update holdings if needed
        axios.get("http://localhost:3002/allHoldings").then((res) => {
          setAllHoldings(res.data);
        });
      })
      .catch((err) => {
        console.error("Delete failed:", err.response?.data || err.message);
      });
  };

  return (
    <div className="orders">
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
        <Link to="" className="btn btn-grey" onClick={()=>onDelete(uid)}>
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default Orders;
