import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

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
              <th>Actions</th>
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
                  <td>{<OrderListActions uid={stock.name} />}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

const OrderListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleEditClick = () => {
    generalContext.openEditWindow(uid);
  };

  return (
    <div>
       <button onClick={handleEditClick} style={{padding:"3px", margin:"1rem"}}>Edit</button>
       <button style={{padding:"3px"}}>Cancel</button>
    </div>
  );
};

export default Orders;
